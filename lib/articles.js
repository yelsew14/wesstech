import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

function slugifyHeading(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function normalizeDate(value) {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  return String(value || "");
}

function getArticleFiles() {
  if (!fs.existsSync(ARTICLES_DIR)) {
    return [];
  }

  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .sort();
}

function getTableOfContents(content) {
  return content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const title = line.replace(/^##\s+/, "").trim();

      return {
        id: slugifyHeading(title),
        title,
      };
    });
}

function readArticleFile(fileName) {
  const filePath = path.join(ARTICLES_DIR, fileName);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const slug = data.slug || fileName.replace(/\.mdx$/, "");

  return {
    slug,
    title: data.title || slug,
    category: data.category || "Technology",
    date: normalizeDate(data.date || data.publishedAt),
    featured: Boolean(data.featured),
    updated: normalizeDate(
      data.updated || data.updatedAt || data.date || data.publishedAt,
    ),
    author: data.author || "WessTech",
    readTime: data.readTime || data.readingTime || "5 min read",
    excerpt: data.excerpt || "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    tableOfContents: getTableOfContents(content),
    content,
  };
}

export function getAllArticles() {
  return getArticleFiles()
    .map(readArticleFile)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export const articles = getAllArticles();

export function getArticleBySlug(slug) {
  return getAllArticles().find((article) => article.slug === slug);
}
