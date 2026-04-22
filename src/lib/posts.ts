import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export interface PostFrontmatter {
  title: string;
  date: string;
  description: string;
  tags: string[];
  slug: string;
}

export interface PostMeta extends PostFrontmatter {
  readingTimeText: string;
  readingTimeMinutes: number;
}

export interface Post extends PostMeta {
  content: string;
}

function readPostFile(filename: string): Post | null {
  if (!filename.endsWith(".mdx") && !filename.endsWith(".md")) {
    return null;
  }

  const filePath = path.join(POSTS_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as Partial<PostFrontmatter>;

  const fileSlug = filename.replace(/\.mdx?$/, "");
  const slug = frontmatter.slug ?? fileSlug;

  if (!frontmatter.title || !frontmatter.date) {
    throw new Error(
      `Post "${filename}" is missing required frontmatter (title, date).`
    );
  }

  const stats = readingTime(content);

  return {
    title: frontmatter.title,
    date: frontmatter.date,
    description: frontmatter.description ?? "",
    tags: frontmatter.tags ?? [],
    slug,
    content,
    readingTimeText: stats.text,
    readingTimeMinutes: Math.max(1, Math.ceil(stats.minutes)),
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) {
    return [];
  }

  const entries = fs.readdirSync(POSTS_DIR);
  const posts = entries
    .map((filename) => {
      const post = readPostFile(filename);
      if (!post) return null;
      const { content: _content, ...meta } = post;
      return meta;
    })
    .filter((post): post is PostMeta => post !== null)
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

  return posts;
}

export function getPostSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}

export function getPostBySlug(slug: string): Post | null {
  if (!fs.existsSync(POSTS_DIR)) {
    return null;
  }

  const entries = fs.readdirSync(POSTS_DIR);
  for (const filename of entries) {
    const post = readPostFile(filename);
    if (post && post.slug === slug) {
      return post;
    }
  }

  return null;
}
