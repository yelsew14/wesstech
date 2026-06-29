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

export default function WessTech({ articles = [], fetchedAt, feedError }) {
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
        .card{background:#0d1424;border:1px solid #1e2d47;border-radius:14px;transition:all .2s}
        .card:hover{border-color:#2563eb44;background:#111827;transform:translateY(-2px);box-shadow:0 8px 32px rgba(37,99,235,.12)}
        .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:16px}
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

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 80px" }}>
        {/* ── HERO ── */}
        <div
          style={{
            padding: "44px 0 32px",
            borderBottom: "1px solid #1e2d47",
            marginBottom: 32,
          }}
        >
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
                color: "#374151",
                fontSize: 12,
                letterSpacing: ".1em",
                textTransform: "uppercase",
              }}
            >
              Practical technology insights · {articles.length} articles ·
              Updates every hour
            </span>
          </div>
          <h1
            className="sy"
            style={{
              fontSize: "clamp(28px,5vw,50px)",
              fontWeight: 800,
              lineHeight: 1.05,
              marginBottom: 14,
              letterSpacing: "-.03em",
            }}
          >
            AI & Tech News
            <br />
            <span
              style={{
                background: "linear-gradient(90deg,#2563eb,#7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              NZ & Worldwide
            </span>
          </h1>
          <p
            className="sg"
            style={{
              color: "#6b7280",
              fontSize: 15,
              maxWidth: 520,
              lineHeight: 1.7,
            }}
          >
            Live news from NZ Herald, RNZ, TechCrunch, The Verge, Wired, CERT NZ
            and more — pulled directly from RSS feeds and refreshed every hour
            automatically.
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

        {/* ── HOT STORIES ── */}
        {!showSaved && search === "" && hot.length > 0 && (
          <div style={{ marginBottom: 32 }}>
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
              <span className="sg" style={{ color: "#6b7280", fontSize: 12 }}>
                Latest stories from the last 3 hours
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
            marginBottom: 24,
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

        {/* ── NEWS GRID ── */}
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
            {filtered.map((n) => {
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
                      className="sg"
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#f1f5f9",
                        lineHeight: 1.5,
                        flex: 1,
                      }}
                    >
                      {n.title}
                    </h3>
                    <p
                      className="sg"
                      style={{
                        fontSize: 12.5,
                        color: "#6b7280",
                        lineHeight: 1.6,
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

        {/* ── HOW IT WORKS ── */}
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
                How live feeds work
              </span>
            </div>
            <p
              className="sg"
              style={{ color: "#4b5563", fontSize: 12.5, lineHeight: 1.7 }}
            >
              WessTech pulls directly from RSS feeds published by{" "}
              {NEWS_SOURCES.length} news sources. Vercel's server fetches and
              caches the feeds every hour — so you always see real, current news
              without page reloads. Articles link directly to the original
              publisher.
            </p>
          </div>
        )}

        {/* ── SOURCES ── */}
        <div
          style={{
            marginTop: 40,
            paddingTop: 28,
            borderTop: "1px solid #1e2d47",
          }}
        >
          <h2
            className="sy"
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: "#f1f5f9",
              marginBottom: 16,
              letterSpacing: "-.02em",
            }}
          >
            Live Sources
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(170px,1fr))",
              gap: 8,
            }}
          >
            {NEWS_SOURCES.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer">
                <div
                  className="card ch"
                  style={{
                    padding: "11px 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span style={{ fontSize: 16 }}>{s.flag}</span>
                  <span
                    className="sg"
                    style={{ fontSize: 12.5, color: "#94a3b8" }}
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
            marginTop: 32,
            background: "#0d1424",
            border: "1px solid #1e2d47",
            borderRadius: 16,
            padding: "24px 24px",
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
          padding: "32px 24px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 20,
              marginBottom: 20,
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
                  fontSize: 12.5,
                  maxWidth: 300,
                  lineHeight: 1.7,
                }}
              >
                Live AI and technology news for New Zealand and the world —
                pulled from RSS feeds, refreshed every hour. Also home to
                PathwayNZ, a free guide for Filipino migrants in New Zealand.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div
                className="sg"
                style={{
                  color: "#374151",
                  fontSize: 11,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
              >
                Pages
              </div>
              {[
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
          <div
            style={{
              borderTop: "1px solid #1e2d47",
              paddingTop: 16,
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
