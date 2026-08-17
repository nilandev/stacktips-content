# StackTips Content

This repository is the public source-of-truth content store for [stacktips.com](https://stacktips.com) — every article, course or quiz published on the site lives here as version-controlled Markdown.

## What is StackTips?

StackTips is a developer learning resource focused on practical, hands-on tutorials — the kind of walk-throughs and how-to guides you reach for when you're actually building something, not just reading theory. The site covers Java/Spring, Python, mobile development, cloud platforms, and more, aimed squarely at helping newbie developers make progress on their learning journey.

## Who maintains this?

StackTips is maintained by **[Nilanchala Panigrahy](https://github.com/nilandev)**, a software architect based in London. You can find my full profile at [`instructors/nilanchala-panigrahy.md`](instructors/nilanchala-panigrahy.md). All contributions go through his review before merging.

## What you can find here

| Folder | What's in it |
|---|---|
| [`articles/`](articles) | Blog posts and tutorials — one Markdown file per slug (`articles/{slug}.md`), frontmatter + body. |
| [`courses/`](courses) | Structured, ordered course content. Each course is a folder (`courses/{course-slug}/`) containing a `curriculum.md` (course metadata + lesson order) plus one Markdown file per lesson. |
| [`topics/`](topics) | Category/taxonomy pages (e.g. `java`, `spring-boot`, `android`, `aws`) that group related articles and courses. |
| [`instructors/`](instructors) | Author/contributor profiles — bio, photo, and social links. |
| [`quizzes/`](quizzes) | Practice question sets and exam-style quizzes. |
| [`media/`](media) | Images referenced by the content above, at the paths referenced in each file's Markdown (`/media/...`). |

## How to Contribute?

Choose based on your own expertise. We're currently focused on:

- Java, Spring, Spring Boot
- Python, Django, Flask
- Android, Xamarin, Flutter, React Native
- AWS, Google Cloud, Azure

Check the [open issues](https://github.com/nilandev/stacktips-content/issues) for specific requests, or pitch your own idea by opening one.

### Guidelines

Read these before you start writing, so you don't lose time or hit a rejection later:

- **Quality**
- **Unique content**
- **Original content**
- **Copyright**

It doesn't matter who writes it, but you need to own it. StackTips retains copyright of everything published on the site. Once your post is live, you're free to republish it elsewhere, as long as it links back to the original StackTips article.

For tone and formatting, use the existing articles under [`articles/`](articles) as your reference.

### Contribution workflow (via Pull Request)

1. **Fork this repository** and clone your fork locally.
2. **Create a branch** for your article, e.g. `article/spring-boot-caching-with-redis`.
3. **Create your contributor profile** (first-time contributors only) — see below.
4. **Write your article** as a new Markdown file under `articles/{your-article-slug}.md`. Base the frontmatter on an existing article (e.g. [`articles/7-blogging-mistakes-i-wish-i-had-known-before.md`](articles/7-blogging-mistakes-i-wish-i-had-known-before.md)):

   ```yaml
   ---
   title: "Your Article Title"
   slug: "your-article-slug"
   excerpt: "A one to two sentence summary of the article."
   difficulty: beginner # beginner | intermediate | advanced
   author: your-profile-slug # the slug from your instructors/*.md file
   thumbnail: /media/posts/your-article-slug.jpeg
   topics:
     - java # must match an existing slug in topics/, or propose a new one in your PR
   tags:
     - relevant-tag
   seo:
     metaTitle: "Your Article Title"
     metaDescription: "A short SEO-friendly description."
     metaKeywords: null
   ---
   ```

   Leave out `id`, `publishedDate`, and `updatedDate` — the maintainer sets these on merge.
5. **Add any images** you reference to `media/posts/`, and link to them as `/media/posts/your-image.jpeg` in your Markdown.
6. **Open a Pull Request** against `main`, describing what the article covers and linking the issue it addresses, if any.
7. **Address review feedback.** The maintainer will review for quality, accuracy, and fit with the guidelines above, and may ask for edits before merging.
8. **Merge and publish.** Once merged, your article goes live on the next site build.

### Author credit

Articles are published under your name, unless you tell us otherwise. Your profile is also featured on the site's featured authors page, linked from your article byline.

### Create your contributor profile

If this is your first contribution, add yourself to [`instructors/`](instructors) as a new file `instructors/{your-name-slug}.md`, using [`instructors/nilanchala-panigrahy.md`](instructors/nilanchala-panigrahy.md) as the template:

```yaml
---
name: "Your Full Name"
slug: your-name-slug
bio: "<p>A couple of sentences about your background and what you write about.</p>"
image: /media/instructors/your-name-slug.jpeg
github: https://github.com/your-handle
linkedin: https://www.linkedin.com/in/your-handle
twitter: https://twitter.com/your-handle
youtube: https://www.youtube.com/@your-handle
---
```

Only `name`, `slug`, and `bio` are required — omit any social link you don't have. Add your profile photo to `media/instructors/`. Reference your profile's `slug` in the `author` field of every article you write.

---

If this all sounds good, pick up one of the [open issues](https://github.com/nilandev/stacktips-content/issues) or propose your own idea — we're happy to review and accept your submissions.
