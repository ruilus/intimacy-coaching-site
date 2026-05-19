import React, { useMemo, useState } from "react";

const brand = {
  name: "Joseph Kohn",
  title: "Intimacy & Relationship Coaching",
  city: "San Francisco, Bay Area",
};

const heroCards = [
  {
    id: "feel-safer",
    title: "Come back to yourself softly",
    subtitle:
      "Learn to slow down, track your experience, and notice what your body is actually saying.",
    page: "approach",
  },
  {
    id: "repair",
    title: "Understand why love gets hard",
    subtitle:
      "Move from blame and confusion toward emotional clarity, repair, and real communication.",
    page: "couples",
  },
  {
    id: "desire",
    title: "Find your way back to closeness",
    subtitle:
      "Explore attraction, erotic clarity, emotional safety, and what intimacy means for you now.",
    page: "coaching",
  },
  {
    id: "photo",
    title: "Let your love be witnessed",
    subtitle:
      "A guided experience where presence, witnessing, and image-making become part of the work.",
    page: "photography",
  },
] as const;

const insights = [
  {
    id: "insight-safe-body",
    title: "How to feel safer in your body during intimacy",
    category: "Embodiment",
    excerpt:
      "What safety actually feels like in the body, and why slowing down is often the beginning of closeness.",
    pageTitle: "How to feel safer in your body during intimacy",
    pageIntro:
      "Feeling safe is not a thought. It is something your body recognizes, often before your mind can explain it. When intimacy feels tense, rushed, or confusing, your system may be protecting you long before you have words for what is happening.",
    pageSections: [
      {
        title: "Start by noticing, not fixing",
        text:
          "Many people try to force themselves to relax. Usually that creates more pressure. A gentler beginning is to notice what is already true. Is your jaw tight? Is your breath shallow? Are you leaning in or pulling away? Safety often begins with permission to notice without judgment.",
      },
      {
        title: "Let your body set the pace",
        text:
          "If your body needs slower touch, more space, clearer words, or more time, that is not a failure. That is information. Real intimacy grows when your body does not feel rushed past itself.",
      },
      {
        title: "A practical shift",
        text:
          "Sometimes the first step is very small: one deeper breath, one honest sentence, one hand placed on your chest, one pause before saying yes. Small moments of self-attunement can completely change the emotional quality of intimacy.",
      },
    ],
  },
  {
    id: "insight-chase-shutdown",
    title: "Why some people chase and others shut down",
    category: "Attachment",
    excerpt:
      "A simple way to understand common relationship dynamics without reducing people to a label.",
    pageTitle: "Why some people chase and others shut down",
    pageIntro:
      "In many relationships, one person moves toward connection when things feel shaky, while the other pulls back. Both responses usually make sense inside the nervous system. One reaches for closeness, the other reaches for space.",
    pageSections: [
      {
        title: "These patterns are protective",
        text:
          "The person who chases is often trying not to lose contact. The person who shuts down is often trying not to get overwhelmed. Underneath the visible behavior, both people are usually trying to find safety.",
      },
      {
        title: "The painful loop",
        text:
          "The more one person reaches, the more the other may retreat. The more the other retreats, the more urgent the reaching can become. Couples often think the problem is attitude, when the deeper issue is the loop itself.",
      },
      {
        title: "What helps",
        text:
          "The goal is not to decide who is wrong. The goal is to help each person understand what they are protecting, what they need, and how to stay in contact without abandoning themselves.",
      },
    ],
  },
  {
    id: "insight-real-yes",
    title: "What a real yes feels like",
    category: "Boundaries",
    excerpt:
      "How to tell the difference between a full-bodied yes, a pressured yes, and a no you have not said yet.",
    pageTitle: "What a real yes feels like",
    pageIntro:
      "A real yes usually has some quality of openness in it. It may feel warm, clear, curious, grounded, or alive. A pressured yes can look polite on the outside while feeling collapsed, braced, or disconnected underneath.",
    pageSections: [
      {
        title: "The body often knows first",
        text:
          "You may notice expansion, breath, ease, and a sense of willing participation when something is truly right for you. When something is not right, the signal may be quieter: hesitation, numbing, confusion, freezing, or a wish to get it over with.",
      },
      {
        title: "Why this gets confusing",
        text:
          "Many people were taught to accommodate, to be easy, to not disappoint, or to push past their own limits. That can make it hard to tell the difference between generosity and self-abandonment.",
      },
      {
        title: "A useful question",
        text:
          "Before saying yes, pause and ask: if I knew nobody would be upset with me, what would my body say right now? That question often reveals more truth than the mind can access in a hurry.",
      },
    ],
  },
  {
    id: "insight-photo-practice",
    title: "How photography can become a relationship practice",
    category: "Photography",
    excerpt:
      "Why being seen, guided, and witnessed on camera can change how partners feel with each other.",
    pageTitle: "How photography can become a relationship practice",
    pageIntro:
      "Photography can be more than documentation. It can become a way of slowing down, paying attention, and allowing a couple to witness what is actually happening between them.",
    pageSections: [
      {
        title: "Being seen changes things",
        text:
          "When people know they are being gently observed, they often become more aware of breath, touch, gaze, and emotional tone. That alone can open new tenderness and truth.",
      },
      {
        title: "Presence over performance",
        text:
          "The most meaningful images often happen when people stop trying to look right and instead feel what is here. A good guided session makes room for that.",
      },
      {
        title: "Why this is different",
        text:
          "Because Joseph brings both relational guidance and photographic sensitivity, the experience can become both emotionally useful and visually beautiful. The image is not separate from the moment, it grows out of it.",
      },
    ],
  },
] as const;

const serviceCards = [
  {
    id: "coaching",
    title: "1:1 Intimacy Sessions",
    text:
      "For people who want more self-awareness, emotional honesty, erotic clarity, and confidence in relationships.",
  },
  {
    id: "couples",
    title: "For couples who want to feel closer",
    text:
      "For partners who want to reconnect, communicate with less friction, and understand what is happening underneath the surface.",
  },
  {
    id: "photography",
    title: "Love, presence, and photography",
    text:
      "A guided couples experience that blends image-making, presence, memory, emotional connection, and embodied attention.",
  },
] as const;

const photographyHighlights = [
  "For couples who want to reconnect",
  "For engagement, anniversary, or relationship renewal sessions",
  "For people who want to be witnessed more honestly",
  "For bridging coaching and image-making in one experience",
] as const;

const navItems = [
  ["home", "Home"],
  ["about", "About"],
  ["services", "Work With Me"],
  ["approach", "Approach"],
  ["insights", "Insights"],
  ["contact", "Contact"],
] as const;

type PrimaryPageId = (typeof navItems)[number][0] | (typeof serviceCards)[number]["id"];
type InsightPageId = (typeof insights)[number]["id"];
type PageId = PrimaryPageId | InsightPageId | "local";

function cls(...items: Array<string | false | undefined>) {
  return items.filter(Boolean).join(" ");
}

function AppStyles() {
  return (
    <style>{`
      :root {
        --bg-1: #efe7df;
        --bg-2: #f7f3ef;
        --bg-3: #eef2f2;
        --card: rgba(255,255,255,0.74);
        --card-strong: rgba(255,255,255,0.86);
        --border: rgba(75,49,72,0.12);
        --text: #2e2726;
        --muted: #6f6462;
        --soft: #8e7f7b;
        --accent: #4b3148;
        --accent-soft: #d6b8a8;
        --shadow: 0 14px 40px rgba(20,20,20,0.06);
        --radius: 28px;
      }

      * { box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body {
        margin: 0;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        color: var(--text);
        background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 28%, var(--bg-3) 100%);
      }

      button, input, textarea {
        font: inherit;
      }

      .site-shell {
        min-height: 100vh;
      }

      .site-wrap {
        max-width: 1240px;
        margin: 0 auto;
        padding: 20px 16px 80px;
      }

      .header {
        position: sticky;
        top: 10px;
        z-index: 30;
        background: rgba(255,255,255,0.78);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.7);
        border-radius: 26px;
        box-shadow: var(--shadow);
        padding: 14px 18px;
        margin-bottom: 28px;
      }

      .header-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
      }

      .brand-button {
        background: none;
        border: 0;
        padding: 0;
        text-align: left;
        cursor: pointer;
      }

      .brand-name {
        font-size: 15px;
        font-weight: 700;
        color: #1f1a19;
      }

      .brand-sub {
        font-size: 11px;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: var(--soft);
        margin-top: 3px;
      }

      .nav {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .nav-btn, .btn, .ghost-btn {
        border-radius: 999px;
        padding: 12px 18px;
        border: 1px solid transparent;
        cursor: pointer;
        transition: 0.2s ease;
      }

      .nav-btn {
        background: rgba(255,255,255,0.84);
        color: var(--text);
      }

      .nav-btn.active {
        background: var(--accent);
        color: white;
      }

      .nav-btn:hover, .ghost-btn:hover {
        transform: translateY(-1px);
      }

      .mobile-toggle {
        display: none;
      }

      .mobile-menu {
        display: none;
      }

      .page-stack {
        display: flex;
        flex-direction: column;
        gap: 32px;
      }

      .hero {
        min-height: 76vh;
        display: grid;
        grid-template-columns: 1.1fr 0.9fr;
        gap: 44px;
        align-items: center;
        padding: 8px 4px 0;
      }

      .eyebrow {
        font-size: 11px;
        letter-spacing: 0.24em;
        text-transform: uppercase;
        color: var(--soft);
      }

      .hero-title {
        margin: 0;
        font-family: Georgia, "Times New Roman", serif;
        font-weight: 500;
        font-size: 76px;
        line-height: 1.02;
        letter-spacing: -0.03em;
        color: #2f2528;
      }

      .hero-title em {
        font-style: italic;
        color: #c9a58f;
      }

      .hero-copy {
        max-width: 560px;
        font-size: 18px;
        line-height: 1.8;
        color: var(--muted);
      }

      .button-row {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
      }

      .btn {
        background: var(--accent);
        color: white;
      }

      .btn:hover {
        background: #3f293c;
      }

      .ghost-btn {
        background: transparent;
        color: var(--text);
        border-color: var(--accent-soft);
      }

      .hero-art {
        min-height: 560px;
        border-radius: 34px;
        background:
          radial-gradient(circle at 60% 24%, rgba(255,255,255,0.95), rgba(255,255,255,0.35) 34%, transparent 58%),
          linear-gradient(180deg, rgba(255,255,255,0.52), rgba(245,239,234,0.72));
        position: relative;
        overflow: hidden;
      }

      .hero-art::before {
        content: "";
        position: absolute;
        inset: 0;
        background:
          radial-gradient(circle at 32% 34%, rgba(75,49,72,0.08), transparent 34%),
          radial-gradient(circle at 68% 58%, rgba(201,165,143,0.12), transparent 36%);
      }

      .hero-art-inner {
        position: absolute;
        inset: 22px;
        border-radius: 28px;
        border: 1px solid rgba(75,49,72,0.08);
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgba(75,49,72,0.7);
        text-align: center;
        padding: 28px;
        font-family: Georgia, "Times New Roman", serif;
        font-size: 22px;
        line-height: 1.6;
      }

      .section {
        display: flex;
        flex-direction: column;
        gap: 18px;
      }

      .section-title {
        margin: 0;
        font-family: Georgia, "Times New Roman", serif;
        font-size: 62px;
        line-height: 1.06;
        letter-spacing: -0.03em;
        font-weight: 500;
        color: #2f2528;
        max-width: 920px;
      }

      .section-text {
        max-width: 760px;
        font-size: 16px;
        line-height: 1.9;
        color: var(--muted);
      }

      .grid-4 {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 16px;
      }

      .grid-3 {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;
      }

      .grid-2 {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
      }

      .split {
        display: grid;
        grid-template-columns: 1.2fr 0.8fr;
        gap: 32px;
        align-items: start;
      }

      .card {
        background: var(--card);
        border: 1px solid rgba(255,255,255,0.72);
        border-radius: var(--radius);
        box-shadow: var(--shadow);
        backdrop-filter: blur(10px);
        padding: 22px;
        transition: 0.18s ease;
      }

      .card.clickable {
        cursor: pointer;
      }

      .card.clickable:hover {
        transform: translateY(-2px);
      }

      .card-title {
        margin: 0 0 10px;
        font-family: Georgia, "Times New Roman", serif;
        font-size: 30px;
        line-height: 1.14;
        letter-spacing: -0.03em;
        font-weight: 500;
        color: #2f2528;
      }

      .card-copy {
        font-size: 15px;
        line-height: 1.85;
        color: var(--muted);
      }

      .card-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 16px;
      }

      .pill {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 42px;
        height: 42px;
        border-radius: 16px;
        background: linear-gradient(180deg, rgba(255,255,255,0.96), rgba(246,238,233,0.88));
        border: 1px solid rgba(75,49,72,0.16);
        color: var(--accent);
        font-size: 20px;
        box-shadow: 0 8px 18px rgba(30,30,30,0.05);
      }

      .tiny-num {
        font-size: 12px;
        color: #b2a6a2;
      }

      .read-more {
        margin-top: 16px;
        color: #5e5150;
        font-size: 14px;
        font-weight: 600;
      }

      .cta-panel {
        background: var(--card-strong);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        box-shadow: var(--shadow);
        padding: 28px;
      }

      .cta-title {
        margin: 0 0 10px;
        font-family: Georgia, "Times New Roman", serif;
        font-size: 40px;
        line-height: 1.08;
        letter-spacing: -0.03em;
        font-weight: 500;
        color: #2f2528;
      }

      .cta-text {
        max-width: 760px;
        color: var(--muted);
        line-height: 1.85;
        font-size: 15px;
      }

      .page-shell-top {
        background: var(--card-strong);
        border: 1px solid var(--border);
        border-radius: var(--radius);
        box-shadow: var(--shadow);
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 14px;
      }

      .page-shell-title {
        margin: 0;
        font-family: Georgia, "Times New Roman", serif;
        font-size: 68px;
        line-height: 1.02;
        letter-spacing: -0.03em;
        font-weight: 500;
        color: #2f2528;
      }

      .page-shell-subtitle {
        max-width: 820px;
        font-size: 16px;
        line-height: 1.85;
        color: var(--muted);
      }

      .soft-panel {
        min-height: 360px;
        border-radius: var(--radius);
        background:
          radial-gradient(circle at top left, rgba(214,194,176,0.18), transparent 32%),
          radial-gradient(circle at bottom right, rgba(177,196,201,0.18), transparent 28%),
          linear-gradient(180deg, rgba(255,255,255,0.88), rgba(247,242,238,0.9));
        border: 1px solid rgba(255,255,255,0.7);
        box-shadow: var(--shadow);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 28px;
        text-align: center;
        color: rgba(75,49,72,0.72);
        font-family: Georgia, "Times New Roman", serif;
        font-size: 24px;
        line-height: 1.7;
      }

      .badge {
        display: inline-block;
        padding: 8px 12px;
        border-radius: 999px;
        background: #f1edeb;
        color: #605452;
        font-size: 12px;
        font-weight: 600;
      }

      .meta-block {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .meta-row {
        display: flex;
        align-items: center;
        gap: 12px;
        border-radius: 18px;
        background: rgba(255,255,255,0.84);
        border: 1px solid rgba(75,49,72,0.1);
        padding: 14px 16px;
      }

      .meta-icon {
        width: 40px;
        height: 40px;
        border-radius: 14px;
        background: #f5efeb;
        color: var(--accent);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
      }

      .form-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
      }

      .input, .textarea {
        width: 100%;
        border: 1px solid rgba(75,49,72,0.12);
        background: white;
        border-radius: 18px;
        padding: 14px 16px;
        color: var(--text);
        outline: none;
      }

      .textarea {
        min-height: 170px;
        resize: vertical;
      }

      .input:focus, .textarea:focus {
        border-color: rgba(75,49,72,0.28);
        box-shadow: 0 0 0 3px rgba(75,49,72,0.08);
      }

      .footer {
        margin-top: 42px;
        background: rgba(255,255,255,0.78);
        border: 1px solid rgba(255,255,255,0.7);
        border-radius: 26px;
        box-shadow: var(--shadow);
        padding: 22px;
      }

      .footer-row {
        display: flex;
        gap: 18px;
        justify-content: space-between;
        align-items: center;
      }

      .footer-title {
        font-weight: 700;
        color: #221d1d;
        margin-bottom: 4px;
      }

      .footer-copy {
        max-width: 620px;
        color: var(--muted);
        font-size: 13px;
        line-height: 1.8;
      }

      @media (max-width: 980px) {
        .hero,
        .split,
        .grid-4,
        .grid-3,
        .grid-2,
        .form-grid,
        .footer-row {
          grid-template-columns: 1fr;
          display: grid;
        }

        .hero-title {
          font-size: 54px;
        }

        .section-title {
          font-size: 44px;
        }

        .page-shell-title {
          font-size: 50px;
        }

        .hero-art {
          min-height: 360px;
        }
      }

      @media (max-width: 760px) {
        .site-wrap {
          padding: 14px 12px 56px;
        }

        .nav {
          display: none;
        }

        .mobile-toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 999px;
          border: 1px solid rgba(75,49,72,0.1);
          background: rgba(255,255,255,0.84);
          cursor: pointer;
          font-size: 18px;
        }

        .mobile-menu {
          display: grid;
          gap: 8px;
          margin-top: 14px;
          padding-top: 14px;
          border-top: 1px solid rgba(75,49,72,0.08);
        }

        .hero-title {
          font-size: 42px;
        }

        .hero-copy {
          font-size: 16px;
        }

        .section-title {
          font-size: 34px;
        }

        .page-shell-title {
          font-size: 38px;
        }

        .cta-title {
          font-size: 32px;
        }

        .button-row {
          flex-direction: column;
          align-items: stretch;
        }

        .btn, .ghost-btn, .nav-btn {
          width: 100%;
        }
      }
    `}</style>
  );
}

function Button({
  children,
  onClick,
  primary = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  primary?: boolean;
}) {
  return (
    <button className={primary ? "btn" : "ghost-btn"} onClick={onClick} type="button">
      {children}
    </button>
  );
}

function Card({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div
      className={cls("card", onClick && "clickable")}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section">
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
      {text ? <div className="section-text">{text}</div> : null}
    </div>
  );
}

function PageShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="page-stack">
      <div className="page-shell-top">
        <div className="eyebrow">A gentle beginning</div>
        <h1 className="page-shell-title">{title}</h1>
        <div className="page-shell-subtitle">{subtitle}</div>
      </div>
      {children}
    </div>
  );
}

function BottomPageCTA({
  title,
  text,
  primaryLabel,
  primaryPage,
  secondaryLabel,
  secondaryPage,
  goTo,
}: {
  title: string;
  text: string;
  primaryLabel: string;
  primaryPage: PageId;
  secondaryLabel: string;
  secondaryPage: PageId;
  goTo: (page: PageId) => void;
}) {
  return (
    <div className="cta-panel">
      <h3 className="cta-title">{title}</h3>
      <div className="cta-text">{text}</div>
      <div className="button-row" style={{ marginTop: 18 }}>
        <Button onClick={() => goTo(primaryPage)}>{primaryLabel}</Button>
        <Button onClick={() => goTo(secondaryPage)}>{secondaryLabel}</Button>
      </div>
    </div>
  );
}

function SoftPanel({ text }: { text: string }) {
  return <div className="soft-panel">{text}</div>;
}

function Header({
  page,
  setPage,
  isMenuOpen,
  setIsMenuOpen,
}: {
  page: PageId;
  setPage: (page: PageId) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <header className="header">
      <div className="header-row">
        <button onClick={() => setPage("home")} className="brand-button" type="button">
          <div className="brand-name">{brand.name}</div>
          <div className="brand-sub">{brand.title}</div>
        </button>

        <nav className="nav">
          {navItems.map(([value, label]) => (
            <button
              key={value}
              onClick={() => setPage(value)}
              className={cls("nav-btn", page === value && "active")}
              type="button"
            >
              {label}
            </button>
          ))}
        </nav>

        <button
          className="mobile-toggle"
          onClick={() => setIsMenuOpen((v) => !v)}
          type="button"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {isMenuOpen ? (
        <div className="mobile-menu">
          {navItems.map(([value, label]) => (
            <button
              key={value}
              onClick={() => {
                setPage(value);
                setIsMenuOpen(false);
              }}
              className={cls("nav-btn", page === value && "active")}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>
      ) : null}
    </header>
  );
}

function HeroCard({
  card,
  index,
  goTo,
}: {
  card: (typeof heroCards)[number];
  index: number;
  goTo: (page: PageId) => void;
}) {
  return (
    <Card onClick={() => goTo(card.page)}>
      <div className="card-top">
        <div className="pill">{index + 1}</div>
        <div className="tiny-num">0{index + 1}</div>
      </div>
      <h3 className="card-title">{card.title}</h3>
      <div className="card-copy">{card.subtitle}</div>
      <div className="read-more">Learn more →</div>
    </Card>
  );
}

function InsightDetailPage({
  insight,
  goTo,
}: {
  insight: (typeof insights)[number];
  goTo: (page: PageId) => void;
}) {
  return (
    <div className="page-stack">
      <div className="page-shell-top">
        <div className="badge">{insight.category}</div>
        <h1 className="page-shell-title">{insight.pageTitle}</h1>
        <div className="page-shell-subtitle">{insight.pageIntro}</div>
      </div>

      <div className="split">
        <div className="page-stack">
          {insight.pageSections.map((section) => (
            <Card key={section.title}>
              <h3 className="card-title">{section.title}</h3>
              <div className="card-copy">{section.text}</div>
            </Card>
          ))}

          <div className="cta-panel">
            <h3 className="cta-title">A gentle next step</h3>
            <div className="cta-text">
              Reading can open something. Practice and support can help it become
              real. If this topic feels close to your life right now, a session can
              help you explore it more personally and more honestly.
            </div>
            <div className="button-row" style={{ marginTop: 18 }}>
              <Button primary onClick={() => goTo("contact")}>
                Book a Session
              </Button>
              <Button onClick={() => goTo("insights")}>Back to Insights</Button>
            </div>
          </div>
        </div>

        <SoftPanel text="A quieter, simpler visual placeholder for now. Once your site is running, we can add the more artistic line-drawing versions back in." />
      </div>
    </div>
  );
}

function HomePage({ goTo }: { goTo: (page: PageId) => void }) {
  return (
    <div className="page-stack">
      <section className="hero">
        <div className="page-stack">
          <div className="eyebrow">San Francisco • Bay Area • Online</div>
          <h1 className="hero-title">
            Rediscover <em>intimacy</em>
            <br />
            without shame
          </h1>
          <div className="hero-copy">
            A safe, compassionate space to explore your sexuality, deepen
            connection, and heal, individually or with your partner.
          </div>
          <div className="button-row">
            <Button primary onClick={() => goTo("contact")}>
              Book a Session
            </Button>
            <Button onClick={() => goTo("services")}>Explore Services</Button>
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-art-inner">
            A clean, soft hero artwork placeholder.
            <br />
            Once the site is running, we can rebuild the more detailed romantic sketch version.
          </div>
        </div>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="You are in the right place if"
          title="You long for more closeness, more honesty, and more ease in love."
          text="This work can support emotional intimacy, desire, communication, repair, self-understanding, and the quiet places in relationships that often go unseen until they start hurting."
        />
        <div className="grid-4">
          {heroCards.map((card, index) => (
            <HeroCard key={card.id} card={card} index={index} goTo={goTo} />
          ))}
        </div>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="Work with me"
          title="Offerings for intimacy, healing, and deeper connection."
          text="Choose the path that feels most relevant right now. You do not need to know everything before beginning."
        />
        <div className="grid-3">
          {serviceCards.map((item) => (
            <Card key={item.id} onClick={() => goTo(item.id)}>
              <div className="card-top">
                <div className="pill">•</div>
              </div>
              <h3 className="card-title">{item.title}</h3>
              <div className="card-copy">{item.text}</div>
              <div style={{ marginTop: 18 }}>
                <Button onClick={() => goTo(item.id)}>Learn more</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="split">
        <div className="page-stack">
          <SectionTitle
            eyebrow="Photography bridge"
            title="More than photos, a guided experience of being seen together."
            text="This is where your coaching work and your photography background meet. Couples can slow down, remember, soften, and let their love be witnessed in a way that feels true."
          />
          <div className="section-text">
            <p>
              Instead of focusing on looking perfect, the session can become a
              practice of presence, touch, memory, eye contact, voice, and emotional
              attention.
            </p>
            <p>
              This page is designed to connect naturally with your IQphoto ecosystem
              while standing as its own meaningful coaching-led offering.
            </p>
          </div>
          <div>
            <Button primary onClick={() => goTo("photography")}>
              View Photography Practice Page
            </Button>
          </div>
        </div>

        <SoftPanel text="Photography bridge visual placeholder" />
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="Insights"
          title="Thoughtful pages that can grow into videos, reflections, and resources for people looking for real connection."
          text="Each topic page can later include a YouTube video, your interpretation, practical guidance, and a clear next step to work with you."
        />
        <div className="grid-4">
          {insights.slice(0, 4).map((item) => (
            <Card key={item.id} onClick={() => goTo(item.id)}>
              <div className="badge">{item.category}</div>
              <h3 className="card-title" style={{ marginTop: 16 }}>{item.title}</h3>
              <div className="card-copy">{item.excerpt}</div>
              <div className="read-more">Read reflection →</div>
            </Card>
          ))}
        </div>
      </section>

      <section className="cta-panel">
        <h3 className="cta-title">
          You do not have to have the right words before reaching out.
        </h3>
        <div className="cta-text">
          Some people come because intimacy feels confusing. Some come because they
          still love each other but do not know how to get close again. Some come
          because they are tired of carrying everything alone and want a kinder place
          to begin.
        </div>
        <div className="button-row" style={{ marginTop: 18 }}>
          <Button primary onClick={() => goTo("contact")}>
            Book a First Conversation
          </Button>
          <Button onClick={() => goTo("about")}>Learn About Joseph</Button>
        </div>
      </section>
    </div>
  );
}

function AboutPage({ goTo }: { goTo: (page: PageId) => void }) {
  return (
    <div className="split">
      <div className="page-stack">
        <SectionTitle
          eyebrow="About Joseph"
          title="A photographer’s eye, a warm presence, and a deep love for what happens between people."
          text="For years, Joseph worked closely with couples in emotionally charged moments, proposals, weddings, intimacy, tension, tenderness, and the quiet in-between. Coaching is a natural extension of that work."
        />
        <div className="section-text">
          <p>
            His background in documentary-style photography trained him to notice subtle
            shifts, body language, emotional timing, and the lived texture of
            connection. That same attentiveness now shapes his coaching work.
          </p>
          <p>
            This practice is for people who want more honesty with themselves, more
            clarity in relationships, and a more grounded relationship with desire,
            shame, tenderness, and truth.
          </p>
          <p>
            Joseph is a <strong>Somatica®-trained coach</strong> and works in a warm,
            experiential, body-aware style that honors both emotional complexity and
            practical movement.
          </p>
        </div>
        <div className="grid-2">
          <Card>
            <div className="card-title" style={{ fontSize: 24 }}>What informs the work</div>
            <div className="card-copy">
              Attachment, embodiment, emotional awareness, erotic clarity, relational
              repair, and guided witnessing.
            </div>
          </Card>
          <Card>
            <div className="card-title" style={{ fontSize: 24 }}>Who this is for</div>
            <div className="card-copy">
              Individuals and couples who want more connection, more self-understanding,
              and more aliveness in love.
            </div>
          </Card>
        </div>
        <BottomPageCTA
          title="If this feels like a fit, the next step can be simple."
          text="You can explore the ways we can work together, or reach out and begin with a conversation."
          primaryLabel="Explore Services"
          primaryPage="services"
          secondaryLabel="Get in Touch"
          secondaryPage="contact"
          goTo={goTo}
        />
      </div>

      <SoftPanel text="About-page visual placeholder" />
    </div>
  );
}

function ServicesPage({ goTo }: { goTo: (page: PageId) => void }) {
  return (
    <div className="page-stack">
      <SectionTitle
        eyebrow="Work with me"
        title="Services for people who want more truth, more ease, and more real connection."
        text="Whether you are coming alone, with a partner, or through the doorway of photography, each offering is designed to support more honesty, more connection, and more aliveness in the way you love."
      />
      <div className="grid-3">
        {serviceCards.map((item) => (
          <Card key={item.id} onClick={() => goTo(item.id)}>
            <div className="card-top">
              <div className="pill">•</div>
            </div>
            <h3 className="card-title">{item.title}</h3>
            <div className="card-copy">{item.text}</div>
            <div style={{ marginTop: 18 }}>
              <Button onClick={() => goTo(item.id)}>Learn more</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function CoachingPage({ goTo }: { goTo: (page: PageId) => void }) {
  const coachingHighlights = [
    "Feel what is happening in your body instead of only talking about it",
    "Understand why certain patterns repeat in love and intimacy",
    "Learn to name needs, limits, longing, and emotional truth",
    "Reconnect with desire, softness, and more grounded confidence",
  ] as const;

  return (
    <div className="split">
      <div className="page-stack">
        <SectionTitle
          eyebrow="1:1 intimacy coaching"
          title="For people who want to understand themselves more gently in love, longing, conflict, and connection."
          text="This work can support emotional regulation, attachment awareness, boundaries, erotic clarity, repair after heartbreak, shame work, and learning how to feel what is true before you rush past it."
        />
        <div className="grid-2">
          {coachingHighlights.map((item, index) => (
            <Card key={item}>
              <div className="card-top">
                <div className="pill">{index + 1}</div>
                <div className="tiny-num">0{index + 1}</div>
              </div>
              <div className="card-copy" style={{ fontSize: 16 }}>{item}</div>
            </Card>
          ))}
        </div>
        <div className="section-text">
          <p>
            This is not about becoming perfect. It is about becoming more connected to
            yourself, more able to stay present, and more able to move toward intimacy
            without abandoning yourself.
          </p>
          <p>Sessions can be in person in the Bay Area or online.</p>
        </div>
        <BottomPageCTA
          title="You do not have to figure it all out alone."
          text="If one-on-one work feels right, you can reach out directly, or explore the wider range of support available."
          primaryLabel="Get in Touch"
          primaryPage="contact"
          secondaryLabel="Explore Services"
          secondaryPage="services"
          goTo={goTo}
        />
      </div>

      <SoftPanel text="1:1 coaching visual placeholder" />
    </div>
  );
}

function CouplesPage({ goTo }: { goTo: (page: PageId) => void }) {
  return (
    <div className="split">
      <div className="page-stack">
        <SectionTitle
          eyebrow="Couples sessions"
          title="For partners who still love each other, and want to find each other again."
          text="Some couples come because they are stuck in the same conflict. Some because closeness disappeared. Some because one person reaches and the other goes quiet. The work is about understanding the pattern, not just arguing better."
        />
        <div className="section-text">
          <p>
            Together we can work with emotional escalation, repair, disappointment,
            attachment patterns, nervous system differences, boundaries, erotic
            disconnection, and what each partner is actually trying to protect.
          </p>
          <p>
            The goal is not to force harmony. The goal is to create more truth, more
            understanding, and more chances for connection to become real again.
          </p>
        </div>
        <div className="grid-2">
          <Card>
            <div className="card-title" style={{ fontSize: 24 }}>Common themes</div>
            <div className="card-copy">
              Chasing and withdrawal, resentment, feeling unseen, fear of conflict,
              sexual mismatch, and difficulty repairing after hurt.
            </div>
          </Card>
          <Card>
            <div className="card-title" style={{ fontSize: 24 }}>Style</div>
            <div className="card-copy">
              Gentle, practical, body-aware, and honest. Less performance, more truth.
            </div>
          </Card>
        </div>
        <BottomPageCTA
          title="If you want help finding each other again, there is a next step."
          text="You can reach out for a first conversation, or learn more about the overall approach behind this work."
          primaryLabel="Get in Touch"
          primaryPage="contact"
          secondaryLabel="Explore the Approach"
          secondaryPage="approach"
          goTo={goTo}
        />
      </div>

      <SoftPanel text="Couples-page visual placeholder" />
    </div>
  );
}

function PhotographyPage({ goTo }: { goTo: (page: PageId) => void }) {
  return (
    <div className="split">
      <div className="page-stack">
        <SectionTitle
          eyebrow="Intimacy through photography"
          title="A guided experience where photos reflect something honest and true."
          text="This offering brings together Joseph’s long experience with couples and his sensitivity to presence, connection, and what becomes visible when people feel safe enough to be real."
        />
        <div className="section-text">
          <p>
            Instead of treating photos as the main outcome, the session becomes an
            experience. Partners slow down, breathe, make contact, remember what they
            love, and allow themselves to be seen.
          </p>
          <p>
            The focus is not on posing for the sake of images or creating something
            performative for social media. The focus is on helping people stay close to
            what feels honest, aware of their comfort, their discomfort, and the ways
            they naturally come toward each other. Joseph can gently guide attention,
            pacing, body awareness, eye contact, and reflections on meaningful moments
            from the past, while also creating photos that reflect something true.
            Often, that honesty is already deeply beautiful in its raw form.
          </p>
        </div>
        <div className="grid-2">
          {photographyHighlights.map((item, index) => (
            <Card key={item}>
              <div className="card-top">
                <div className="pill">{index + 1}</div>
                <div className="tiny-num">0{index + 1}</div>
              </div>
              <div className="card-copy" style={{ fontSize: 16 }}>{item}</div>
            </Card>
          ))}
        </div>
        <BottomPageCTA
          title="If this kind of experience speaks to you, let’s keep going."
          text="You can get in touch to ask about a session, or explore the rest of the coaching work this photography practice connects to."
          primaryLabel="Get in Touch"
          primaryPage="contact"
          secondaryLabel="Explore Services"
          secondaryPage="services"
          goTo={goTo}
        />
      </div>

      <SoftPanel text="Photography-page visual placeholder" />
    </div>
  );
}

function ApproachPage({ goTo }: { goTo: (page: PageId) => void }) {
  const approachCards = [
    {
      title: "Embodiment",
      text: "Notice what your body is doing before your mind explains it away.",
    },
    {
      title: "Emotional truth",
      text: "Learn to recognize what you actually feel, instead of only what you think you should feel.",
    },
    {
      title: "Relational practice",
      text: "Patterns become clearer in connection. That is where repair and growth can also begin.",
    },
    {
      title: "Erotic clarity",
      text: "Understand what helps you feel alive, connected, safe, wanted, and real.",
    },
  ] as const;

  return (
    <div className="page-stack">
      <SectionTitle
        eyebrow="Approach"
        title="A body-aware, emotionally intelligent path toward intimacy and closeness."
        text="The work is experiential, emotionally attuned, and grounded in helping people notice what is true, communicate more clearly, and create more safety and aliveness in connection."
      />
      <div className="grid-4">
        {approachCards.map((item, index) => (
          <Card key={item.title}>
            <div className="card-top">
              <div className="pill">{index + 1}</div>
            </div>
            <h3 className="card-title">{item.title}</h3>
            <div className="card-copy">{item.text}</div>
          </Card>
        ))}
      </div>
      <div className="split">
        <div className="section-text">
          <p>
            Coaching may include work around self-regulation, boundaries, attachment
            patterns, desire, shame, communication, and the ways people lose
            themselves or protect themselves in closeness.
          </p>
          <p>
            Joseph is a <strong>Somatica®-trained coach</strong>. That training informs
            the work, but the public-facing site centers the lived concerns people
            actually search for: safety, desire, repair, emotional clarity, and how to
            be more fully themselves in love.
          </p>
        </div>
        <SoftPanel text="Approach-page visual placeholder" />
      </div>
      <BottomPageCTA
        title="If the way this work feels matters to you, there’s a natural next step."
        text="You can explore the specific ways to work together, or reach out and ask what might fit best."
        primaryLabel="Explore Services"
        primaryPage="services"
        secondaryLabel="Get in Touch"
        secondaryPage="contact"
        goTo={goTo}
      />
    </div>
  );
}

function LocalPage({ goTo }: { goTo: (page: PageId) => void }) {
  return (
    <div className="page-stack">
      <SectionTitle
        eyebrow="San Francisco / Bay Area"
        title="Bay Area sessions, in person or online."
        text="If you happen to be nearby and want to meet in person, that is welcome. If online feels easier, deeper, or simply more practical, that works beautifully too. Real connection does not depend on distance."
      />
      <div className="grid-2">
        <Card>
          <h3 className="card-title">Where sessions can happen</h3>
          <div className="card-copy">
            I’m comfortable traveling within the greater Bay Area for in-person
            sessions when that feels supportive and meaningful. You’re also welcome to
            come to my studio in Daly City, where I’ve been meeting couples for the
            past 22 years.
            <br /><br />
            • My studio in Daly City
            <br />
            • Your home, when that feels like the right setting
            <br />
            • San Francisco and the greater Bay Area
            <br />
            • Online, from anywhere
          </div>
        </Card>

        <Card>
          <h3 className="card-title">How people often begin</h3>
          <div className="card-copy">
            Some people reach out because intimacy feels confusing. Some want help with
            emotional connection, desire, or communication. Some come alone. Some come
            with a partner. Some simply know they want something to soften and shift.
            <br /><br />
            You do not need to be in crisis to begin. You also do not need to know
            exactly what kind of session you need before reaching out.
          </div>
        </Card>
      </div>
      <BottomPageCTA
        title="In person or online, you can begin in the way that feels right."
        text="If you want to talk through options, reach out. If you want to understand the services first, you can explore those too."
        primaryLabel="Get in Touch"
        primaryPage="contact"
        secondaryLabel="Explore Services"
        secondaryPage="services"
        goTo={goTo}
      />
    </div>
  );
}

function InsightsPage({ goTo }: { goTo: (page: PageId) => void }) {
  return (
    <div className="page-stack">
      <SectionTitle
        eyebrow="Insights"
        title="A growing library of reflections on intimacy, tenderness, and the ways we come closer to ourselves and each other."
        text="These reflections are here to support curiosity, language, and self-recognition. They can help people feel less alone in what they are experiencing and offer a gentle doorway into deeper work."
      />
      <div className="grid-2">
        {insights.map((item) => (
          <Card key={item.id} onClick={() => goTo(item.id)}>
            <div className="badge">{item.category}</div>
            <h3 className="card-title" style={{ marginTop: 16 }}>{item.title}</h3>
            <div className="card-copy">{item.excerpt}</div>
            <div className="read-more">Read reflection →</div>
          </Card>
        ))}
      </div>
      <BottomPageCTA
        title="If something here feels familiar, you do not have to stay only in reflection."
        text="You can explore the services, or get in touch when you are ready for a more personal conversation."
        primaryLabel="Explore Services"
        primaryPage="services"
        secondaryLabel="Get in Touch"
        secondaryPage="contact"
        goTo={goTo}
      />
    </div>
  );
}

function ContactPage() {
  return (
    <div className="split">
      <div className="page-stack">
        <SectionTitle
          eyebrow="Contact"
          title="Start with a gentle conversation."
          text="You are welcome to describe what you feel or need in whatever words you have right now. It can be something clear, or something simple that becomes clearer during our conversation. Either way is okay."
        />
        <div className="meta-block">
          <div className="meta-row">
            <div className="meta-icon">@</div>
            <div>joseph@myfuturesite.com</div>
          </div>
          <div className="meta-row">
            <div className="meta-icon">☎</div>
            <div>415-939-5877</div>
          </div>
          <div className="meta-row">
            <div className="meta-icon">⌂</div>
            <div>San Francisco, Bay Area, and online</div>
          </div>
        </div>
      </div>

      <Card>
        <div className="page-stack">
          <div className="form-grid">
            <input className="input" placeholder="Your name" />
            <input className="input" placeholder="Email" />
          </div>
          <input
            className="input"
            placeholder="What are you looking for support with?"
          />
          <textarea
            className="textarea"
            placeholder="A few sentences are enough. What feels important right now?"
          />
          <div>
            <Button primary>Send inquiry</Button>
          </div>
          <div className="card-copy">
            I respond personally and with care. You are welcome to share as much or as
            little as feels right for you.
          </div>
        </div>
      </Card>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<PageId>("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateTo = (nextPage: PageId) => {
    setPage(nextPage);
    setIsMenuOpen(false);
  };

  const pageContent = useMemo(() => {
    switch (page) {
      case "home":
        return <HomePage goTo={navigateTo} />;
      case "about":
        return (
          <PageShell
            title="About Joseph"
            subtitle="Get to know the presence, perspective, and relational philosophy behind this work."
          >
            <AboutPage goTo={navigateTo} />
          </PageShell>
        );
      case "services":
        return (
          <PageShell
            title="Work With Me"
            subtitle="Choose the kind of support that feels closest to what you need right now."
          >
            <ServicesPage goTo={navigateTo} />
          </PageShell>
        );
      case "coaching":
        return (
          <PageShell
            title="1:1 Intimacy Coaching"
            subtitle="For people who want more clarity, more self-trust, and a more honest relationship with desire, boundaries, and connection."
          >
            <CoachingPage goTo={navigateTo} />
          </PageShell>
        );
      case "couples":
        return (
          <PageShell
            title="Couples Sessions"
            subtitle="For partners who want more understanding, more repair, and a more alive connection to each other."
          >
            <CouplesPage goTo={navigateTo} />
          </PageShell>
        );
      case "photography":
        return (
          <PageShell
            title="Intimacy Through Photography"
            subtitle="A guided experience of presence, connection, and being seen, where photography becomes part of the practice."
          >
            <PhotographyPage goTo={navigateTo} />
          </PageShell>
        );
      case "approach":
        return (
          <PageShell
            title="Approach"
            subtitle="This work is warm, body-aware, relational, and grounded in helping people move toward more truth and connection."
          >
            <ApproachPage goTo={navigateTo} />
          </PageShell>
        );
      case "local":
        return (
          <PageShell
            title="San Francisco / Bay Area"
            subtitle="In person if you want that, online if that serves you better, both are welcome."
          >
            <LocalPage goTo={navigateTo} />
          </PageShell>
        );
      case "insights":
        return (
          <PageShell
            title="Insights"
            subtitle="Reflections on intimacy, embodiment, desire, shame, repair, and the ways we come closer to ourselves and each other."
          >
            <InsightsPage goTo={navigateTo} />
          </PageShell>
        );
      case "contact":
        return (
          <PageShell
            title="Contact"
            subtitle="Reach out when you are ready. You do not need perfect words to begin."
          >
            <ContactPage />
          </PageShell>
        );
      default: {
        const matchedInsight = insights.find((item) => item.id === page);
        if (matchedInsight) {
          return <InsightDetailPage insight={matchedInsight} goTo={navigateTo} />;
        }
        return <HomePage goTo={navigateTo} />;
      }
    }
  }, [page]);

  return (
    <div className="site-shell">
      <AppStyles />
      <div className="site-wrap">
        <Header
          page={page}
          setPage={navigateTo}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />

        {pageContent}

        <footer className="footer">
          <div className="footer-row">
            <div>
              <div className="footer-title">
                {brand.name} • {brand.title}
              </div>
              <div>{brand.city} • In person and online</div>
            </div>
            <div className="footer-copy">
              Somatic, relational, and intimacy-centered support for individuals and
              couples who want more truth, more tenderness, and more ease in the way
              they love.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}