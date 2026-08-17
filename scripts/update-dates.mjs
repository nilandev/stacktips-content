#!/usr/bin/env node
// Sets publishedDate/updatedDate in frontmatter for content files whose
// body (not just frontmatter) changed between BEFORE_SHA and AFTER_SHA.
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import matter from "gray-matter";

const AFTER = process.env.AFTER_SHA || "HEAD";
const rawBefore = process.env.BEFORE_SHA || "";
const isNullSha = /^0+$/.test(rawBefore);
const BEFORE = rawBefore && !isNullSha ? rawBefore : `${AFTER}^`;

function git(args) {
  return execFileSync("git", args, { encoding: "utf8" });
}

function readAtRef(ref, file) {
  try {
    return git(["show", `${ref}:${file}`]);
  } catch {
    return null; // file didn't exist at that ref
  }
}

const FRONTMATTER_RE = /^(---\r?\n)([\s\S]*?)(\r?\n---\r?\n?)/;

// Replace a top-level `key: "..."` line inside the frontmatter block only,
// leaving every other byte (quote style, wrapping, blank lines) untouched —
// a full YAML round-trip via matter.stringify would reformat the whole file.
function setDateField(raw, key, isoValue) {
  const match = raw.match(FRONTMATTER_RE);
  if (!match) return raw;
  const [full, open, body, close] = match;
  const lineRe = new RegExp(`^${key}:.*$`, "m");
  if (!lineRe.test(body)) return raw;
  const newBody = body.replace(lineRe, `${key}: "${isoValue}"`);
  return raw.slice(0, match.index) + open + newBody + close + raw.slice(match.index + full.length);
}

const changedFiles = git(["diff", "--name-only", "--diff-filter=ACMR", BEFORE, AFTER, "--", "*.md"])
  .split("\n")
  .map((f) => f.trim())
  .filter(Boolean)
  .filter((f) => fs.existsSync(f));

const now = new Date().toISOString();
const touched = [];

for (const file of changedFiles) {
  const newRaw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(newRaw);

  // Only manage dates for files that already declare these fields.
  if (!("publishedDate" in data) && !("updatedDate" in data)) continue;

  const oldRaw = readAtRef(BEFORE, file);
  const oldContent = oldRaw === null ? null : matter(oldRaw).content.trim();
  const contentChanged = oldContent === null || oldContent !== content.trim();

  if (!contentChanged) continue;

  let updated = newRaw;
  if (!data.publishedDate) {
    updated = setDateField(updated, "publishedDate", now);
  }
  updated = setDateField(updated, "updatedDate", now);

  fs.writeFileSync(file, updated);
  touched.push(file);
}

if (touched.length) {
  console.log(`Updated dates in ${touched.length} file(s):`);
  for (const f of touched) console.log(` - ${f}`);
} else {
  console.log("No content (body) changes detected — dates untouched.");
}
