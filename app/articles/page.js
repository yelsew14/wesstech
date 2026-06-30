import { getAllArticles } from "../../lib/articles";
import Link from "next/link";

export const metadata = {
  title: "Original Technology Guides | WessTech",
  description:
    "Original WessTech technology guides about AI, networking, cybersecurity, automation, cloud, and practical technology leadership.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

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
        .articles-shell{max-width:1000px;margin:0 auto;padding:60px 24px 90px}
        .articles-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:18px;margin-top:36px}
        .article-card{background:#0d1424;border:1px solid #1e2d47;border-radius:16px;padding:24px;height:100%;transition:border-color .2s ease,transform .2s ease,box-shadow .2s ease}
        .article-card:hover{border-color:#2563eb66;transform:translateY(-2px);box-shadow:0 18px 46px rgba(3,7,17,.32)}
        .article-card-link{display:block;height:100%}
        @media(max-width:640px){
          .articles-shell{padding:36px 16px 64px!important}
          .articles-grid{grid-template-columns:1fr!important;gap:14px!important}
          .article-card{padding:20px!important;border-radius:14px!important}
        }
        @media(max-width:380px){.articles-shell{padding-left:12px!important;padding-right:12px!important}}
      `}</style>
      <div
        className="articles-shell"
        style={{ maxWidth: 1000, margin: "0 auto", padding: "60px 24px 90px" }}
      >
        <Link
          href="/"
          style={{ color: "#6b7280", fontSize: 13, textDecoration: "none" }}
        >
          ← Back to WessTech
        </Link>

        <h1
          className="sy"
          style={{
            fontSize: "clamp(32px,6vw,42px)",
            marginTop: 32,
            marginBottom: 16,
            color: "#f8fafc",
            lineHeight: 1.12,
            letterSpacing: "-.02em",
          }}
        >
          Original Technology Guides
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: 16,
            lineHeight: 1.8,
            maxWidth: 720,
          }}
        >
          Practical WessTech guides for people working with AI, networking,
          cybersecurity, automation, cloud, and modern technology operations.
        </p>

        <div
          className="articles-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 18,
            marginTop: 36,
          }}
        >
          {articles.map((article) => (
            <Link
              className="article-card-link"
              key={article.slug}
              href={`/articles/${article.slug}`}
              style={{ textDecoration: "none" }}
            >
              <article
                className="article-card"
                style={{
                  background: "#0d1424",
                  border: "1px solid #1e2d47",
                  borderRadius: 16,
                  padding: 24,
                  height: "100%",
                }}
              >
                <div
                  style={{
                    color: "#60a5fa",
                    fontSize: 12,
                    fontWeight: 700,
                    marginBottom: 10,
                  }}
                >
                  {article.category} · {article.readTime}
                </div>

                <h2
                  style={{
                    color: "#f1f5f9",
                    fontSize: 22,
                    lineHeight: 1.3,
                    marginBottom: 12,
                  }}
                >
                  {article.title}
                </h2>

                <p
                  style={{ color: "#94a3b8", fontSize: 14.5, lineHeight: 1.7 }}
                >
                  {article.excerpt}
                </p>

                <div style={{ color: "#6b7280", fontSize: 13, marginTop: 18 }}>
                  By {article.author} · Published {article.date}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
