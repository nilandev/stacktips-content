# StackTips Content

Public source-of-truth content for [stacktips.com](https://stacktips.com), migrated from the original Spring Boot + Postgres backend.

## Structure

- `articles/` — blog posts, one markdown file per slug (`content/articles/{slug}.md`), frontmatter + body.
- `courses/` — ordered sequences of article slugs that make up a course.
- `topics/` — category/taxonomy pages (e.g. `java`, `spring-boot`, `android`).
- `media/` — images referenced by the content above, at the paths referenced in each file's markdown (`/media/...`).

This repo is consumed at build time by the (private) site repo. It has no build step of its own.
