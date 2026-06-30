"use client";
import { useState } from "react";

const CATEGORIES = [
  { id: "all", label: "All News", icon: "⚡" },
  { id: "nz", label: "NZ Tech", icon: "🥝" },
  { id: "ai", label: "AI News", icon: "🤖" },
  { id: "products", label: "Products", icon: "📦" },
  { id: "startups", label: "Startups", icon: "🚀" },
  { id: "security", label: "Cybersecurity", icon: "🔐" },
  { id: "jobs", label: "Tech Jobs NZ", icon: "💼" },
];

const CAT_COLORS = {
  nz: { bg: "#dcfce7", text: "#15803d", dot: "#16a34a", dark: "#14532d" },
  ai: { bg: "#ede9fe", text: "#6d28d9", dot: "#7c3aed", dark: "#4c1d95" },
  products: { bg: "#dbeafe", text: "#1d4ed8", dot: "#2563eb", dark: "#1e3a8a" },
  startups: { bg: "#fef3c7", text: "#b45309", dot: "#d97706", dark: "#78350f" },
  security: { bg: "#fee2e2", text: "#b91c1c", dot: "#dc2626", dark: "#7f1d1d" },
  jobs: { bg: "#e0f2fe", text: "#0369a1", dot: "#0284c7", dark: "#0c4a6e" },
};

const NEWS_SOURCES = [
  {
    name: "NZ Herald Tech",
    url: "https://www.nzherald.co.nz/business/tech/",
    flag: "🥝",
  },
  {
    name: "RNZ Business",
    url: "https://www.rnz.co.nz/news/business",
    flag: "🥝",
  },
  { name: "Stuff Tech", url: "https://www.stuff.co.nz/technology", flag: "🥝" },
  {
    name: "Computerworld NZ",
    url: "https://www.computerworld.co.nz",
    flag: "🥝",
  },
  { name: "TechCrunch", url: "https://techcrunch.com", flag: "🌍" },
  { name: "The Verge", url: "https://www.theverge.com", flag: "🌍" },
  { name: "Wired", url: "https://www.wired.com", flag: "🌍" },
  { name: "Engadget", url: "https://www.engadget.com", flag: "🌍" },
  {
    name: "ZDNet Security",
    url: "https://www.zdnet.com/topic/security/",
    flag: "🔐",
  },
  { name: "CERT NZ", url: "https://www.cert.govt.nz", flag: "🔐" },
];

export default function WessTech({
  articles = [],
  fetchedAt,
  feedError,
  featuredGuide,
  originalGuides = [],
}) {
  const [activecat, setActivecat] = useState("all");
  const [saved, setSaved] = useState([]);
  const [search, setSearch] = useState("");
  const [showSaved, setShowSaved] = useState(false);

  const filtered = articles.filter((n) => {
    const matchCat = showSaved
      ? saved.includes(n.id)
      : activecat === "all" || n.cat === activecat;
    const matchSearch =
      search === "" ||
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.summary.toLowerCase().includes(search.toLowerCase()) ||
      n.source.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const hot = articles.filter((n) => n.hot).slice(0, 4);
  const latestOriginalGuides = originalGuides
    .filter((guide) => guide.slug !== featuredGuide?.slug)
    .slice(0, 3);
  const visibleNews = showSaved ? filtered : filtered.slice(0, 9);

  const toggleSave = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setSaved((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  };

  const lastUpdated = fetchedAt
    ? new Date(fetchedAt).toLocaleTimeString("en-NZ", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  return (
    <div
      style={{
        background: "#060a14",
        minHeight: "100vh",
        color: "#e2e8f0",
        fontFamily: "'Space Grotesk',sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        .sg{font-family:'Space Grotesk',sans-serif}
        .sy{font-family:'Syne',sans-serif}
        .ch{transition:all .2s;cursor:pointer}
        .ch:hover{transform:translateY(-2px)}
        .nb{background:none;border:none;cursor:pointer;transition:all .18s}
        .nb:hover{opacity:.75}
        .card{background:#0d1424;border:1px solid #1e2d47;border-radius:14px;transition:all .22s ease}
        .card:hover{border-color:#2563eb55;background:#111827;transform:translateY(-3px);box-shadow:0 18px 46px rgba(3,7,17,.35),0 8px 32px rgba(37,99,235,.14)}
        .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:18px;align-items:stretch}
        .featured-guide{display:grid;grid-template-columns:minmax(0,1fr) auto}
        .original-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:18px;align-items:stretch}
        .line-clamp-2,.line-clamp-3{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}
        .line-clamp-2{-webkit-line-clamp:2}
        .line-clamp-3{-webkit-line-clamp:3}
        .section-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin-bottom:18px}
        @media(max-width:640px){.grid,.original-grid{grid-template-columns:1fr}.featured-guide{grid-template-columns:1fr}.featured-guide a{width:100%;text-align:center}.section-heading{align-items:flex-start;flex-direction:column}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes spin{to{transform:rotate(360deg)}}
        .fi{animation:fadeUp .4s ease forwards}
        input::placeholder{color:#374151}
        input:focus{outline:none}
        ::-webkit-scrollbar{width:4px;height:4px}
        ::-webkit-scrollbar-track{background:#060a14}
        ::-webkit-scrollbar-thumb{background:#1e2d47;border-radius:2px}
        a{color:inherit;text-decoration:none}
      `}</style>

      {/* ── NAV ── */}
      <nav
        style={{
          background: "#030711",
          borderBottom: "1px solid #1e2d47",
          padding: "0 24px",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 56,
            gap: 16,
          }}
        >
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                background: "linear-gradient(135deg,#2563eb,#7c3aed)",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
              }}
            >
              ⚡
            </div>
            <div>
              <div
                className="sy"
                style={{
                  color: "#f8fafc",
                  fontSize: 18,
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: "-.02em",
                }}
              >
                WessTech
              </div>
              <div
                className="sg"
                style={{
                  color: "#374151",
                  fontSize: 9,
                  letterSpacing: ".15em",
                  textTransform: "uppercase",
                }}
              >
                AI, Networking & Cybersecurity
              </div>
            </div>
          </a>

          {/* Search */}
          <div style={{ flex: 1, maxWidth: 380, position: "relative" }}>
            <span
              style={{
                position: "absolute",
                left: 12,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#374151",
                fontSize: 14,
              }}
            >
              🔍
            </span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search guides and tech news..."
              className="sg"
              style={{
                width: "100%",
                background: "#0d1424",
                border: "1px solid #1e2d47",
                borderRadius: 8,
                padding: "7px 12px 7px 36px",
                fontSize: 13,
                color: "#e2e8f0",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              gap: 8,
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <a
              href="/games/cyberwordle"
              className="sg"
              style={{
                padding: "6px 12px",
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 700,
                background: "#0d1424",
                color: "#93c5fd",
                border: "1px solid #1e2d47",
                whiteSpace: "nowrap",
              }}
            >
              Cyber Wordle
            </a>
            {/* Live indicator */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                background: "#0d1424",
                border: "1px solid #1e2d47",
                borderRadius: 20,
                padding: "4px 12px",
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  background: "#16a34a",
                  borderRadius: "50%",
                  animation: "pulse 1.5s ease-in-out infinite",
                }}
              />
              <span className="sg" style={{ color: "#6b7280", fontSize: 11 }}>
                Live · {lastUpdated}
              </span>
            </div>
            <button
              className="nb sg"
              onClick={() => setShowSaved(!showSaved)}
              style={{
                padding: "6px 14px",
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 600,
                background: showSaved ? "#2563eb" : "#0d1424",
                color: showSaved ? "#fff" : "#6b7280",
                border: `1px solid ${showSaved ? "#2563eb" : "#1e2d47"}`,
              }}
            >
              🔖 {saved.length > 0 ? `Saved (${saved.length})` : "Saved"}
            </button>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 72px" }}>
        {/* ── HERO ── */}
        <div
          style={{
            padding: "64px 0 46px",
            borderBottom: "1px solid #1e2d47",
            marginBottom: 56,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 18,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                background: "#16a34a",
                borderRadius: "50%",
                animation: "pulse 1.5s ease-in-out infinite",
              }}
            />
            <span
              className="sg"
              style={{
                color: "#64748b",
                fontSize: 12,
                letterSpacing: ".1em",
                textTransform: "uppercase",
              }}
            >
              Original guides · Curated technology news · Updated hourly
            </span>
          </div>
          <h1
            className="sy"
            style={{
              fontSize: "clamp(34px,6vw,66px)",
              fontWeight: 800,
              lineHeight: 1.02,
              marginBottom: 22,
              letterSpacing: "-.03em",
            }}
          >
            Practical Technology Guides
            <br />
            <span
              style={{
                background:
                  "linear-gradient(90deg,#93c5fd 0%,#38bdf8 35%,#a78bfa 72%,#f0abfc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 36px rgba(96,165,250,.18)",
              }}
            >
              for Real-World Teams
            </span>
          </h1>
          <p
            className="sg"
            style={{
              color: "#94a3b8",
              fontSize: 16,
              maxWidth: 650,
              lineHeight: 1.8,
            }}
          >
            WessTech publishes original guides on AI, networking,
            cybersecurity, cloud, and automation, supported by curated
            technology news from trusted New Zealand and global sources.
          </p>

          {/* Feed error banner */}
          {feedError && (
            <div
              style={{
                background: "#7f1d1d22",
                border: "1px solid #dc262644",
                borderRadius: 10,
                padding: "10px 16px",
                marginTop: 16,
                display: "inline-block",
              }}
            >
              <span className="sg" style={{ color: "#fca5a5", fontSize: 13 }}>
                ⚠️ Some feeds temporarily unavailable — showing cached results.
              </span>
            </div>
          )}
        </div>

        {/* ── FEATURED GUIDE ── */}
        {!showSaved && search === "" && featuredGuide && (
          <section style={{ marginBottom: 64 }}>
            <div className="section-heading">
              <div>
                <div
                  className="sg"
                  style={{
                    color: "#60a5fa",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  Featured Guide
                </div>
                <h2
                  className="sy"
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    color: "#f1f5f9",
                    letterSpacing: "-.02em",
                  }}
                >
                  Original WessTech Analysis
                </h2>
              </div>
              <a
                href="/articles"
                className="sg"
                style={{ color: "#94a3b8", fontSize: 13, fontWeight: 700 }}
              >
                View all guides →
              </a>
            </div>

            <article
              className="card featured-guide"
              style={{
                padding: "40px",
                borderLeft: "5px solid #60a5fa",
                gap: 30,
                alignItems: "center",
                background:
                  "linear-gradient(135deg,rgba(15,23,42,.98),rgba(13,20,36,.92) 52%,rgba(30,41,59,.78))",
                boxShadow:
                  "0 24px 70px rgba(3,7,17,.34), inset 0 1px 0 rgba(255,255,255,.03)",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                    alignItems: "center",
                    marginBottom: 12,
                  }}
                >
                  <span
                    className="sg"
                    style={{
                      background: "rgba(96,165,250,.12)",
                      color: "#bfdbfe",
                      border: "1px solid rgba(96,165,250,.24)",
                      borderRadius: 5,
                      padding: "3px 9px",
                      fontSize: 10.5,
                      fontWeight: 700,
                    }}
                  >
                    {featuredGuide.category}
                  </span>
                  <span
                    className="sg"
                    style={{ color: "#64748b", fontSize: 12 }}
                  >
                    {featuredGuide.readTime} · Updated {featuredGuide.updated}
                  </span>
                </div>
                <h3
                  className="sy"
                  style={{
                    color: "#f8fafc",
                    fontSize: "clamp(28px,4vw,44px)",
                    lineHeight: 1.12,
                    letterSpacing: "-.02em",
                    marginBottom: 16,
                  }}
                >
                  {featuredGuide.title}
                </h3>
                <p
                  className="sg"
                  style={{
                    color: "#94a3b8",
                    fontSize: 16,
                    lineHeight: 1.8,
                    maxWidth: 760,
                  }}
                >
                  {featuredGuide.excerpt}
                </p>
              </div>
              <a
                href={`/articles/${featuredGuide.slug}`}
                className="sg"
                style={{
                  background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
                  color: "#fff",
                  borderRadius: 10,
                  padding: "13px 18px",
                  fontSize: 14,
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                  boxShadow: "0 12px 30px rgba(37,99,235,.25)",
                }}
              >
                Read Article →
              </a>
            </article>
          </section>
        )}

        {/* ── LATEST ORIGINAL GUIDES ── */}
        {!showSaved && search === "" && latestOriginalGuides.length > 0 && (
          <section style={{ marginBottom: 68 }}>
            <div className="section-heading">
              <div>
                <div
                  className="sg"
                  style={{
                    color: "#60a5fa",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  Latest Original Guides
                </div>
                <h2
                  className="sy"
                  style={{
                    fontSize: 26,
                    fontWeight: 800,
                    color: "#f1f5f9",
                    letterSpacing: "-.02em",
                  }}
                >
                  Practical WessTech Articles
                </h2>
              </div>
              <a
                href="/articles"
                className="sg"
                style={{ color: "#94a3b8", fontSize: 13, fontWeight: 700 }}
              >
                Browse all guides →
              </a>
            </div>

            <div className="original-grid">
              {latestOriginalGuides.map((guide) => (
                <a key={guide.slug} href={`/articles/${guide.slug}`}>
                  <article
                    className="card"
                    style={{
                      minHeight: 292,
                      height: "100%",
                      padding: "24px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 14,
                      borderColor: "#243653",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 8,
                        alignItems: "center",
                      }}
                    >
                      <span
                        className="sg"
                        style={{
                          background: "rgba(14,165,233,.12)",
                          color: "#7dd3fc",
                          border: "1px solid rgba(14,165,233,.22)",
                          borderRadius: 5,
                          padding: "3px 9px",
                          fontSize: 10.5,
                          fontWeight: 700,
                        }}
                      >
                        {guide.category}
                      </span>
                      <span
                        className="sg"
                        style={{ color: "#64748b", fontSize: 12 }}
                      >
                        {guide.date} · {guide.readTime}
                      </span>
                    </div>
                    <h3
                      className="sy line-clamp-2"
                      style={{
                        color: "#f8fafc",
                        fontSize: 22,
                        lineHeight: 1.22,
                        letterSpacing: "-.02em",
                      }}
                    >
                      {guide.title}
                    </h3>
                    <p
                      className="sg line-clamp-3"
                      style={{
                        color: "#94a3b8",
                        fontSize: 14.5,
                        lineHeight: 1.7,
                        flex: 1,
                      }}
                    >
                      {guide.excerpt}
                    </p>
                    <span
                      className="sg"
                      style={{
                        color: "#93c5fd",
                        fontSize: 13,
                        fontWeight: 700,
                        marginTop: "auto",
                      }}
                    >
                      Read Guide →
                    </span>
                  </article>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* ── CURATED NEWS ── */}
        <section style={{ marginBottom: 42 }}>
          <div className="section-heading">
            <div>
              <div
                className="sg"
                style={{
                  color: "#64748b",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                Curated Technology News
              </div>
              <h2
                className="sy"
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  color: "#f1f5f9",
                  letterSpacing: "-.02em",
                }}
              >
                RSS Headlines
              </h2>
            </div>
            <span className="sg" style={{ color: "#64748b", fontSize: 12 }}>
              Showing {Math.min(filtered.length, showSaved ? filtered.length : 9)} of{" "}
              {filtered.length}
            </span>
          </div>

          {/* ── HOT STORIES ── */}
          {!showSaved && search === "" && hot.length > 0 && (
            <div style={{ marginBottom: 30 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  background: "#dc2626",
                  borderRadius: 4,
                  padding: "2px 8px",
                }}
              >
                <span
                  className="sg"
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: ".1em",
                  }}
                >
                  BREAKING
                </span>
              </div>
              <span className="sg" style={{ color: "#64748b", fontSize: 12 }}>
                Curated technology stories from the last 3 hours
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
                gap: 10,
              }}
            >
              {hot.map((n) => {
                const cc = CAT_COLORS[n.cat] || CAT_COLORS.ai;
                return (
                  <a
                    key={n.id}
                    href={n.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className="card fi"
                      style={{
                        padding: "14px 16px",
                        borderLeft: `3px solid ${cc.dot}`,
                        cursor: "pointer",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: 6,
                        }}
                      >
                        <span
                          className="sg"
                          style={{
                            background: cc.bg,
                            color: cc.text,
                            borderRadius: 4,
                            padding: "2px 8px",
                            fontSize: 10,
                            fontWeight: 600,
                          }}
                        >
                          {n.tag}
                        </span>
                        <span
                          className="sg"
                          style={{ color: "#374151", fontSize: 11 }}
                        >
                          {n.time}
                        </span>
                      </div>
                      <p
                        className="sg"
                        style={{
                          fontSize: 13,
                          fontWeight: 600,
                          color: "#e2e8f0",
                          lineHeight: 1.5,
                        }}
                      >
                        {n.title}
                      </p>
                      <div
                        className="sg"
                        style={{ fontSize: 11, color: "#374151", marginTop: 6 }}
                      >
                        {n.source} ↗
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
            </div>
          )}

        {/* ── CATEGORY TABS ── */}
        <div
          style={{
            display: "flex",
            gap: 8,
            overflowX: "auto",
            paddingBottom: 8,
            marginBottom: 26,
          }}
        >
          {CATEGORIES.map((c) => {
            const count = articles.filter(
              (a) => c.id === "all" || a.cat === c.id,
            ).length;
            return (
              <button
                key={c.id}
                className="nb sg ch"
                onClick={() => {
                  setActivecat(c.id);
                  setShowSaved(false);
                }}
                style={{
                  padding: "7px 14px",
                  borderRadius: 20,
                  fontSize: 12.5,
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  background:
                    activecat === c.id && !showSaved ? "#2563eb" : "#0d1424",
                  color: activecat === c.id && !showSaved ? "#fff" : "#6b7280",
                  border: `1px solid ${activecat === c.id && !showSaved ? "#2563eb" : "#1e2d47"}`,
                }}
              >
                {c.icon} {c.label}
                <span
                  style={{
                    marginLeft: 6,
                    background:
                      activecat === c.id && !showSaved
                        ? "#ffffff22"
                        : "#1e2d47",
                    borderRadius: 10,
                    padding: "1px 6px",
                    fontSize: 10,
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── CURATED NEWS GRID ── */}
        {filtered.length === 0 ? (
          <div
            style={{ textAlign: "center", padding: "60px 0", color: "#374151" }}
          >
            <div style={{ fontSize: 40, marginBottom: 12 }}>📭</div>
            <p className="sg" style={{ fontSize: 15 }}>
              {showSaved
                ? "No saved articles yet — click 🗄️ on any article to save it"
                : "No results found"}
            </p>
          </div>
        ) : (
          <div className="grid fi">
            {visibleNews.map((n) => {
              const cc = CAT_COLORS[n.cat] || CAT_COLORS.ai;
              const isSaved = saved.includes(n.id);
              return (
                <a
                  key={n.id}
                  href={n.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="card"
                    style={{
                      padding: "18px 18px",
                      minHeight: 254,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        className="sg"
                        style={{
                          background: cc.bg,
                          color: cc.text,
                          borderRadius: 5,
                          padding: "3px 9px",
                          fontSize: 10.5,
                          fontWeight: 600,
                        }}
                      >
                        {n.tag}
                      </span>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        {n.hot && (
                          <span
                            style={{
                              width: 7,
                              height: 7,
                              background: "#dc2626",
                              borderRadius: "50%",
                              animation: "pulse 1.5s ease-in-out infinite",
                              display: "inline-block",
                            }}
                          />
                        )}
                        <button
                          className="nb"
                          onClick={(e) => toggleSave(n.id, e)}
                          style={{
                            fontSize: 15,
                            color: isSaved ? "#f59e0b" : "#374151",
                            lineHeight: 1,
                          }}
                        >
                          {isSaved ? "🔖" : "🗄️"}
                        </button>
                      </div>
                    </div>
                    <h3
                      className="sg line-clamp-2"
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#f1f5f9",
                        lineHeight: 1.5,
                        minHeight: 42,
                      }}
                    >
                      {n.title}
                    </h3>
                    <p
                      className="sg line-clamp-3"
                      style={{
                        fontSize: 12.5,
                        color: "#6b7280",
                        lineHeight: 1.6,
                        minHeight: 60,
                        flex: 1,
                      }}
                    >
                      {n.summary}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingTop: 10,
                        borderTop: "1px solid #1e2d47",
                      }}
                    >
                      <span
                        className="sg"
                        style={{
                          fontSize: 11.5,
                          color: "#374151",
                          fontWeight: 500,
                        }}
                      >
                        {n.source}
                      </span>
                      <span
                        className="sg"
                        style={{ fontSize: 11, color: "#374151" }}
                      >
                        {n.time}
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        )}

        {/* ── HOW CURATED NEWS WORKS ── */}
        {!showSaved && search === "" && (
          <div
            style={{
              marginTop: 48,
              background: "#0d1424",
              border: "1px solid #1e2d47",
              borderRadius: 14,
              padding: "20px 22px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 8,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  background: "#16a34a",
                  borderRadius: "50%",
                  animation: "pulse 1.5s ease-in-out infinite",
                }}
              />
              <span
                className="sg"
                style={{ color: "#6b7280", fontSize: 12, fontWeight: 600 }}
              >
                How curated news works
              </span>
            </div>
            <p
              className="sg"
              style={{ color: "#4b5563", fontSize: 12.5, lineHeight: 1.7 }}
            >
              WessTech publishes original guides first, then supports them with
              current technology headlines from {NEWS_SOURCES.length} trusted
              sources. The news feed is refreshed hourly and every curated story
              links directly to its original publisher.
            </p>
          </div>
        )}
        </section>

        {/* ── SOURCES ── */}
        <div
          style={{
            marginTop: 24,
            paddingTop: 22,
            borderTop: "1px solid #1e2d47",
          }}
        >
          <div
            className="sg"
            style={{
              color: "#64748b",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            News Sources
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))",
              gap: 8,
            }}
          >
            {NEWS_SOURCES.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer">
                <div
                  className="card ch"
                  style={{
                    padding: "8px 11px",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span style={{ fontSize: 14 }}>{s.flag}</span>
                  <span
                    className="sg"
                    style={{ fontSize: 12, color: "#94a3b8" }}
                  >
                    {s.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── ABOUT + LINKS ── */}
        <div
          style={{
            marginTop: 28,
            background: "#0d1424",
            border: "1px solid #1e2d47",
            borderRadius: 16,
            padding: "20px 22px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              alignItems: "flex-start",
            }}
          >
            <div style={{ flex: 1, minWidth: 240 }}>
              <h3
                className="sy"
                style={{
                  fontSize: 17,
                  fontWeight: 800,
                  color: "#f1f5f9",
                  marginBottom: 8,
                }}
              >
                About WessTech
              </h3>
              <p
                className="sg"
                style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.7 }}
              >
                WessTech publishes practical technology guides and curated
                industry updates across AI, networking, cybersecurity, cloud,
                and automation. Built by{" "}
                <a href="https://wesstech.xyz" style={{ color: "#2563eb" }}>
                  wesstech.xyz
                </a>
                .
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                minWidth: 180,
              }}
            >
              {[
                { label: "About WessTech", url: "/about", icon: "ℹ️" },
                {
                  label: "PathwayNZ — Filipino NZ Guide",
                  url: "https://pathway.wesstech.xyz",
                  icon: "🥝",
                },
              ].map((l, i) => (
                <a
                  key={i}
                  href={l.url}
                  target={l.url.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    l.url.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                >
                  <div
                    style={{
                      background: "#060a14",
                      border: "1px solid #1e2d47",
                      borderRadius: 10,
                      padding: "10px 14px",
                      display: "flex",
                      gap: 10,
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: 16 }}>{l.icon}</span>
                    <span
                      className="sg"
                      style={{ fontSize: 12.5, color: "#e2e8f0" }}
                    >
                      {l.label}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <div
        style={{
          background: "#030711",
          borderTop: "1px solid #1e2d47",
          padding: "24px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: 24,
              marginBottom: 16,
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 8,
                }}
              >
                <div
                  style={{
                    width: 26,
                    height: 26,
                    background: "linear-gradient(135deg,#2563eb,#7c3aed)",
                    borderRadius: 6,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                  }}
                >
                  ⚡
                </div>
                <span
                  className="sy"
                  style={{ color: "#f8fafc", fontSize: 16, fontWeight: 800 }}
                >
                  WessTech
                </span>
              </div>
              <p
                className="sg"
                style={{
                  color: "#6b7280",
                  fontSize: 12,
                  maxWidth: 430,
                  lineHeight: 1.6,
                }}
              >
                WessTech publishes original guides on AI, networking,
                cybersecurity, cloud, and automation, supported by curated
                technology news from New Zealand and around the world. Also home
                to PathwayNZ, a free guide for Filipino migrants in New Zealand.
              </p>
            </div>
            <div>
              <div
                className="sg"
                style={{
                  color: "#374151",
                  fontSize: 11,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                Pages
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 14px" }}>
              {[
                { label: "Original Guides", url: "/articles" },
                { label: "About WessTech", url: "/about" },
                { label: "Author", url: "/author/wesley-reyes" },
                { label: "Contact", url: "/contact" },
                { label: "Editorial Policy", url: "/editorial-policy" },
                { label: "Terms of Use", url: "/terms" },
                { label: "Disclaimer", url: "/disclaimer" },
                { label: "Privacy Policy", url: "/privacy" },
                { label: "PathwayNZ", url: "https://pathway.wesstech.xyz" },
              ].map((l, i) => (
                <a
                  key={i}
                  href={l.url}
                  className="sg"
                  target={l.url.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    l.url.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  style={{ color: "#6b7280", fontSize: 13 }}
                >
                  {l.label} →
                </a>
              ))}
              </div>
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid #1e2d47",
              paddingTop: 14,
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <p className="sg" style={{ color: "#374151", fontSize: 12 }}>
              © {new Date().getFullYear()} WessTech · wesstech.xyz · Built in
              New Zealand
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a
                href="/about"
                className="sg"
                style={{ color: "#4b5563", fontSize: 12 }}
              >
                About
              </a>
              <a
                href="/author/wesley-reyes"
                className="sg"
                style={{ color: "#4b5563", fontSize: 12 }}
              >
                Author
              </a>
              <a
                href="/contact"
                className="sg"
                style={{ color: "#4b5563", fontSize: 12 }}
              >
                Contact
              </a>
              <a
                href="/editorial-policy"
                className="sg"
                style={{ color: "#4b5563", fontSize: 12 }}
              >
                Editorial Policy
              </a>
              <a
                href="/terms"
                className="sg"
                style={{ color: "#4b5563", fontSize: 12 }}
              >
                Terms
              </a>
              <a
                href="/disclaimer"
                className="sg"
                style={{ color: "#4b5563", fontSize: 12 }}
              >
                Disclaimer
              </a>
              <a
                href="/privacy"
                className="sg"
                style={{ color: "#4b5563", fontSize: 12 }}
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
