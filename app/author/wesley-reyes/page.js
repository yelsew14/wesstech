import Link from "next/link";

export const metadata = {
  title: "Wesley Reyes | WessTech Author",
  description:
    "Author profile for Wesley Reyes, founder and editor of WessTech, covering AI, networking, cybersecurity, cloud, and automation.",
};

export default function WesleyReyesAuthorPage() {
  return (
    <main
      style={{
        background: "#060a14",
        minHeight: "100vh",
        color: "#e2e8f0",
        fontFamily: "'Space Grotesk',sans-serif",
      }}
    >
      <div
        style={{ maxWidth: 900, margin: "0 auto", padding: "60px 24px 90px" }}
      >
        <Link
          href="/"
          style={{ color: "#6b7280", fontSize: 13, textDecoration: "none" }}
        >
          ← Back to WessTech
        </Link>

        <section
          style={{
            background: "#0d1424",
            border: "1px solid #1e2d47",
            borderRadius: 20,
            padding: "36px",
            marginTop: 32,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 24,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                width: 96,
                height: 96,
                borderRadius: "50%",
                background: "linear-gradient(135deg,#2563eb,#7c3aed)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 38,
                fontWeight: 800,
                color: "#fff",
              }}
            >
              WR
            </div>

            <div>
              <p
                style={{
                  color: "#60a5fa",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                Founder & Editor
              </p>
              <h1 style={{ fontSize: 42, color: "#f8fafc", marginBottom: 10 }}>
                Wesley Reyes
              </h1>
              <p style={{ color: "#94a3b8", fontSize: 16, lineHeight: 1.7 }}>
                Technology professional focused on enterprise networking,
                cybersecurity, automation, cloud, and artificial intelligence.
              </p>
            </div>
          </div>
        </section>

        <section style={card}>
          <h2 style={h2}>About Wesley</h2>
          <p style={p}>
            Wesley Reyes is the founder and editor of WessTech. He writes about
            practical technology topics including artificial intelligence,
            enterprise networking, cybersecurity, infrastructure automation,
            cloud platforms, and technology leadership.
          </p>
          <p style={p}>
            WessTech was created to help IT professionals, learners, and
            businesses understand modern technology through clear explanations,
            practical guides, and curated industry updates.
          </p>
        </section>

        <section style={card}>
          <h2 style={h2}>Areas of Focus</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: 12,
            }}
          >
            {[
              "Artificial Intelligence",
              "Enterprise Networking",
              "Cybersecurity",
              "Network Automation",
              "GitHub Copilot",
              "Infrastructure as Code",
              "Cloud Computing",
              "Technology Leadership",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "#060a14",
                  border: "1px solid #1e2d47",
                  borderRadius: 12,
                  padding: "14px 16px",
                  color: "#cbd5e1",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section style={card}>
          <h2 style={h2}>Editorial Approach</h2>
          <p style={p}>
            Wesley focuses on making technical topics easier to understand by
            combining research, practical experience, and clear explanations.
            Articles on WessTech are designed to be useful for real-world
            readers, not just search engines.
          </p>
        </section>

        <section style={card}>
          <h2 style={h2}>Connect</h2>
          <p style={p}>
            For enquiries, feedback, or article suggestions, please contact
            WessTech through the contact page.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              marginTop: 10,
              background: "#2563eb",
              color: "#fff",
              padding: "10px 16px",
              borderRadius: 10,
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            Contact WessTech
          </Link>
        </section>
      </div>
    </main>
  );
}

const card = {
  background: "#0d1424",
  border: "1px solid #1e2d47",
  borderRadius: 16,
  padding: "28px",
  marginTop: 24,
};

const h2 = {
  fontSize: 24,
  color: "#f1f5f9",
  marginBottom: 12,
};

const p = {
  color: "#94a3b8",
  fontSize: 15,
  lineHeight: 1.8,
  marginBottom: 14,
};
