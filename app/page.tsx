import Countdown from "@/components/Countdown";
import { SubscribeModal } from "@/components/SubscribeModal";
import { SubscribeButton } from "@/components/SubscribeButton";

// ── Poster-matched design tokens ─────────────────────────────────────────────
// BG:          #04_0a_06  (near-black dark green)
// Primary:     #00e87a    (vivid green)
// Primary dim: #00a054    (mid green)
// Primary dk:  #005028    (deep green)
// Text:        #ffffff / #dcffe9 (off-white)
// Muted:       #64a078    (muted green)
// Card palette: green / blue / orange / purple / pink / gold
// ─────────────────────────────────────────────────────────────────────────────

const AUDIENCE_CARDS = [
  {
    role: "Players",
    headline: "Dominate Your Game",
    accent: "#00e87a",
    bg: "rgba(8,30,18,0.95)",
    badgeBg: "#003c1c",
    borderTop: "#00e87a",
    features: [
      "ELO rankings & weekly updates",
      "Full match history & win/loss stats",
      "Issue ranking challenges to rivals",
      "Achievement badges & leaderboards",
      "Smart court booking in 1-hour slots",
      "Tournament registration & brackets",
    ],
  },
  {
    role: "Coaches",
    headline: "Train. Earn. Grow.",
    accent: "#3ca0ff",
    bg: "rgba(8,20,38,0.95)",
    badgeBg: "#0a285a",
    borderTop: "#3ca0ff",
    features: [
      "Dedicated coaching dashboard & KPIs",
      "Session scheduling & student limits",
      "Commission wallet & payout tracking",
      "Player performance analytics",
      "Verified certification badges",
      "1-on-1, group & clinic management",
    ],
  },
  {
    role: "Referees",
    headline: "Officiate With Precision",
    accent: "#ff8c42",
    bg: "rgba(35,18,8,0.95)",
    badgeBg: "#50280a",
    borderTop: "#ff8c42",
    features: [
      "Match & tournament assignments",
      "Best-of-3 live score recording",
      "Rule appeals & dispute tracking",
      "ITF rules database on demand",
      "Ball crew & staff coordination",
      "Credential expiry reminders",
    ],
  },
  {
    role: "Staff & Admins",
    headline: "Run the Whole Show",
    accent: "#c87bff",
    bg: "rgba(28,10,40,0.95)",
    badgeBg: "#41145a",
    borderTop: "#c87bff",
    features: [
      "M-Pesa, PayPal & Stripe payments",
      "Audit logs & compliance reports",
      "Task templates & staff assignments",
      "Broadcast announcements by role",
      "Revenue forecasting & budgeting",
      "Multi-role dashboards & KPIs",
    ],
  },
  {
    role: "Organizations",
    headline: "Build Your Club Empire",
    accent: "#ff4f78",
    bg: "rgba(38,8,20,0.95)",
    badgeBg: "#5a0a23",
    borderTop: "#ff4f78",
    features: [
      "Multi-tenant club & academy setup",
      "Court management & dynamic pricing",
      "Membership tiers & auto-renewal billing",
      "Tournament lifecycle management",
      "Multi-location geographic support",
      "Annual planning & revenue forecasts",
    ],
  },
  {
    role: "Spectators",
    headline: "Follow Every Rally",
    accent: "#ffc842",
    bg: "rgba(35,30,5,0.95)",
    badgeBg: "#554505",
    borderTop: "#ffc842",
    features: [
      "Live match score updates",
      "Tournament brackets & results",
      "Player profiles & career stats",
      "Club activity & community feed",
      "Court & facility directory",
      "Push notifications for events",
    ],
  },
];

const QUICK_FEATURES = [
  { icon: "🎫", title: "Tournaments", description: "Auto bracket generation, seeding, live results" },
  { icon: "📅", title: "Booking System", description: "Real-time court availability, dynamic pricing" },
  { icon: "💬", title: "Live Chat", description: "WebSocket messaging, reactions, read receipts" },
  { icon: "💰", title: "Payments", description: "M-Pesa, PayPal & Stripe fully integrated" },
  { icon: "📊", title: "Analytics", description: "Performance trends, revenue dashboards" },
  { icon: "🏆", title: "Rankings", description: "ELO-style weekly rankings & challenge matches" },
  { icon: "👥", title: "Community", description: "Activity feeds, directories & announcements" },
  { icon: "📱", title: "Multi-Platform", description: "Web + Flutter iOS/Android with offline mode" },
];

export default function Home() {
  return (
    <div
      style={{ backgroundColor: "#040a06", color: "#ffffff" }}
      className="min-h-screen font-sans"
    >
      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <nav
        style={{
          borderBottom: "1px solid #005028",
          backgroundColor: "rgba(4,10,6,0.85)",
          backdropFilter: "blur(12px)",
        }}
        className="sticky top-0 z-50"
      >
        <div className=" mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              style={{ background: "linear-gradient(135deg,#00e87a,#005028)", border: "1px solid #00e87a44" }}
              className="w-10 h-10 rounded-lg flex items-center justify-center"
            >
              <span className="text-white font-bold text-lg">🎾</span>
            </div>
            <span
              style={{ color: "#00e87a", letterSpacing: "6px", fontWeight: 800 }}
              className="text-2xl tracking-widest"
            >
              VICO
            </span>
          </div>
          <SubscribeButton />
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="w-full relative overflow-hidden">
        {/* Court line texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                105deg,
                transparent,
                transparent 298px,
                rgba(0,200,80,0.04) 298px,
                rgba(0,200,80,0.04) 300px
              ),
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 128px,
                rgba(0,200,80,0.03) 128px,
                rgba(0,200,80,0.03) 130px
              )
            `,
          }}
        />
        {/* Glow blob */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 30%, rgba(0,232,122,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative  mx-auto px-4 pt-16 pb-20 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24 text-center sm:px-6 lg:px-8">
          {/* Chip */}
          <div
            style={{
              display: "inline-block",
              border: "1px solid #00e87a44",
              background: "#001a0d",
              color: "#00e87a",
              letterSpacing: "4px",
              fontSize: "11px",
              fontFamily: "monospace",
              padding: "7px 22px",
              borderRadius: "2px",
              marginBottom: "32px",
            }}
          >
            THE TENNIS ECOSYSTEM · LAUNCHING APRIL 17, 2026
          </div>

          {/* VICO logotype */}
          <h1
            style={{
              fontWeight: 900,
              letterSpacing: "16px",
              lineHeight: 0.9,
              background: "linear-gradient(160deg,#ffffff 0%,#a0ffd0 40%,#00e87a 70%,#004020 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "8px",
            }}
            className="text-[clamp(90px,18vw,160px)] select-none"
          >
            VICO
          </h1>
          {/* Underline sweep */}
          <div className="flex justify-center gap-2 mb-8">
            <div style={{ height: "4px", width: "260px", background: "#00e87a", borderRadius: "1px" }} />
            <div style={{ height: "4px", width: "80px", background: "#00a054", borderRadius: "1px" }} />
          </div>

          {/* Tagline */}
          <p
            style={{ letterSpacing: "5px", fontWeight: 800, color: "#00e87a" }}
            className="text-[clamp(18px,3.5vw,36px)] mb-3"
          >
            THE REAL DEAL IS COMING
          </p>
          <p
            style={{ color: "#64a078", letterSpacing: "2px" }}
            className="text-sm sm:text-base mb-10"
          >
            Complete Tennis Platform · Players · Coaches · Officials · Organizations
          </p>

          {/* Date pill */}
          <div className="flex justify-center mb-12">
            <div
              style={{
                background: "#00e87a",
                color: "#040a06",
                fontWeight: 900,
                letterSpacing: "6px",
                padding: "12px 48px",
                borderRadius: "2px",
                fontSize: "clamp(16px,3vw,28px)",
              }}
            >
              APRIL 17 · 2026
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              height: "1px",
              background: "linear-gradient(90deg,transparent,#00e87a55,#00e87a,#00e87a55,transparent)",
              marginBottom: "0",
            }}
          />
        </div>

        {/* Countdown */}
        <div className="relative max-w-2xl mx-auto px-4 pb-20 sm:px-6">
          <Countdown />
        </div>
      </section>

      {/* ── Audience Cards ───────────────────────────────────────────────── */}
      <section
        style={{ background: "#040a06", borderTop: "1px solid #005028" }}
        className="w-full py-16 sm:py-24"
      >
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div
            style={{
              fontFamily: "monospace",
              color: "#00e87a",
              letterSpacing: "4px",
              fontSize: "11px",
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            BUILT FOR EVERY ROLE ON THE COURT
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6"
          >
            {AUDIENCE_CARDS.map((card) => (
              <div
                key={card.role}
                style={{
                  background: card.bg,
                  borderTop: `3px solid ${card.borderTop}`,
                  padding: "32px 32px 28px",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "8px",
                }}
              >
                {/* Diagonal burst */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 0,
                    height: 0,
                    borderStyle: "solid",
                    borderWidth: "0 80px 80px 0",
                    borderColor: `transparent ${card.accent}18 transparent transparent`,
                  }}
                />

                {/* Badge */}
                <div
                  style={{
                    display: "inline-block",
                    background: card.badgeBg,
                    color: card.accent,
                    fontFamily: "monospace",
                    fontSize: "10px",
                    letterSpacing: "3px",
                    padding: "4px 14px",
                    borderRadius: "2px",
                    marginBottom: "14px",
                    fontWeight: 700,
                  }}
                >
                  {card.role.toUpperCase()}
                </div>

                {/* Headline */}
                <h3
                  style={{ fontWeight: 900, letterSpacing: "1px", lineHeight: 1.1, color: "#ffffff", marginBottom: "16px" }}
                  className="text-3xl sm:text-4xl"
                >
                  {card.headline}
                </h3>

                {/* Accent divider */}
                <div className="flex gap-2 mb-5">
                  <div style={{ height: "3px", width: "80px", background: card.accent, borderRadius: "1px" }} />
                  <div style={{ height: "3px", width: "28px", background: card.accent, opacity: 0.4, borderRadius: "1px" }} />
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {card.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <span style={{ color: card.accent, fontWeight: 700, lineHeight: "1.6", flexShrink: 0 }}>·</span>
                      <span style={{ color: "#dcffe9", fontSize: "14px", lineHeight: "1.6" }}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Features ───────────────────────────────────────────────── */}
      <section style={{ background: "#020805", borderTop: "1px solid #00502822" }} className="w-full py-16 sm:py-24">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div
              style={{
                display: "inline-block",
                fontFamily: "monospace",
                fontSize: "11px",
                letterSpacing: "4px",
                color: "#00e87a",
                border: "1px solid #00e87a33",
                padding: "6px 18px",
                borderRadius: "2px",
                marginBottom: "20px",
              }}
            >
              WHAT&apos;S INSIDE
            </div>
            <h2
              style={{ fontWeight: 900, letterSpacing: "3px", color: "#ffffff" }}
              className="text-3xl sm:text-4xl"
            >
              Powerful Features for Everyone
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "#00401822" }}>
            {QUICK_FEATURES.map((f) => (
              <div
                key={f.title}
                style={{
                  background: "#040a06",
                  padding: "28px 20px",
                  borderLeft: "2px solid #00e87a18",
                  transition: "background 0.2s, border-color 0.2s",
                }}
                className="group hover:bg-[#081a0e] hover:border-l-[#00e87a]"
              >
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3
                  style={{ fontWeight: 800, color: "#00e87a", letterSpacing: "1px", marginBottom: "6px" }}
                  className="text-base"
                >
                  {f.title}
                </h3>
                <p style={{ color: "#64a078", fontSize: "13px", lineHeight: "1.5" }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ─────────────────────────────────────────────────── */}
      <section
        id="cta-section"
        style={{
          background: "linear-gradient(135deg,#001a0d 0%,#00391a 50%,#001a0d 100%)",
          borderTop: "1px solid #00e87a33",
          borderBottom: "1px solid #00e87a33",
        }}
        className="w-full py-16 sm:py-28"
      >
        <div className=" mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div
            style={{
              fontFamily: "monospace",
              fontSize: "11px",
              letterSpacing: "4px",
              color: "#00e87a",
              marginBottom: "20px",
            }}
          >
            DON&apos;T MISS THE DROP
          </div>
          <h2
            style={{ fontWeight: 900, letterSpacing: "2px", color: "#ffffff", marginBottom: "16px" }}
            className="text-3xl sm:text-5xl"
          >
            Ready to Transform Tennis?
          </h2>
          <p style={{ color: "#64a078", maxWidth: "520px", margin: "0 auto 36px" }} className="text-base sm:text-lg">
            Join thousands of players, coaches, and organizations using VICO to manage their tennis community.
          </p>
          <p style={{ color: "#00e87a", fontSize: "14px", fontWeight: 600, marginBottom: "20px" }}>
            Subscribing is free — No spam, no commitments.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center sm:items-stretch">
            <SubscribeModal />

          </div>
        </div>
      </section>


      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer
        style={{
          background: "#020805",
          borderTop: "1px solid #005028",
        }}
        className="w-full py-12 sm:py-16"
      >
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">🎾</span>
                <span
                  style={{ color: "#00e87a", fontWeight: 900, letterSpacing: "5px" }}
                  className="text-xl"
                >
                  VICO
                </span>
              </div>
              <p style={{ color: "#64a078", fontSize: "13px", lineHeight: "1.6" }}>
                The complete tennis community platform
              </p>
              <div
                style={{
                  marginTop: "12px",
                  fontFamily: "monospace",
                  fontSize: "9px",
                  letterSpacing: "2px",
                  color: "#005028",
                }}
              >
                NEXT.JS · FLUTTER · POSTGRESQL
              </div>
            </div>

            {[
              {
                heading: "Product",
                links: ["Features", "Pricing", "Security"],
              },
              {
                heading: "Company",
                links: ["About", "Blog", "Contact"],
              },
              {
                heading: "Legal",
                links: ["Privacy", "Terms", "Cookies"],
              },
            ].map((col) => (
              <div key={col.heading}>
                <h4
                  style={{
                    fontWeight: 800,
                    color: "#00e87a",
                    letterSpacing: "2px",
                    fontSize: "12px",
                    marginBottom: "14px",
                    fontFamily: "monospace",
                  }}
                >
                  {col.heading.toUpperCase()}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        style={{ color: "#64a078", fontSize: "13px", textDecoration: "none" }}
                        className="hover:text-[#00e87a] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer bottom bar — mirrors poster footer strip */}
          <div
            style={{
              borderTop: "1px solid #005028",
              paddingTop: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <span
              style={{
                color: "#00e87a",
                fontWeight: 900,
                letterSpacing: "4px",
                fontSize: "14px",
              }}
            >
              DON&apos;T MISS THE DROP
            </span>
            <span
              style={{
                color: "#005028",
                fontFamily: "monospace",
                fontSize: "10px",
                letterSpacing: "2px",
              }}
            >
              © 2026 VICO. All rights reserved. Launching April 17, 2026.
            </span>
            <span
              style={{
                color: "#ffffff",
                fontWeight: 900,
                letterSpacing: "4px",
                fontSize: "14px",
              }}
            >
              17 · 04 · 2026
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}