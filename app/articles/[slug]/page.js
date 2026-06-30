import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllArticles, getArticleBySlug } from "../../../lib/articles";
import { notFound } from "next/navigation";
import Link from "next/link";

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
        :focus-visible{outline:3px solid #60a5fa;outline-offset:3px;border-radius:8px}
        .article-shell{max-width:860px;margin:0 auto;padding:60px 24px 90px}
        .article-link:hover{text-decoration:underline}
        .article-body{overflow-wrap:break-word}
        .article-body h1{font-family:'Syne',sans-serif;color:#f8fafc;font-size:clamp(28px,5vw,42px);line-height:1.16;margin:42px 0 16px;letter-spacing:-.02em}
        .article-body h2{font-family:'Syne',sans-serif;color:#f1f5f9;font-size:clamp(24px,4vw,30px);line-height:1.25;margin:42px 0 14px;scroll-margin-top:78px;letter-spacing:-.01em}
        .article-body h3{font-family:'Syne',sans-serif;color:#e2e8f0;font-size:clamp(20px,3vw,24px);line-height:1.3;margin:32px 0 12px}
        .article-body p{color:#cbd5e1;font-size:clamp(15.5px,2vw,17px);line-height:1.9;margin:0 0 20px}
        .article-body ul,.article-body ol{color:#cbd5e1;font-size:16px;line-height:1.85;margin:0 0 24px;padding-left:24px}
        .article-body li{margin-bottom:8px}
        .article-body blockquote{background:#0d1424;border:1px solid #1e2d47;border-left:4px solid #60a5fa;border-radius:14px;color:#cbd5e1;margin:28px 0;padding:20px 22px}
        .article-body blockquote p{margin-bottom:12px}
        .article-body blockquote p:last-child{margin-bottom:0}
        .article-body pre{max-width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;background:#020617;border:1px solid #1e2d47;border-radius:14px;color:#dbeafe;font-size:14px;line-height:1.7;margin:24px 0;padding:18px}
        .article-body code{background:#111827;border:1px solid #243653;border-radius:6px;color:#bfdbfe;font-size:.92em;padding:2px 5px}
        .article-body pre code{background:transparent;border:0;border-radius:0;padding:0;color:inherit;font-size:inherit}
        .article-body table{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;border-collapse:collapse;margin:26px 0;color:#cbd5e1}
        .article-body th,.article-body td{border:1px solid #1e2d47;padding:10px 12px;text-align:left;min-width:150px}
        .article-body th{background:#0d1424;color:#f1f5f9}
        .article-body img{display:block;max-width:100%;height:auto;border-radius:14px;margin:28px auto}
        .article-meta{display:flex;flex-wrap:wrap;gap:12px;color:#6b7280;font-size:14px;margin-top:22px;padding-top:18px;border-top:1px solid #1e2d47}
        .article-card{background:#0d1424;border:1px solid #1e2d47;border-radius:16px}
        .article-card a,.article-meta a{min-height:32px;display:inline-flex;align-items:center}
        @media(max-width:640px){
          .article-shell{padding:36px 16px 64px!important}
          .article-meta{display:grid!important;gap:8px!important}
          .article-meta span[aria-hidden="true"]{display:none}
          .article-body ul,.article-body ol{padding-left:20px}
          .article-body blockquote,.article-card{border-radius:12px!important}
        }
        @media(max-width:380px){.article-shell{padding-left:12px!important;padding-right:12px!important}}
      `}</style>
      <article
        className="article-shell"
        style={{ maxWidth: 860, margin: "0 auto", padding: "60px 24px 90px" }}
      >
        <Link
          href="/articles"
          style={{ color: "#6b7280", fontSize: 13, textDecoration: "none" }}
        >
          ← Back to Articles
        </Link>

        <header style={{ marginTop: 36, marginBottom: 36 }}>
          <div
            className="article-meta"
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
              <Link
                href="/author/wesley-reyes"
                style={{ color: "#60a5fa", textDecoration: "none" }}
              >
                {article.author}
              </Link>
            </span>
            <span aria-hidden="true">·</span>
            <span>Published {article.date}</span>
            <span aria-hidden="true">·</span>
            <span>Updated {article.updated}</span>
          </div>
        </header>

        <aside
          className="article-card"
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
          <Link
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
          </Link>
        </footer>
      </article>
    </main>
  );
}
