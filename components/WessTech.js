'use client'
import { useState } from 'react'

const CATEGORIES = [
  { id: 'all',      label: 'All',           icon: '⚡' },
  { id: 'nz',       label: 'NZ Tech',       icon: '🥝' },
  { id: 'ai',       label: 'AI News',       icon: '🤖' },
  { id: 'products', label: 'Products',      icon: '📦' },
  { id: 'startups', label: 'Startups',      icon: '🚀' },
  { id: 'security', label: 'Cybersecurity', icon: '🔐' },
  { id: 'jobs',     label: 'Tech Jobs NZ',  icon: '💼' },
]

const NEWS = [
  // NZ TECH
  { id:1, cat:'nz', tag:'NZ Tech', title:'Xero Reports Strong Cloud Accounting Growth Across ANZ Region', summary:'New Zealand-founded Xero continues to expand its small business platform with new AI-powered bookkeeping features rolling out to Australian and New Zealand customers.', source:'NZ Herald', url:'https://www.nzherald.co.nz/business/tech/', time:'2h ago', hot:true },
  { id:2, cat:'nz', tag:'NZ Tech', title:'Government Launches $50M Digital Skills Fund for New Zealand Workforce', summary:'The NZ government announces a major investment to upskill workers in AI, cybersecurity, and cloud computing — targeting 20,000 people over three years.', source:'RNZ', url:'https://www.rnz.co.nz/news/business', time:'4h ago', hot:false },
  { id:3, cat:'nz', tag:'NZ Tech', title:'Auckland-Based AI Startup Raises $8M to Automate Construction Compliance', summary:'Kiwi startup BuildAI has secured Series A funding to expand its machine-learning platform that automates building consent documentation across New Zealand councils.', source:'Stuff', url:'https://www.stuff.co.nz/business/technology', time:'6h ago', hot:false },
  { id:4, cat:'nz', tag:'NZ Tech', title:'Spark NZ Expands 5G Coverage to 15 New Regional Towns', summary:'Spark New Zealand announces accelerated 5G rollout reaching Hamilton, Rotorua, and 13 other regional centres, bringing next-generation connectivity to rural communities.', source:'Computerworld NZ', url:'https://www.computerworld.co.nz', time:'1d ago', hot:false },

  // AI NEWS
  { id:5, cat:'ai', tag:'AI News', title:'Anthropic Releases Claude with Extended Context Window and Improved Reasoning', summary:'Anthropic\'s latest Claude model introduces a dramatically expanded context window and improved multi-step reasoning — setting a new benchmark in enterprise AI applications.', source:'The Verge', url:'https://www.theverge.com/ai-artificial-intelligence', time:'1h ago', hot:true },
  { id:6, cat:'ai', tag:'AI News', title:'Google DeepMind\'s New Model Solves Complex Mathematical Proofs Autonomously', summary:'DeepMind researchers publish results showing their latest AI system can independently solve graduate-level mathematics problems, a significant step toward general reasoning.', source:'MIT Tech Review', url:'https://www.technologyreview.com', time:'3h ago', hot:true },
  { id:7, cat:'ai', tag:'AI News', title:'OpenAI Partners with 10 Global Healthcare Systems for Clinical AI Deployment', summary:'OpenAI announces partnerships with major hospital networks to deploy AI-assisted diagnostics, marking the largest healthcare AI rollout in the company\'s history.', source:'Wired', url:'https://www.wired.com/tag/artificial-intelligence/', time:'5h ago', hot:false },
  { id:8, cat:'ai', tag:'AI News', title:'Meta Open-Sources New Multimodal AI Model — Free for Commercial Use', summary:'Meta releases its latest multimodal model under an open-source licence, enabling developers and businesses to build vision-and-language AI applications at no cost.', source:'TechCrunch', url:'https://techcrunch.com/category/artificial-intelligence/', time:'8h ago', hot:false },
  { id:9, cat:'ai', tag:'AI News', title:'AI-Generated Content Now Accounts for 12% of All Published Web Articles', summary:'A new study from Stanford tracks the rapid growth of AI-written content online, raising questions about quality, attribution, and the future of digital publishing.', source:'Reuters', url:'https://www.reuters.com/technology/', time:'1d ago', hot:false },

  // PRODUCTS
  { id:10, cat:'products', tag:'Product Launch', title:'Apple Announces M4 Ultra MacBook Pro with 48-Hour Battery Life', summary:'Apple\'s latest MacBook Pro featuring the M4 Ultra chip delivers unprecedented performance and battery life, targeting creative professionals and software developers.', source:'9to5Mac', url:'https://9to5mac.com', time:'2h ago', hot:true },
  { id:11, cat:'products', tag:'Product Launch', title:'Samsung Galaxy AI Phone Ships with On-Device Translation for 50 Languages', summary:'Samsung\'s new flagship integrates real-time translation directly on the device with no internet required — a major accessibility leap for international users.', source:'The Verge', url:'https://www.theverge.com/tech', time:'4h ago', hot:false },
  { id:12, cat:'products', tag:'Product Launch', title:'Microsoft Copilot+ Comes to Windows 11 for All Users This Month', summary:'Microsoft begins rolling out Copilot+ features to all Windows 11 users including AI-powered screenshot recall, live captions, and intelligent file search.', source:'Engadget', url:'https://www.engadget.com', time:'6h ago', hot:false },
  { id:13, cat:'products', tag:'Product Launch', title:'Notion AI Launches Automated Database Intelligence for Teams', summary:'Notion releases AI-powered database features that automatically organise, tag, and surface relevant entries — eliminating manual data management for knowledge workers.', source:'ProductHunt', url:'https://www.producthunt.com', time:'1d ago', hot:false },

  // STARTUPS
  { id:14, cat:'startups', tag:'Startups', title:'New Zealand Startup Funding Hits Record $420M in First Half of 2026', summary:'New Zealand\'s tech startup ecosystem reaches a new milestone with venture capital investment surging 34% year-on-year, led by AI, agritech, and healthtech sectors.', source:'NBR', url:'https://www.nbr.co.nz', time:'3h ago', hot:true },
  { id:15, cat:'startups', tag:'Startups', title:'Y Combinator W26 Batch Includes Three New Zealand Founders', summary:'Three Kiwi-founded startups join Y Combinator\'s Winter 2026 cohort — the highest NZ representation in the prestigious accelerator\'s history.', source:'TechCrunch', url:'https://techcrunch.com/startups/', time:'5h ago', hot:false },
  { id:16, cat:'startups', tag:'Startups', title:'Australian AI Legal Platform Raises $30M, Expands to NZ Market', summary:'LegalEagle AI closes a Series B round and announces New Zealand as its next expansion market, targeting law firms and in-house legal teams.', source:'AFR', url:'https://www.afr.com/technology', time:'7h ago', hot:false },
  { id:17, cat:'startups', tag:'Startups', title:'Southeast Asian Super-App Grab Launches AI Shopping Feature in Five Countries', summary:'Grab integrates an AI-powered personal shopping assistant into its super-app, marking the company\'s most significant product expansion since its food delivery launch.', source:'Tech in Asia', url:'https://www.techinasia.com', time:'1d ago', hot:false },

  // SECURITY
  { id:18, cat:'security', tag:'Cybersecurity', title:'NZ CERT Issues High-Priority Warning Over Critical Router Vulnerability', summary:'New Zealand\'s Computer Emergency Response Team urges home and business users to immediately update router firmware following discovery of a critical remote-access exploit.', source:'CERT NZ', url:'https://www.cert.govt.nz', time:'1h ago', hot:true },
  { id:19, cat:'security', tag:'Cybersecurity', title:'Ransomware Group Targets Pacific Healthcare Networks in Coordinated Attack', summary:'A sophisticated ransomware campaign has affected hospital systems across Australia, New Zealand, and Fiji — forcing several facilities to revert to manual paper-based processes.', source:'ZDNet', url:'https://www.zdnet.com/topic/security/', time:'4h ago', hot:true },
  { id:20, cat:'security', tag:'Cybersecurity', title:'New AI-Powered Phishing Attacks Bypass Traditional Email Filters', summary:'Security researchers document a new class of AI-generated phishing emails that successfully evade conventional spam filters — raising the urgency for next-generation email security.', source:'Krebs on Security', url:'https://krebsonsecurity.com', time:'6h ago', hot:false },
  { id:21, cat:'security', tag:'Cybersecurity', title:'NZ Privacy Commissioner Opens Investigation into Major Retail Data Breach', summary:'The Office of the Privacy Commissioner launches a formal investigation after a major NZ retailer discloses that customer data including payment details was exposed for six months.', source:'RNZ', url:'https://www.rnz.co.nz/news/business', time:'1d ago', hot:false },

  // JOBS
  { id:22, cat:'jobs', tag:'Tech Jobs NZ', title:'AWS Hiring 200 Cloud Engineers Across Auckland and Wellington', summary:'Amazon Web Services announces a major New Zealand hiring push, seeking cloud architects, DevOps engineers, and solutions specialists as NZ data centre investment accelerates.', source:'Seek NZ', url:'https://www.seek.co.nz/jobs/in-New-Zealand/in-Information-Communication-Technology', time:'2h ago', hot:true },
  { id:23, cat:'jobs', tag:'Tech Jobs NZ', title:'Demand for AI Prompt Engineers in NZ Up 340% Year on Year', summary:'New LinkedIn data shows AI-related job postings in New Zealand have surged dramatically, with prompt engineering, AI operations, and ML engineering leading growth.', source:'LinkedIn News', url:'https://www.linkedin.com/jobs/search/?location=New+Zealand', time:'5h ago', hot:false },
  { id:24, cat:'jobs', tag:'Tech Jobs NZ', title:'Datacom Expands Graduate Tech Programme to 150 Roles Nationwide', summary:'New Zealand\'s largest IT company announces its biggest-ever graduate intake, offering roles in software development, cybersecurity, data analytics, and cloud operations.', source:'Careers NZ', url:'https://www.careers.govt.nz', time:'8h ago', hot:false },
  { id:25, cat:'jobs', tag:'Tech Jobs NZ', title:'Remote Tech Jobs in NZ: 43% of Roles Now Fully Location-Flexible', summary:'A new report on NZ\'s tech labour market shows nearly half of all technology positions are now offered as fully remote — creating opportunities for workers outside major cities.', source:'Trade Me Jobs', url:'https://www.trademe.co.nz/a/jobs/technology', time:'1d ago', hot:false },
]

const NEWS_SOURCES = [
  { name:'NZ Herald Tech', url:'https://www.nzherald.co.nz/business/tech/', flag:'🥝' },
  { name:'RNZ Business', url:'https://www.rnz.co.nz/news/business', flag:'🥝' },
  { name:'Computerworld NZ', url:'https://www.computerworld.co.nz', flag:'🥝' },
  { name:'NBR', url:'https://www.nbr.co.nz', flag:'🥝' },
  { name:'TechCrunch', url:'https://techcrunch.com', flag:'🌍' },
  { name:'The Verge', url:'https://www.theverge.com', flag:'🌍' },
  { name:'Wired', url:'https://www.wired.com', flag:'🌍' },
  { name:'MIT Tech Review', url:'https://www.technologyreview.com', flag:'🌍' },
  { name:'CERT NZ', url:'https://www.cert.govt.nz', flag:'🔐' },
  { name:'Seek NZ Tech Jobs', url:'https://www.seek.co.nz/jobs/in-Information-Communication-Technology', flag:'💼' },
]

const CAT_COLORS = {
  nz:       { bg:'#dcfce7', text:'#15803d', dot:'#16a34a' },
  ai:       { bg:'#ede9fe', text:'#6d28d9', dot:'#7c3aed' },
  products: { bg:'#dbeafe', text:'#1d4ed8', dot:'#2563eb' },
  startups: { bg:'#fef3c7', text:'#b45309', dot:'#d97706' },
  security: { bg:'#fee2e2', text:'#b91c1c', dot:'#dc2626' },
  jobs:     { bg:'#e0f2fe', text:'#0369a1', dot:'#0284c7' },
}

export default function WessTech() {
  const [activecat, setActivecat] = useState('all')
  const [saved, setSaved] = useState([])
  const [search, setSearch] = useState('')
  const [showSaved, setShowSaved] = useState(false)

  const filtered = NEWS.filter(n => {
    const matchCat  = showSaved ? saved.includes(n.id) : (activecat === 'all' || n.cat === activecat)
    const matchSearch = search === '' || n.title.toLowerCase().includes(search.toLowerCase()) || n.summary.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const toggleSave = (id, e) => {
    e.preventDefault(); e.stopPropagation()
    setSaved(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id])
  }

  const hot = NEWS.filter(n => n.hot).slice(0, 4)

  return (
    <div style={{ background:'#060a14', minHeight:'100vh', color:'#e2e8f0', fontFamily:"'Space Grotesk', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        .sg{font-family:'Space Grotesk',sans-serif}
        .sy{font-family:'Syne',sans-serif}
        .ch{transition:all .2s;cursor:pointer}
        .ch:hover{transform:translateY(-2px)}
        .nb{background:none;border:none;cursor:pointer;transition:all .18s}
        .nb:hover{opacity:.75}
        .card{background:#0d1424;border:1px solid #1e2d47;border-radius:14px;transition:all .2s;cursor:pointer}
        .card:hover{border-color:#2563eb44;background:#111827;transform:translateY(-2px);box-shadow:0 8px 32px rgba(37,99,235,.12)}
        .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:16px}
        .scan-line{position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,#2563eb,transparent);animation:scan 3s linear infinite}
        @keyframes scan{0%{top:0}100%{top:100%}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        .fi{animation:fadeUp .4s ease forwards}
        input::placeholder{color:#374151}
        input:focus{outline:none}
        ::-webkit-scrollbar{width:4px;height:4px}
        ::-webkit-scrollbar-track{background:#060a14}
        ::-webkit-scrollbar-thumb{background:#1e2d47;border-radius:2px}
        a{color:inherit;text-decoration:none}
      `}</style>

      {/* ── TOP BAR ── */}
      <div style={{ background:'#030711', borderBottom:'1px solid #1e2d47', padding:'0 24px', position:'sticky', top:0, zIndex:100 }}>
        <div style={{ maxWidth:1200, margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'space-between', height:56, gap:16 }}>
          {/* Logo */}
          <div style={{ display:'flex', alignItems:'center', gap:10, flexShrink:0 }}>
            <div style={{ width:32, height:32, background:'linear-gradient(135deg,#2563eb,#7c3aed)', borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center', fontSize:16 }}>⚡</div>
            <div>
              <div className="sy" style={{ color:'#f8fafc', fontSize:18, fontWeight:800, lineHeight:1, letterSpacing:'-.02em' }}>WessTech</div>
              <div className="sg" style={{ color:'#374151', fontSize:9, letterSpacing:'.15em', textTransform:'uppercase' }}>AI & Tech News</div>
            </div>
          </div>

          {/* Search */}
          <div style={{ flex:1, maxWidth:400, position:'relative' }}>
            <span style={{ position:'absolute', left:12, top:'50%', transform:'translateY(-50%)', color:'#374151', fontSize:14 }}>🔍</span>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search tech news..."
              className="sg"
              style={{ width:'100%', background:'#0d1424', border:'1px solid #1e2d47', borderRadius:8, padding:'8px 12px 8px 36px', fontSize:13, color:'#e2e8f0' }}
            />
          </div>

          {/* Save button */}
          <button className="nb sg" onClick={() => setShowSaved(!showSaved)}
            style={{ padding:'7px 14px', borderRadius:8, fontSize:12, fontWeight:600, background: showSaved ? '#2563eb' : '#0d1424', color: showSaved ? '#fff' : '#6b7280', border:`1px solid ${showSaved ? '#2563eb' : '#1e2d47'}`, flexShrink:0 }}>
            🔖 Saved {saved.length > 0 && `(${saved.length})`}
          </button>
        </div>
      </div>

      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px 80px' }}>

        {/* ── HERO TICKER ── */}
        <div style={{ position:'relative', overflow:'hidden', borderBottom:'1px solid #1e2d47', marginBottom:32 }}>
          <div className="scan-line" />
          <div style={{ padding:'40px 0 32px' }}>
            <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:16 }}>
              <div style={{ width:8, height:8, background:'#16a34a', borderRadius:'50%', animation:'pulse 1.5s ease-in-out infinite' }} />
              <span className="sg" style={{ color:'#374151', fontSize:12, letterSpacing:'.1em', textTransform:'uppercase' }}>Live Feed · Updated {new Date().toLocaleDateString('en-NZ',{weekday:'short',month:'short',day:'numeric'})}</span>
            </div>
            <h1 className="sy" style={{ fontSize:'clamp(28px,5vw,52px)', fontWeight:800, lineHeight:1.05, marginBottom:16, letterSpacing:'-.03em' }}>
              AI & Tech News<br />
              <span style={{ background:'linear-gradient(90deg,#2563eb,#7c3aed)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
                NZ & Worldwide
              </span>
            </h1>
            <p className="sg" style={{ color:'#6b7280', fontSize:15, maxWidth:520, lineHeight:1.7 }}>
              The latest in artificial intelligence, New Zealand tech, product launches, startups, cybersecurity, and tech jobs — curated daily.
            </p>
          </div>
        </div>

        {/* ── BREAKING / HOT ── */}
        {!showSaved && search === '' && (
          <div style={{ marginBottom:36 }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
              <div style={{ background:'#dc2626', borderRadius:4, padding:'2px 8px' }}>
                <span className="sg" style={{ fontSize:10, fontWeight:700, color:'#fff', letterSpacing:'.1em' }}>HOT</span>
              </div>
              <span className="sg" style={{ color:'#6b7280', fontSize:12 }}>Top stories right now</span>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:12 }}>
              {hot.map(n => {
                const cc = CAT_COLORS[n.cat]
                return (
                  <a key={n.id} href={n.url} target="_blank" rel="noopener noreferrer">
                    <div className="card fi" style={{ padding:'16px 18px', borderLeft:`3px solid ${cc.dot}` }}>
                      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8 }}>
                        <span className="sg" style={{ background:cc.bg, color:cc.text, borderRadius:4, padding:'2px 8px', fontSize:10, fontWeight:600 }}>{n.tag}</span>
                        <span className="sg" style={{ color:'#374151', fontSize:11 }}>{n.time}</span>
                      </div>
                      <p className="sg" style={{ fontSize:13.5, fontWeight:600, color:'#e2e8f0', lineHeight:1.5 }}>{n.title}</p>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        )}

        {/* ── CATEGORY TABS ── */}
        <div style={{ display:'flex', gap:8, overflowX:'auto', paddingBottom:8, marginBottom:24 }}>
          {CATEGORIES.map(c => (
            <button key={c.id} className="nb sg ch" onClick={() => { setActivecat(c.id); setShowSaved(false) }}
              style={{ padding:'7px 16px', borderRadius:20, fontSize:12.5, fontWeight:600, whiteSpace:'nowrap',
                background: activecat===c.id && !showSaved ? '#2563eb' : '#0d1424',
                color: activecat===c.id && !showSaved ? '#fff' : '#6b7280',
                border:`1px solid ${activecat===c.id && !showSaved ? '#2563eb' : '#1e2d47'}` }}>
              {c.icon} {c.label}
            </button>
          ))}
        </div>

        {/* ── NEWS GRID ── */}
        {filtered.length === 0 ? (
          <div style={{ textAlign:'center', padding:'60px 0', color:'#374151' }}>
            <div style={{ fontSize:40, marginBottom:12 }}>📭</div>
            <p className="sg" style={{ fontSize:15 }}>{showSaved ? 'No saved articles yet' : 'No results found'}</p>
          </div>
        ) : (
          <div className="grid fi">
            {filtered.map(n => {
              const cc = CAT_COLORS[n.cat]
              const isSaved = saved.includes(n.id)
              return (
                <a key={n.id} href={n.url} target="_blank" rel="noopener noreferrer">
                  <div className="card" style={{ padding:'20px 20px', height:'100%', display:'flex', flexDirection:'column', gap:10 }}>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
                      <span className="sg" style={{ background:cc.bg, color:cc.text, borderRadius:5, padding:'3px 9px', fontSize:10.5, fontWeight:600 }}>{n.tag}</span>
                      <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                        {n.hot && <span style={{ width:7, height:7, background:'#dc2626', borderRadius:'50%', display:'inline-block', animation:'pulse 1.5s ease-in-out infinite' }} />}
                        <button className="nb" onClick={(e) => toggleSave(n.id, e)}
                          style={{ fontSize:15, color: isSaved ? '#f59e0b' : '#374151' }}>
                          {isSaved ? '🔖' : '🗄️'}
                        </button>
                      </div>
                    </div>
                    <h3 className="sg" style={{ fontSize:14.5, fontWeight:700, color:'#f1f5f9', lineHeight:1.5, flex:1 }}>{n.title}</h3>
                    <p className="sg" style={{ fontSize:12.5, color:'#6b7280', lineHeight:1.6 }}>{n.summary}</p>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'auto', paddingTop:10, borderTop:'1px solid #1e2d47' }}>
                      <span className="sg" style={{ fontSize:11.5, color:'#374151', fontWeight:500 }}>{n.source}</span>
                      <span className="sg" style={{ fontSize:11, color:'#374151' }}>{n.time}</span>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        )}

        {/* ── NEWS SOURCES ── */}
        <div style={{ marginTop:56, paddingTop:32, borderTop:'1px solid #1e2d47' }}>
          <h2 className="sy" style={{ fontSize:20, fontWeight:800, color:'#f1f5f9', marginBottom:18, letterSpacing:'-.02em' }}>Our Sources</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))', gap:9 }}>
            {NEWS_SOURCES.map((s,i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer">
                <div className="card ch" style={{ padding:'12px 14px', display:'flex', alignItems:'center', gap:10 }}>
                  <span style={{ fontSize:18 }}>{s.flag}</span>
                  <span className="sg" style={{ fontSize:12.5, color:'#94a3b8', fontWeight:500 }}>{s.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── ABOUT ── */}
        <div style={{ marginTop:40, background:'#0d1424', border:'1px solid #1e2d47', borderRadius:16, padding:'28px 28px' }}>
          <div style={{ display:'flex', gap:12, alignItems:'flex-start', flexWrap:'wrap' }}>
            <div style={{ flex:1, minWidth:240 }}>
              <h3 className="sy" style={{ fontSize:18, fontWeight:800, color:'#f1f5f9', marginBottom:8, letterSpacing:'-.02em' }}>About WessTech</h3>
              <p className="sg" style={{ color:'#6b7280', fontSize:13.5, lineHeight:1.7 }}>
                WessTech aggregates the best AI and technology news from New Zealand and around the world. We curate stories across AI, cybersecurity, product launches, startups, and NZ tech jobs — updated daily. Built by <a href="https://wesstech.xyz" style={{ color:'#2563eb' }}>wesstech.xyz</a>.
              </p>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:8, minWidth:180 }}>
              {[
                { label:'PathwayNZ', desc:'NZ Immigrant Guide', url:'https://pathway.wesstech.xyz', icon:'🥝' },
                { label:'IELTS Prep', desc:'Free study resources', url:'https://pathway.wesstech.xyz', icon:'🎓' },
              ].map((l,i) => (
                <a key={i} href={l.url} target="_blank" rel="noopener noreferrer">
                  <div style={{ background:'#060a14', border:'1px solid #1e2d47', borderRadius:10, padding:'10px 14px', display:'flex', gap:10, alignItems:'center' }}>
                    <span style={{ fontSize:18 }}>{l.icon}</span>
                    <div>
                      <div className="sg" style={{ fontSize:12.5, fontWeight:600, color:'#e2e8f0' }}>{l.label}</div>
                      <div className="sg" style={{ fontSize:11, color:'#374151' }}>{l.desc}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ── FOOTER ── */}
      <div style={{ background:'#030711', borderTop:'1px solid #1e2d47', padding:'24px 24px' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12 }}>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <div style={{ width:22, height:22, background:'linear-gradient(135deg,#2563eb,#7c3aed)', borderRadius:5, display:'flex', alignItems:'center', justifyContent:'center', fontSize:11 }}>⚡</div>
            <span className="sy" style={{ color:'#374151', fontSize:14, fontWeight:700 }}>WessTech</span>
          </div>
          <p className="sg" style={{ color:'#1e2d47', fontSize:11 }}>
            © {new Date().getFullYear()} wesstech.xyz · AI & Tech News NZ · <a href="/privacy" style={{ color:'#374151' }}>Privacy Policy</a>
          </p>
          <div style={{ display:'flex', gap:12 }}>
            {['NZ Tech','AI News','Cybersecurity','Tech Jobs'].map(t => (
              <span key={t} className="sg" style={{ color:'#1e2d47', fontSize:11 }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
