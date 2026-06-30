import Link from "next/link";

export const metadata = {
  title: "Editorial Policy | WessTech",
  description:
    "WessTech editorial policy covering original content, accuracy, corrections, curated news, and AI-assisted content review.",
};

export default function EditorialPolicyPage() {
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
          Editorial Policy
        </h1>

        <p style={intro}>
          WessTech publishes practical technology guides, tutorials, commentary,
          and curated industry updates for readers interested in AI, networking,
          cybersecurity, cloud, automation, and technology careers.
        </p>

        <Section title="Our Mission">
          WessTech exists to make complex technology topics easier to understand
          through practical, clear, and useful content. Our goal is to help IT
          professionals, learners, small businesses, and New Zealand readers
          make better sense of modern technology.
        </Section>

        <Section title="Original Content">
          WessTech aims to publish original guides, tutorials, explanations, and
          opinion pieces based on research, professional experience, and
          practical technology use. We avoid copying full articles from other
          publishers.
        </Section>

        <Section title="Curated Industry News">
          Some areas of WessTech may include curated technology news from
          trusted external publishers. These items are provided as links to the
          original source and are intended to help readers discover relevant
          industry updates.
        </Section>

        <Section title="Accuracy and Corrections">
          We aim to provide accurate and current information, but technology
          changes quickly. If we identify an error or receive a valid correction
          request, we will review the content and update it where appropriate.
        </Section>

        <Section title="External Sources">
          When referencing third-party information, we aim to use reputable
          sources such as official vendor documentation, government agencies,
          recognised technology publications, cybersecurity advisories, and
          credible industry resources.
        </Section>

        <Section title="AI-Assisted Content">
          Artificial intelligence tools may be used to assist with drafting,
          research, editing, or formatting. However, WessTech content is
          reviewed before publication to improve clarity, usefulness, and
          accuracy.
        </Section>

        <Section title="Independence">
          Opinions expressed on WessTech are independent and do not represent
          the views of any employer, organisation, vendor, or third-party
          publisher.
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
