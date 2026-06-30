export const metadata = {
  title: "Disclaimer | WessTech",
  description:
    "WessTech disclaimer for educational technology content, external links, accuracy, and independent opinions.",
};

export default function DisclaimerPage() {
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
          Disclaimer
        </h1>

        <section style={card}>
          <p style={p}>
            The information published on WessTech is provided for general
            educational and informational purposes only.
          </p>

          <p style={p}>
            While we aim to keep information accurate and current, technology
            changes quickly and we cannot guarantee that all information is
            complete, current, or error-free.
          </p>

          <p style={p}>
            Readers should verify important technical information using official
            vendor documentation, recognised security advisories, or qualified
            professional advice before making technical, business, or security
            decisions.
          </p>

          <p style={p}>
            Opinions expressed on WessTech are those of the author and do not
            represent the views of any employer, organisation, technology
            vendor, or third-party publisher.
          </p>

          <p style={p}>
            WessTech may link to external websites. We are not responsible for
            the content, availability, privacy practices, or accuracy of
            third-party websites.
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
  padding: "32px",
  marginTop: 24,
};

const p = {
  color: "#94a3b8",
  fontSize: 15,
  lineHeight: 1.9,
  marginBottom: 18,
};
