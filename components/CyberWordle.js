"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const WORDS = [
  "ABUSE",
  "ACTOR",
  "ADAPT",
  "ADMIN",
  "ADMIT",
  "AGENT",
  "AGILE",
  "ALERT",
  "ALIAS",
  "ALLOW",
  "ALPHA",
  "ANODE",
  "APPLY",
  "ARENA",
  "ARRAY",
  "ASSET",
  "ASYNC",
  "ATLAS",
  "AUDIT",
  "AUTHD",
  "AVOID",
  "AZURE",
  "BACKS",
  "BADGE",
  "BASIC",
  "BATCH",
  "BEAMS",
  "BGPER",
  "BINDY",
  "BITSY",
  "BLACK",
  "BLADE",
  "BLAST",
  "BLOCK",
  "BOARD",
  "BOOST",
  "BOTTY",
  "BOUND",
  "BRAIN",
  "BREAK",
  "BRICK",
  "BRUTE",
  "BUILD",
  "BURST",
  "BYTES",
  "CABLE",
  "CACHE",
  "CANON",
  "CAPEX",
  "CARDS",
  "CATCH",
  "CHAIN",
  "CHAOS",
  "CHART",
  "CHECK",
  "CHIPS",
  "CIDRS",
  "CLAIM",
  "CLASS",
  "CLEAN",
  "CLICK",
  "CLIPS",
  "CLOAK",
  "CLOCK",
  "CLONE",
  "CLOUD",
  "CLUES",
  "COBOL",
  "CODES",
  "CORES",
  "COUNT",
  "CRASH",
  "CRACK",
  "CRAFT",
  "CRAWL",
  "CREDS",
  "CRIME",
  "CRISP",
  "CROSS",
  "CROWD",
  "CROWN",
  "CRYPT",
  "CYCLE",
  "DAILY",
  "DATAS",
  "DEBUG",
  "DECOY",
  "DELTA",
  "DENYS",
  "DEPOT",
  "DEPTH",
  "DEVIC",
  "DHCPX",
  "DIGIT",
  "DIRTY",
  "DISKS",
  "DMARC",
  "DODGE",
  "DRIFT",
  "DRIVE",
  "DROPS",
  "DRUID",
  "EMAIL",
  "EMBED",
  "EMPTY",
  "ENACT",
  "ENVOY",
  "EPOCH",
  "ERROR",
  "ETHER",
  "EVENT",
  "EXFIL",
  "EXITS",
  "FAKES",
  "FAULT",
  "FIBER",
  "FIELD",
  "FILES",
  "FILTR",
  "FIRMS",
  "FLAGS",
  "FLARE",
  "FLASH",
  "FLEET",
  "FLOOD",
  "FLOWS",
  "FOCUS",
  "FORGE",
  "FORKS",
  "FORMS",
  "FRAME",
  "FRAUD",
  "FUZZY",
  "GATES",
  "GAUGE",
  "GHOST",
  "GLOBE",
  "GLOBS",
  "GPGPU",
  "GRADE",
  "GRAPH",
  "GROUP",
  "GUARD",
  "GUIDE",
  "HASHD",
  "HAVEN",
  "HEAPS",
  "HEART",
  "HELLO",
  "HEXES",
  "HONEY",
  "HOSTS",
  "HTTPS",
  "HUBBY",
  "HUMAN",
  "HYPER",
  "IAMMY",
  "ICMPX",
  "IDLES",
  "IMAGE",
  "INDEX",
  "INPUT",
  "INTEL",
  "IPSEC",
  "ISSUE",
  "JOINS",
  "KAFKA",
  "KALIX",
  "KDATA",
  "KERBS",
  "KEYED",
  "KIOSK",
  "KUBES",
  "LABEL",
  "LAGGY",
  "LAYER",
  "LEAKS",
  "LEASE",
  "LEECH",
  "LEVEL",
  "LIGHT",
  "LIMIT",
  "LINUX",
  "LISTS",
  "LOADS",
  "LOCAL",
  "LOCKS",
  "LOGIC",
  "LOGIN",
  "LOGIT",
  "LOOPS",
  "LORAS",
  "MACRO",
  "MAGIC",
  "MASKS",
  "MATCH",
  "METER",
  "MICRO",
  "MIRAI",
  "MITRE",
  "MIXER",
  "MODEL",
  "MODES",
  "MOUNT",
  "MOUSE",
  "NACLS",
  "NAMES",
  "NATGW",
  "NERVE",
  "NGRAM",
  "NICER",
  "NODES",
  "NOISE",
  "NONCE",
  "NOTES",
  "NTPDD",
  "OAUTH",
  "ONION",
  "OPENS",
  "ORDER",
  "OSINT",
  "PACKS",
  "PAGES",
  "PANIC",
  "PATCH",
  "PATHS",
  "PEERS",
  "PHISH",
  "PINGS",
  "PIXEL",
  "PLANS",
  "PLUGS",
  "POINT",
  "POLLS",
  "PORTS",
  "POWER",
  "PRISM",
  "PROBE",
  "PROXY",
  "PULSE",
  "QUEUE",
  "QUICX",
  "QUERY",
  "RADIX",
  "RANGE",
  "RAPID",
  "RATEL",
  "REALM",
  "RECON",
  "REGEX",
  "RELAY",
  "RESET",
  "RETRY",
  "RINGS",
  "RISKY",
  "RIVAL",
  "ROBOT",
  "ROGUE",
  "ROLES",
  "ROUTE",
  "RULES",
  "SAFED",
  "SALTS",
  "SCALE",
  "SCANS",
  "SCOPE",
  "SCORE",
  "SCRUB",
  "SEEDS",
  "SEGUE",
  "SERVE",
  "SETUP",
  "SHADE",
  "SHARD",
  "SHELL",
  "SHIFT",
  "SIDES",
  "SIGMA",
  "SITES",
  "SLACK",
  "SLICE",
  "SMART",
  "SMISH",
  "SNAPS",
  "SNIFF",
  "SNORT",
  "SOCKS",
  "SOLID",
  "SONAR",
  "SPANS",
  "SPARK",
  "SPEAR",
  "SPINE",
  "SPLIT",
  "SPOOF",
  "STACK",
  "STALE",
  "STATE",
  "STEAL",
  "STORM",
  "STRIP",
  "SURGE",
  "SWARM",
  "SWIFT",
  "SWING",
  "SWIRL",
  "SYNTH",
  "SYSOP",
  "TABLE",
  "TACAC",
  "TAINT",
  "TAPES",
  "TASKS",
  "TEAMS",
  "TEMPO",
  "TERMS",
  "THINK",
  "THREA",
  "THROT",
  "TICKS",
  "TIERS",
  "TIMED",
  "TOKEN",
  "TOOLS",
  "TOPIC",
  "TORCH",
  "TRACE",
  "TRACK",
  "TRAIN",
  "TRAPS",
  "TRIAD",
  "TRUNK",
  "TRUST",
  "TUNES",
  "TUNNL",
  "TURNS",
  "TYPES",
  "UBUNT",
  "UNION",
  "UNIXY",
  "USERS",
  "VALID",
  "VAULT",
  "VECTR",
  "VIRUS",
  "VLANS",
  "VOICE",
  "VPCON",
  "VPNER",
  "WARNS",
  "WATCH",
  "WAVES",
  "WEBBY",
  "WEDGE",
  "WIRED",
  "WORMS",
  "WRITE",
  "XDRAY",
  "XENON",
  "YIELD",
  "YUBIS",
  "ZEROS",
  "ZONES",
  "CISCO",
  "MYSQL",
  "NGINX",
  "REDIS",
  "ROUTR",
  "SWITC",
  "SUBNT",
  "WIRES",
  "RADIO",
  "CIRCT",
  "MODEM",
];

const KEY_ROWS = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
const EMPTY_BOARD = Array.from({ length: 6 }, () => "");
const START_DATE = Date.UTC(2026, 0, 1);

function getDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getDailyWord(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  const current = Date.UTC(year, month - 1, day);
  const dayOffset = Math.floor((current - START_DATE) / 86400000);
  const index = ((dayOffset % WORDS.length) + WORDS.length) % WORDS.length;
  return WORDS[index];
}

function scoreGuess(guess, answer) {
  const result = Array(5).fill("absent");
  const remaining = {};

  for (let i = 0; i < 5; i += 1) {
    if (guess[i] === answer[i]) {
      result[i] = "correct";
    } else {
      remaining[answer[i]] = (remaining[answer[i]] || 0) + 1;
    }
  }

  for (let i = 0; i < 5; i += 1) {
    if (result[i] === "correct") continue;
    if (remaining[guess[i]] > 0) {
      result[i] = "present";
      remaining[guess[i]] -= 1;
    }
  }

  return result;
}

function getKeyboardStatus(guesses, answer) {
  const rank = { absent: 1, present: 2, correct: 3 };
  const statuses = {};

  guesses.filter(Boolean).forEach((guess) => {
    scoreGuess(guess, answer).forEach((status, index) => {
      const letter = guess[index];
      if (!statuses[letter] || rank[status] > rank[statuses[letter]]) {
        statuses[letter] = status;
      }
    });
  });

  return statuses;
}

function getSavedGame(storageKey, dateKey) {
  const fallback = {
    guesses: EMPTY_BOARD,
    currentGuess: "",
    message: "Find today's 5-letter tech term.",
  };

  if (typeof window === "undefined") return fallback;

  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "null");
    if (saved?.dateKey !== dateKey || !Array.isArray(saved.guesses)) {
      return fallback;
    }

    return {
      guesses: [...saved.guesses, ...EMPTY_BOARD].slice(0, 6),
      currentGuess: saved.currentGuess || "",
      message: saved.message || fallback.message,
    };
  } catch {
    return fallback;
  }
}

export default function CyberWordle() {
  const dateKey = useMemo(() => getDateKey(), []);
  const answer = useMemo(() => getDailyWord(dateKey), [dateKey]);
  const storageKey = `wesstech-cyberwordle-${dateKey}`;
  const initialGame = useMemo(
    () => getSavedGame(storageKey, dateKey),
    [dateKey, storageKey],
  );
  const [guesses, setGuesses] = useState(initialGame.guesses);
  const [currentGuess, setCurrentGuess] = useState(initialGame.currentGuess);
  const [message, setMessage] = useState(initialGame.message);
  const hasMounted = useRef(false);

  const submittedGuesses = guesses.filter(Boolean);
  const isWon = submittedGuesses.includes(answer);
  const isComplete = isWon || submittedGuesses.length >= 6;
  const keyboardStatus = getKeyboardStatus(submittedGuesses, answer);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    localStorage.setItem(
      storageKey,
      JSON.stringify({ dateKey, guesses, currentGuess, message })
    );
  }, [currentGuess, dateKey, guesses, message, storageKey]);

  const submitGuess = () => {
    if (isComplete) return;
    if (currentGuess.length !== 5) {
      setMessage("Enter 5 letters.");
      return;
    }
    if (!WORDS.includes(currentGuess)) {
      setMessage("Use a cybersecurity, AI, cloud, or networking word.");
      return;
    }

    const nextGuesses = [...guesses];
    const row = nextGuesses.findIndex((guess) => guess === "");
    nextGuesses[row] = currentGuess;
    setGuesses(nextGuesses);
    setCurrentGuess("");

    if (currentGuess === answer) {
      setMessage(`Solved in ${row + 1}. Nicely defended.`);
    } else if (row === 5) {
      setMessage(`Today's word was ${answer}.`);
    } else {
      setMessage(`${5 - row} guesses left.`);
    }
  };

  const pressKey = (key) => {
    if (key === "ENTER") {
      submitGuess();
      return;
    }
    if (key === "BACK") {
      if (!isComplete) setCurrentGuess((guess) => guess.slice(0, -1));
      return;
    }
    if (/^[A-Z]$/.test(key) && !isComplete) {
      setCurrentGuess((guess) => (guess + key).slice(0, 5));
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.key === "Enter") pressKey("ENTER");
      else if (event.key === "Backspace") pressKey("BACK");
      else if (/^[a-zA-Z]$/.test(event.key)) pressKey(event.key.toUpperCase());
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const resetPractice = () => {
    localStorage.removeItem(storageKey);
    setGuesses(EMPTY_BOARD);
    setCurrentGuess("");
    setMessage("Progress cleared for today.");
  };

  return (
    <main className="cw-page">
      <style>{`
        .cw-page{min-height:100vh;background:#060a14;color:#e2e8f0;font-family:'Space Grotesk',sans-serif;padding:0 24px 70px}
        .cw-wrap{max-width:1040px;margin:0 auto}
        .cw-nav{height:58px;display:flex;align-items:center;justify-content:space-between;gap:16px;border-bottom:1px solid #1e2d47}
        .cw-brand{display:flex;align-items:center;gap:10px;color:#f8fafc;text-decoration:none}
        .cw-mark{width:32px;height:32px;background:linear-gradient(135deg,#2563eb,#7c3aed);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px}
        .cw-brand-name{font-family:'Syne',sans-serif;font-size:17px;font-weight:800}
        .cw-nav-links{display:flex;gap:18px;align-items:center}
        .cw-nav-links a{color:#94a3b8;text-decoration:none;font-size:13px;font-weight:700;min-height:44px;display:inline-flex;align-items:center}
        .cw-hero{padding:54px 0 32px;border-bottom:1px solid #1e2d47;margin-bottom:34px;display:grid;grid-template-columns:minmax(0,1fr) 220px;gap:24px;align-items:end}
        .cw-kicker{color:#60a5fa;font-size:11px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;margin-bottom:12px}
        .cw-title{font-family:'Syne',sans-serif;color:#f8fafc;font-size:clamp(34px,6vw,64px);line-height:1.02;letter-spacing:-.02em;margin:0 0 14px}
        .cw-title span{background:linear-gradient(90deg,#93c5fd,#38bdf8 38%,#a78bfa 78%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
        .cw-copy{color:#94a3b8;font-size:16px;line-height:1.75;max-width:680px}
        .cw-date{background:#0d1424;border:1px solid #1e2d47;border-radius:8px;padding:16px;text-align:right}
        .cw-date-label{color:#64748b;font-size:11px;letter-spacing:.12em;text-transform:uppercase;margin-bottom:6px}
        .cw-date-value{color:#f1f5f9;font-size:18px;font-weight:800}
        .cw-game{display:grid;grid-template-columns:minmax(0,450px) minmax(280px,1fr);gap:28px;align-items:start}
        .cw-panel{background:#0d1424;border:1px solid #1e2d47;border-radius:14px;padding:22px;box-shadow:0 24px 70px rgba(3,7,17,.28)}
        .cw-board{display:grid;grid-template-rows:repeat(6,1fr);gap:8px;margin:0 auto;width:min(100%,360px)}
        .cw-row{display:grid;grid-template-columns:repeat(5,1fr);gap:8px}
        .cw-cell{aspect-ratio:1;border:1px solid #243653;border-radius:8px;background:#060a14;display:flex;align-items:center;justify-content:center;color:#f8fafc;font-size:clamp(26px,7vw,38px);font-weight:800;line-height:1}
        .cw-cell.filled{border-color:#3b4d6d;background:#111827}
        .cw-cell.correct{background:#15803d;border-color:#22c55e;color:#fff}
        .cw-cell.present{background:#b45309;border-color:#f59e0b;color:#fff}
        .cw-cell.absent{background:#334155;border-color:#475569;color:#cbd5e1}
        .cw-message{min-height:42px;margin:18px auto 0;max-width:360px;background:#060a14;border:1px solid #1e2d47;border-radius:8px;color:#bfdbfe;padding:11px 14px;font-size:14px;font-weight:700;text-align:center}
        .cw-keyboard{display:grid;gap:8px;margin:22px auto 0;width:min(100%,420px);overflow:hidden}
        .cw-key-row{display:flex;gap:6px;justify-content:center;width:100%}
        .cw-key{height:44px;min-width:0;flex:1 1 0;border:1px solid #243653;border-radius:7px;background:#111827;color:#e2e8f0;font-size:13px;font-weight:800;cursor:pointer;transition:transform .12s ease,background .12s ease,border-color .12s ease;touch-action:manipulation}
        .cw-key:hover{transform:translateY(-1px);border-color:#60a5fa}
        .cw-key.wide{flex:1.45 1 0;font-size:11px}
        .cw-key.correct{background:#15803d;border-color:#22c55e;color:#fff}
        .cw-key.present{background:#b45309;border-color:#f59e0b;color:#fff}
        .cw-key.absent{background:#334155;border-color:#475569;color:#cbd5e1}
        .cw-side{display:grid;gap:16px}
        .cw-card{background:#0d1424;border:1px solid #1e2d47;border-radius:14px;padding:22px}
        .cw-card h2{font-family:'Syne',sans-serif;color:#f8fafc;font-size:21px;margin:0 0 12px}
        .cw-card p,.cw-card li{color:#94a3b8;font-size:14px;line-height:1.7}
        .cw-card ul{margin:0;padding-left:18px;display:grid;gap:8px}
        .cw-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:12px}
        .cw-stat{background:#060a14;border:1px solid #1e2d47;border-radius:8px;padding:12px;text-align:center}
        .cw-stat strong{display:block;color:#f8fafc;font-size:22px}
        .cw-stat span{color:#64748b;font-size:11px;text-transform:uppercase;letter-spacing:.08em}
        .cw-reset{width:100%;height:42px;margin-top:14px;background:#111827;border:1px solid #243653;border-radius:8px;color:#bfdbfe;font-weight:800;cursor:pointer}
        .cw-reset:hover{border-color:#60a5fa}
        :focus-visible{outline:3px solid #60a5fa;outline-offset:3px;border-radius:8px}
        @media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}}
        @media(max-width:820px){.cw-page{padding:0 14px 48px}.cw-hero{grid-template-columns:1fr;padding-top:36px}.cw-date{text-align:left}.cw-game{grid-template-columns:1fr}.cw-panel{padding:16px}.cw-nav-links{gap:12px}.cw-nav-links a{font-size:12px}.cw-cell{border-radius:7px}}
        @media(max-width:420px){.cw-page{padding-left:10px;padding-right:10px}.cw-panel,.cw-card{padding:14px}.cw-row,.cw-board,.cw-keyboard{gap:6px}.cw-key-row{gap:4px}.cw-key{height:42px;font-size:12px;border-radius:6px}.cw-key.wide{font-size:10px}.cw-stats{grid-template-columns:1fr}.cw-title{font-size:34px}.cw-copy{font-size:15px}}
      `}</style>

      <div className="cw-wrap">
        <nav className="cw-nav" aria-label="Cyber Wordle navigation">
          <Link className="cw-brand" href="/">
            <span className="cw-mark">⚡</span>
            <span className="cw-brand-name">WessTech</span>
          </Link>
          <div className="cw-nav-links">
            <Link href="/">Home</Link>
            <Link href="/articles">Guides</Link>
          </div>
        </nav>

        <section className="cw-hero">
          <div>
            <div className="cw-kicker">Daily security word challenge</div>
            <h1 className="cw-title">
              Cyber <span>Wordle</span>
            </h1>
            <p className="cw-copy">
              Six guesses to uncover today&apos;s cybersecurity, AI, cloud, or
              networking term. Progress saves automatically in this browser.
            </p>
          </div>
          <div className="cw-date" aria-label="Daily puzzle date">
            <div className="cw-date-label">Today&apos;s Puzzle</div>
            <div className="cw-date-value">{dateKey}</div>
          </div>
        </section>

        <section className="cw-game" aria-label="Cyber Wordle game">
          <div className="cw-panel">
            <div className="cw-board" role="grid" aria-label="Guess grid">
              {guesses.map((guess, rowIndex) => {
                const isSubmitted = Boolean(guess);
                const word =
                  isSubmitted || rowIndex !== submittedGuesses.length
                    ? guess
                    : currentGuess;
                const letters = Array.from(
                  { length: 5 },
                  (_, index) => word[index] || ""
                );
                const scores = isSubmitted ? scoreGuess(guess, answer) : [];

                return (
                  <div className="cw-row" role="row" key={rowIndex}>
                    {letters.map((letter, letterIndex) => (
                      <div
                        className={[
                          "cw-cell",
                          letter ? "filled" : "",
                          scores[letterIndex] || "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        key={`${rowIndex}-${letterIndex}`}
                        role="gridcell"
                        aria-label={`Row ${rowIndex + 1}, column ${letterIndex + 1}${letter ? `, ${letter}` : ""}`}
                      >
                        {letter}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>

            <div className="cw-message" role="status" aria-live="polite">
              {message}
            </div>

            <div className="cw-keyboard" aria-label="On-screen keyboard">
              {KEY_ROWS.map((row, rowIndex) => (
                <div className="cw-key-row" key={row}>
                  {rowIndex === 2 && (
                    <button
                      className="cw-key wide"
                      type="button"
                      onClick={() => pressKey("ENTER")}
                    >
                      ENTER
                    </button>
                  )}
                  {row.split("").map((letter) => (
                    <button
                      className={["cw-key", keyboardStatus[letter] || ""]
                        .filter(Boolean)
                        .join(" ")}
                      key={letter}
                      type="button"
                      onClick={() => pressKey(letter)}
                      aria-label={`Letter ${letter}`}
                    >
                      {letter}
                    </button>
                  ))}
                  {rowIndex === 2 && (
                    <button
                      className="cw-key wide"
                      type="button"
                      onClick={() => pressKey("BACK")}
                    >
                      DEL
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <aside className="cw-side">
            <div className="cw-card">
              <h2>Signal Rules</h2>
              <ul>
                <li>Green means the letter is in the correct position.</li>
                <li>Yellow means the letter is in the word, but elsewhere.</li>
                <li>Grey means the letter is not in today&apos;s word.</li>
              </ul>
            </div>

            <div className="cw-card">
              <h2>Run Sheet</h2>
              <p>
                The daily answer is selected from a local WessTech word list
                using the current date. No APIs, accounts, or databases are
                used.
              </p>
              <div className="cw-stats" aria-label="Game status">
                <div className="cw-stat">
                  <strong>{submittedGuesses.length}</strong>
                  <span>Guesses</span>
                </div>
                <div className="cw-stat">
                  <strong>{6 - submittedGuesses.length}</strong>
                  <span>Left</span>
                </div>
                <div className="cw-stat">
                  <strong>{isWon ? "Win" : isComplete ? "Done" : "Live"}</strong>
                  <span>Status</span>
                </div>
              </div>
              <button className="cw-reset" type="button" onClick={resetPractice}>
                Clear today&apos;s progress
              </button>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
