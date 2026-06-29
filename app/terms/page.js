export const metadata = {
  title: "Terms of Use | WessTech",
  description:
    "Terms of Use for WessTech, including content usage, external links, accuracy, and website access.",
};

export default function TermsPage() {
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
          Terms of Use
        </h1>

        <p style={intro}>
          By using WessTech, you agree to the following terms. If you do not
          agree with these terms, please do not use this website.
        </p>

        <Section title="Website Content">
          WessTech provides technology articles, guides, tutorials, commentary,
          and curated links for general information and educational purposes.
        </Section>

        <Section title="Copyright">
          Original content published on WessTech is protected by copyright. You
          may quote short portions with appropriate attribution, but you may not
          copy, republish, or redistribute full articles without permission.
        </Section>

        <Section title="External Links">
          WessTech may link to third-party websites. We are not responsible for
          the content, accuracy, security, or privacy practices of external
          websites.
        </Section>

        <Section title="No Professional Advice">
          Information on WessTech is provided for general educational purposes
          only. You should verify important technical, business, security, or
          financial decisions using official documentation or qualified
          professional advice.
        </Section>

        <Section title="Changes to These Terms">
          These terms may be updated from time to time. Continued use of the
          website means you accept the updated terms.
        </Section>
      </div>
    </main>
  );
}

function Section({ title, children }) {
  return (
    <section
      style={{
        background: "#0d1424",
        border: "1px solid #1e2d47",
        borderRadius: 16,
        padding: "28px",
        marginTop: 24,
      }}
    >
      <h2 style={{ fontSize: 24, color: "#f1f5f9", marginBottom: 12 }}>
        {title}
      </h2>
      <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.8 }}>
        {children}
      </p>
    </section>
  );
}

const intro = {
  color: "#94a3b8",
  fontSize: 16,
  lineHeight: 1.8,
  maxWidth: 720,
};
