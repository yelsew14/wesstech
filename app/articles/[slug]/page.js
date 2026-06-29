import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllArticles, getArticleBySlug } from "../../../lib/articles";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllArticles().map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | WessTech",
    };
  }

  return {
    title: `${article.title} | WessTech`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      url: `https://wesstech.xyz/articles/${article.slug}`,
      publishedTime: article.date,
      modifiedTime: article.updated,
      authors: [article.author],
    },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main
      style={{
        background: "#060a14",
        minHeight: "100vh",
        color: "#e2e8f0",
        fontFamily: "'Space Grotesk',sans-serif",
      }}
    >
      <style>{`
        *{box-sizing:border-box;margin:0;padding:0}
        .sg{font-family:'Space Grotesk',sans-serif}
        .sy{font-family:'Syne',sans-serif}
        a{color:inherit;text-decoration:none}
        .article-link:hover{text-decoration:underline}
        .article-body h2{font-family:'Syne',sans-serif;color:#f1f5f9;font-size:28px;line-height:1.3;margin:0 0 14px;scroll-margin-top:78px}
        .article-body p{color:#cbd5e1;font-size:16px;line-height:1.9;margin:0 0 18px}
        .article-body section{margin-bottom:34px}
      `}</style>
      <article
        style={{ maxWidth: 860, margin: "0 auto", padding: "60px 24px 90px" }}
      >
        <a
          href="/articles"
          style={{ color: "#6b7280", fontSize: 13, textDecoration: "none" }}
        >
          ← Back to Articles
        </a>

        <header style={{ marginTop: 36, marginBottom: 36 }}>
          <div
            style={{
              color: "#60a5fa",
              fontSize: 13,
              fontWeight: 700,
              marginBottom: 14,
            }}
          >
            {article.category} · {article.readTime}
          </div>

          <h1
            className="sy"
            style={{
              fontSize: "clamp(34px,6vw,56px)",
              lineHeight: 1.08,
              color: "#f8fafc",
              marginBottom: 18,
              letterSpacing: "-.03em",
            }}
          >
            {article.title}
          </h1>

          <p
            style={{
              color: "#94a3b8",
              fontSize: 18,
              lineHeight: 1.8,
              maxWidth: 760,
            }}
          >
            {article.excerpt}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              color: "#6b7280",
              fontSize: 14,
              marginTop: 22,
              paddingTop: 18,
              borderTop: "1px solid #1e2d47",
            }}
          >
            <span>
              By{" "}
              <a
                href="/author/wesley-reyes"
                style={{ color: "#60a5fa", textDecoration: "none" }}
              >
                {article.author}
              </a>
            </span>
            <span>·</span>
            <span>Published {article.date}</span>
            <span>·</span>
            <span>Updated {article.updated}</span>
          </div>
        </header>

        <aside
          style={{
            background: "#0d1424",
            border: "1px solid #1e2d47",
            borderRadius: 16,
            padding: 24,
            marginBottom: 36,
          }}
        >
          <h2 style={{ color: "#f1f5f9", fontSize: 20, marginBottom: 14 }}>
            Table of Contents
          </h2>
          <ol style={{ paddingLeft: 22, color: "#94a3b8", lineHeight: 1.9 }}>
            {article.tableOfContents.map((item) => (
              <li key={item.id}>
                <a className="article-link" href={`#${item.id}`}>
                  {item.title}
                </a>
              </li>
            ))}
          </ol>
        </aside>

        <div className="article-body">
          <MDXRemote
            source={article.content}
            components={{
              h2: (props) => {
                const id = String(props.children || "")
                  .toLowerCase()
                  .replace(/[^a-z0-9\s-]/g, "")
                  .trim()
                  .replace(/\s+/g, "-");

                return <h2 id={id} {...props} />;
              },
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            borderTop: "1px solid #1e2d47",
            paddingTop: 22,
            marginTop: 16,
          }}
        >
          {article.tags.map((tag) => (
            <span
              key={tag}
              style={{
                background: "#0d1424",
                border: "1px solid #1e2d47",
                borderRadius: 18,
                color: "#94a3b8",
                fontSize: 12,
                fontWeight: 600,
                padding: "6px 10px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <footer
          style={{
            background: "#0d1424",
            border: "1px solid #1e2d47",
            borderRadius: 16,
            padding: 26,
            marginTop: 44,
          }}
        >
          <h2 style={{ color: "#f1f5f9", fontSize: 22, marginBottom: 10 }}>
            About the Author
          </h2>
          <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.8 }}>
            Wesley Reyes is the founder and editor of WessTech, writing about
            AI, networking, cybersecurity, cloud, automation, and practical
            technology leadership.
          </p>
          <a
            href="/author/wesley-reyes"
            style={{
              display: "inline-block",
              marginTop: 14,
              color: "#60a5fa",
              fontSize: 14,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            View author profile →
          </a>
        </footer>
      </article>
    </main>
  );
}
