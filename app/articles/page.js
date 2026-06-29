import { articles } from "../../lib/articles";

export const metadata = {
  title: "Original Technology Guides | WessTech",
  description:
    "Original WessTech technology guides about AI, networking, cybersecurity, automation, cloud, and practical technology leadership.",
};

export default function ArticlesPage() {
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
      `}</style>
      <div
        style={{ maxWidth: 1000, margin: "0 auto", padding: "60px 24px 90px" }}
      >
        <a
          href="/"
          style={{ color: "#6b7280", fontSize: 13, textDecoration: "none" }}
        >
          ← Back to WessTech
        </a>

        <h1
          style={{
            fontSize: 42,
            marginTop: 32,
            marginBottom: 16,
            color: "#f8fafc",
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
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 18,
            marginTop: 36,
          }}
        >
          {articles.map((article) => (
            <a
              key={article.slug}
              href={`/articles/${article.slug}`}
              style={{ textDecoration: "none" }}
            >
              <article
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
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
