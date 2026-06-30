import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div style={{ background: '#060a14', minHeight: '100vh', fontFamily: "'Space Grotesk', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        .sg{font-family:'Space Grotesk',sans-serif}
        .sy{font-family:'Syne',sans-serif}
        a{color:#2563eb;text-decoration:none}
        a:hover{text-decoration:underline}
      `}</style>

      {/* Nav */}
      <div style={{ background: '#030711', borderBottom: '1px solid #1e2d47', padding: '0 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{ width: 30, height: 30, background: 'linear-gradient(135deg,#2563eb,#7c3aed)', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>⚡</div>
            <span className="sy" style={{ color: '#f8fafc', fontSize: 16, fontWeight: 800 }}>WessTech</span>
          </Link>
          <Link href="/" className="sg" style={{ color: '#6b7280', fontSize: 13 }}>← Back to News</Link>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px 80px' }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'inline-block', background: '#1e2d47', borderRadius: 6, padding: '3px 12px', marginBottom: 16 }}>
            <span className="sg" style={{ color: '#6b7280', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase' }}>Legal</span>
          </div>
          <h1 className="sy" style={{ fontSize: 'clamp(28px,5vw,44px)', fontWeight: 800, color: '#f1f5f9', marginBottom: 10, letterSpacing: '-.02em' }}>
            Privacy Policy
          </h1>
          <p className="sg" style={{ color: '#374151', fontSize: 13 }}>
            Last updated: {new Date().toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })} · wesstech.xyz
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: '#0d1424', border: '1px solid #1e2d47', borderLeft: '3px solid #2563eb', borderRadius: 12, padding: '20px 22px', marginBottom: 40 }}>
          <p className="sg" style={{ color: '#94a3b8', fontSize: 14, lineHeight: 1.8 }}>
            This Privacy Policy explains how <strong style={{ color: '#e2e8f0' }}>WessTech</strong> (<strong style={{ color: '#e2e8f0' }}>wesstech.xyz</strong>) collects, uses, and protects your information when you visit our website. We are committed to protecting your privacy and being transparent about how we operate.
          </p>
        </div>

        {/* Sections */}
        {[
          {
            num: '01',
            title: 'Information We Collect',
            color: '#2563eb',
            content: (
              <>
                <P>WessTech is a technology publication with original guides and curated technology news links. We do <Strong>not</Strong> collect personal information such as your name, email address, or contact details directly.</P>
                <P>We may collect anonymous, non-identifiable usage data through third-party analytics and advertising services to help us understand how visitors use the site and improve our content.</P>
              </>
            )
          },
          {
            num: '02',
            title: 'Google AdSense & Advertising',
            color: '#7c3aed',
            content: (
              <>
                <P>We use <Strong>Google AdSense</Strong> to display advertisements on this website. Google AdSense uses cookies and similar tracking technologies to show relevant ads based on your browsing activity and interests.</P>
                <P>Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visits to this site and other sites on the internet.</P>
                <P>You may opt out of personalised advertising at any time by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a> or by visiting <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">aboutads.info</a>.</P>
              </>
            )
          },
          {
            num: '03',
            title: 'Cookies',
            color: '#0d7377',
            content: (
              <>
                <P>WessTech itself does not set first-party cookies. However, third-party services embedded on this site — including Google AdSense and Google Fonts — may set cookies on your device.</P>
                <P>You can control and manage cookie preferences through your browser settings. Note that disabling cookies may affect the functionality of some features on this site.</P>
              </>
            )
          },
          {
            num: '04',
            title: 'Third-Party Services',
            color: '#d97706',
            content: (
              <>
                <P>This site uses the following third-party services:</P>
                <div style={{ marginTop: 12 }}>
                  {[
                    { name: 'Google AdSense', desc: 'Displays advertising. May collect browsing data per Google\'s Privacy Policy.', url: 'https://policies.google.com/privacy' },
                    { name: 'Google Fonts', desc: 'Loads web fonts (Space Grotesk, Syne). Google may log font requests.', url: 'https://policies.google.com/privacy' },
                    { name: 'News Sources', desc: 'All news links point to third-party publishers. We are not responsible for their privacy practices.', url: null },
                  ].map((s, i) => (
                    <div key={i} style={{ background: '#060a14', border: '1px solid #1e2d47', borderRadius: 9, padding: '12px 16px', marginBottom: 8, display: 'flex', gap: 12 }}>
                      <span style={{ color: '#2563eb', flexShrink: 0, marginTop: 1 }}>◆</span>
                      <div>
                        <div className="sg" style={{ fontWeight: 600, color: '#e2e8f0', fontSize: 13.5, marginBottom: 3 }}>{s.name}</div>
                        <div className="sg" style={{ color: '#6b7280', fontSize: 12.5, lineHeight: 1.6 }}>
                          {s.desc}{s.url && <> <a href={s.url} target="_blank" rel="noopener noreferrer">View Privacy Policy →</a></>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )
          },
          {
            num: '05',
            title: 'External Links',
            color: '#16a34a',
            content: (
              <>
                <P>WessTech publishes original guides and also curates links to external websites including news publishers, government sites, job boards, and community resources.</P>
                <P>We are <Strong>not responsible</Strong> for the privacy practices or content of those external sites. We encourage you to read the privacy policy of any site you visit through our links.</P>
              </>
            )
          },
          {
            num: '06',
            title: 'Data Security',
            color: '#dc2626',
            content: (
              <>
                <P>Since WessTech does not collect personal data directly, there is no personal data stored on our servers to protect. We take reasonable measures to ensure the website itself is secure and regularly updated.</P>
              </>
            )
          },
          {
            num: '07',
            title: "Children's Privacy",
            color: '#7c3aed',
            content: (
              <>
                <P>WessTech does not knowingly collect any personal information from children under the age of 13. If you believe a child has provided personal information through this site, please contact us.</P>
              </>
            )
          },
          {
            num: '08',
            title: 'Changes to This Policy',
            color: '#0d7377',
            content: (
              <>
                <P>We may update this Privacy Policy from time to time to reflect changes in our practices or for legal and regulatory reasons. Any changes will be posted on this page with an updated date at the top.</P>
                <P>Your continued use of WessTech after any changes constitutes your acceptance of the updated policy.</P>
              </>
            )
          },
          {
            num: '09',
            title: 'Contact',
            color: '#d97706',
            content: (
              <>
                <P>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us through <a href="https://wesstech.xyz">wesstech.xyz</a>.</P>
                <P>This site is operated as part of the <Strong>WessTech</Strong> web portfolio — also home to <a href="https://pathway.wesstech.xyz">PathwayNZ</a>, a free immigrant guide for New Zealand.</P>
              </>
            )
          },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: 32 }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: s.color + '20', border: `1px solid ${s.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                <span className="sg" style={{ fontSize: 10, fontWeight: 700, color: s.color }}>{s.num}</span>
              </div>
              <div style={{ flex: 1 }}>
                <h2 className="sy" style={{ fontSize: 18, fontWeight: 800, color: '#f1f5f9', marginBottom: 12, letterSpacing: '-.01em' }}>{s.title}</h2>
                {s.content}
              </div>
            </div>
            {i < 8 && <div style={{ marginTop: 28, borderBottom: '1px solid #1e2d47' }} />}
          </div>
        ))}

        {/* Footer note */}
        <div style={{ marginTop: 48, background: '#0d1424', border: '1px solid #1e2d47', borderRadius: 12, padding: '20px 22px', textAlign: 'center' }}>
          <p className="sg" style={{ color: '#374151', fontSize: 12 }}>
            © {new Date().getFullYear()} WessTech · wesstech.xyz · Built by <a href="https://wesstech.xyz" style={{ color: '#374151' }}>Wess</a> in New Zealand
          </p>
        </div>
      </div>
    </div>
  )
}

function P({ children }) {
  return <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#94a3b8', fontSize: 14, lineHeight: 1.85, marginBottom: 10 }}>{children}</p>
}

function Strong({ children }) {
  return <strong style={{ color: '#e2e8f0', fontWeight: 600 }}>{children}</strong>
}
