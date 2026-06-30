export default function About() {
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
        <div style={{ maxWidth: 900, margin: '0 auto', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{ width: 30, height: 30, background: 'linear-gradient(135deg,#2563eb,#7c3aed)', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>⚡</div>
            <span className="sy" style={{ color: '#f8fafc', fontSize: 16, fontWeight: 800 }}>WessTech</span>
          </a>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="/" className="sg" style={{ color: '#6b7280', fontSize: 13 }}>← Back to News</a>
            <a href="/privacy" className="sg" style={{ color: '#6b7280', fontSize: 13 }}>Privacy Policy</a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px 80px' }}>

        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ display: 'inline-block', background: '#1e2d47', borderRadius: 6, padding: '3px 12px', marginBottom: 16 }}>
            <span className="sg" style={{ color: '#6b7280', fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase' }}>About</span>
          </div>
          <h1 className="sy" style={{ fontSize: 'clamp(30px,5vw,48px)', fontWeight: 800, color: '#f1f5f9', marginBottom: 16, letterSpacing: '-.02em', lineHeight: 1.1 }}>
            About WessTech
          </h1>
          <p className="sg" style={{ color: '#94a3b8', fontSize: 16, lineHeight: 1.8, maxWidth: 600 }}>
            WessTech is a New Zealand-based technology publication focused on original practical guides for artificial intelligence, networking, cybersecurity, automation, cloud, and the technology work shaping New Zealand and the world.
          </p>
        </div>

        {/* What we do */}
        <div style={{ background: '#0d1424', border: '1px solid #1e2d47', borderRadius: 16, padding: '32px 28px', marginBottom: 24 }}>
          <h2 className="sy" style={{ fontSize: 24, fontWeight: 800, color: '#f1f5f9', marginBottom: 16, letterSpacing: '-.01em' }}>What WessTech Publishes</h2>
          <p className="sg" style={{ color: '#94a3b8', fontSize: 14.5, lineHeight: 1.9, marginBottom: 16 }}>
            WessTech publishes original technology guides, explainers, and practical analysis for readers who want useful detail rather than headlines alone. Our editorial focus covers artificial intelligence, network engineering, cybersecurity, automation, cloud infrastructure, New Zealand technology developments, startups, and technology employment.
          </p>
          <p className="sg" style={{ color: '#94a3b8', fontSize: 14.5, lineHeight: 1.9 }}>
            Original WessTech articles are supported by curated links to reputable New Zealand and international publishers including the NZ Herald, RNZ, Stuff, Computerworld NZ, TechCrunch, The Verge, Wired, MIT Technology Review, CERT NZ, and Seek NZ. Our goal is to combine durable guidance with timely context for New Zealand readers.
          </p>
        </div>

        {/* Mission */}
        <div style={{ background: '#0d1424', border: '1px solid #1e2d47', borderLeft: '4px solid #2563eb', borderRadius: 16, padding: '32px 28px', marginBottom: 24 }}>
          <h2 className="sy" style={{ fontSize: 24, fontWeight: 800, color: '#f1f5f9', marginBottom: 16, letterSpacing: '-.01em' }}>Our Mission</h2>
          <p className="sg" style={{ color: '#94a3b8', fontSize: 14.5, lineHeight: 1.9, marginBottom: 16 }}>
            New Zealand has a thriving and growing technology sector, but practical technology guidance relevant to New Zealanders is often scattered, overly generic, or locked inside vendor documentation. WessTech aims to publish clear, original guides that help readers understand the tools, risks, and infrastructure decisions behind modern technology.
          </p>
          <p className="sg" style={{ color: '#94a3b8', fontSize: 14.5, lineHeight: 1.9 }}>
            We also curate important technology news and cybersecurity advisories from trusted sources, because New Zealand businesses and individuals deserve timely context about digital threats, product changes, policy decisions, and the technology job market.
          </p>
        </div>

        {/* Coverage areas */}
        <div style={{ background: '#0d1424', border: '1px solid #1e2d47', borderRadius: 16, padding: '32px 28px', marginBottom: 24 }}>
          <h2 className="sy" style={{ fontSize: 24, fontWeight: 800, color: '#f1f5f9', marginBottom: 20, letterSpacing: '-.01em' }}>What We Cover</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 14 }}>
            {[
              { icon: '🥝', title: 'NZ Tech Context', color: '#22c55e', desc: 'Original context around local technology developments, government digital policy, New Zealand startup news, and innovations from Kiwi companies.' },
              { icon: '🤖', title: 'AI & Artificial Intelligence', color: '#7c3aed', desc: 'Practical AI guides, model updates, workflow ideas, and implications for New Zealand workers, engineers, and organisations.' },
              { icon: '📦', title: 'Products & Platforms', color: '#2563eb', desc: 'Useful coverage of hardware, software, cloud, and consumer technology products with relevance to New Zealand readers and businesses.' },
              { icon: '🚀', title: 'Startups & Funding', color: '#f59e0b', desc: 'Venture capital investment, startup funding rounds in New Zealand and globally, founder stories, and the growth of the innovation economy.' },
              { icon: '🔐', title: 'Cybersecurity', color: '#ef4444', desc: 'Security advisories from CERT NZ, ransomware and phishing threats, data breaches, and guidance on protecting New Zealand businesses and individuals online.' },
              { icon: '💼', title: 'Tech Jobs NZ', color: '#06b6d4', desc: 'Technology employment news, job market trends, in-demand skills, and opportunities for technology professionals across New Zealand.' },
            ].map((c, i) => (
              <div key={i} style={{ background: '#060a14', border: '1px solid #1e2d47', borderRadius: 12, padding: '16px 16px', borderLeft: `3px solid ${c.color}` }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{c.icon}</div>
                <h3 className="sg" style={{ fontSize: 14, fontWeight: 700, color: '#e2e8f0', marginBottom: 6 }}>{c.title}</h3>
                <p className="sg" style={{ fontSize: 12.5, color: '#6b7280', lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who we are */}
        <div style={{ background: '#0d1424', border: '1px solid #1e2d47', borderRadius: 16, padding: '32px 28px', marginBottom: 24 }}>
          <h2 className="sy" style={{ fontSize: 24, fontWeight: 800, color: '#f1f5f9', marginBottom: 16, letterSpacing: '-.01em' }}>Who We Are</h2>
          <p className="sg" style={{ color: '#94a3b8', fontSize: 14.5, lineHeight: 1.9, marginBottom: 16 }}>
            WessTech is operated by <strong style={{ color: '#e2e8f0' }}>wesstech.xyz</strong>, a New Zealand-based web design and technology services sole trader. We build websites, digital tools, and online resources that serve real community needs.
          </p>
          <p className="sg" style={{ color: '#94a3b8', fontSize: 14.5, lineHeight: 1.9, marginBottom: 16 }}>
            In addition to WessTech, we operate <strong style={{ color: '#e2e8f0' }}>PathwayNZ</strong> (<a href="https://pathway.wesstech.xyz">pathway.wesstech.xyz</a>) — a free information resource for Filipino migrants to New Zealand, covering IELTS preparation, NZ immigration guides, settling-in advice, and a daily Bible devotion.
          </p>
          <p className="sg" style={{ color: '#94a3b8', fontSize: 14.5, lineHeight: 1.9 }}>
            Our work is driven by a belief that the internet should be useful — providing clear, accurate, accessible information to people who need it, whether they are following New Zealand technology news or navigating a new life in a new country.
          </p>
        </div>

        {/* Sources */}
        <div style={{ background: '#0d1424', border: '1px solid #1e2d47', borderRadius: 16, padding: '32px 28px', marginBottom: 24 }}>
          <h2 className="sy" style={{ fontSize: 24, fontWeight: 800, color: '#f1f5f9', marginBottom: 16, letterSpacing: '-.01em' }}>Curated News Sources</h2>
          <p className="sg" style={{ color: '#94a3b8', fontSize: 14.5, lineHeight: 1.9, marginBottom: 16 }}>
            Alongside original WessTech guides, we link to original news articles published by reputable technology media and news organisations. We do not reproduce full articles. Curated stories link directly to the original publisher. Our sources include:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 8 }}>
            {[
              'NZ Herald (Technology)',
              'RNZ Business & Technology',
              'Stuff — Technology',
              'Computerworld New Zealand',
              'National Business Review (NBR)',
              'TechCrunch',
              'The Verge',
              'Wired',
              'MIT Technology Review',
              'Reuters Technology',
              'Engadget',
              'CERT NZ',
              'Seek NZ',
              'LinkedIn News',
              'Tech in Asia',
              '9to5Mac',
            ].map((s, i) => (
              <div key={i} style={{ background: '#060a14', border: '1px solid #1e2d47', borderRadius: 8, padding: '8px 12px' }}>
                <span className="sg" style={{ fontSize: 12.5, color: '#94a3b8' }}>{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div style={{ background: '#0d1424', border: '1px solid #1e2d47', borderRadius: 16, padding: '32px 28px' }}>
          <h2 className="sy" style={{ fontSize: 24, fontWeight: 800, color: '#f1f5f9', marginBottom: 16, letterSpacing: '-.01em' }}>Contact</h2>
          <p className="sg" style={{ color: '#94a3b8', fontSize: 14.5, lineHeight: 1.9, marginBottom: 12 }}>
            For enquiries about WessTech, advertising, content, or our web services, please contact us through <a href="https://wesstech.xyz">wesstech.xyz</a>.
          </p>
          <p className="sg" style={{ color: '#94a3b8', fontSize: 14.5, lineHeight: 1.9 }}>
            WessTech is based in New Zealand and operates under New Zealand law.
          </p>
        </div>

        {/* Back link */}
        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <a href="/" className="sg" style={{ color: '#2563eb', fontSize: 14, fontWeight: 600 }}>← Back to WessTech News</a>
          <span className="sg" style={{ color: '#374151', margin: '0 16px' }}>·</span>
          <a href="/privacy" className="sg" style={{ color: '#4b5563', fontSize: 14 }}>Privacy Policy</a>
        </div>

      </div>
    </div>
  )
}
