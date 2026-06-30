import Link from "next/link";

export const metadata = {
  title: "Contact WessTech",
  description:
    "Contact WessTech for article suggestions, corrections, feedback, and technology-related enquiries.",
};

export default function ContactPage() {
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

        <h1
          style={{
            fontSize: 42,
            marginTop: 32,
            marginBottom: 16,
            color: "#f8fafc",
          }}
        >
          Contact WessTech
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: 16,
            lineHeight: 1.8,
            maxWidth: 680,
          }}
        >
          Have a question, correction, feedback, or article idea? WessTech
          welcomes messages from readers, technology professionals, businesses,
          and anyone interested in AI, networking, cybersecurity, cloud, and
          automation.
        </p>

        <section style={card}>
          <h2 style={h2}>General Enquiries</h2>
          <p style={p}>
            For general enquiries, feedback, collaboration opportunities, or
            questions about WessTech, please contact:
          </p>
          <p style={email}>contact@wesstech.xyz</p>
        </section>

        <section style={card}>
          <h2 style={h2}>Corrections</h2>
          <p style={p}>
            We aim to keep our content accurate and useful. If you notice an
            error, outdated information, or something that needs clarification,
            please let us know so we can review and update it.
          </p>
        </section>

        <section style={card}>
          <h2 style={h2}>Article Suggestions</h2>
          <p style={p}>
            We welcome suggestions for practical technology topics, including AI
            tools, network automation, cybersecurity basics, cloud platforms, IT
            career guidance, and technology trends relevant to New Zealand
            readers.
          </p>
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
};

const email = {
  color: "#60a5fa",
  fontSize: 16,
  fontWeight: 700,
  marginTop: 12,
};
