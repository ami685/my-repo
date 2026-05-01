import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

interface AboutProps {
  darkMode: boolean;
}

const education = [
  {
    degree: "Master",
    field: "Ingénierie Techno-Pédagogique et Innovation",
    school: "Faculté des Sciences de l'Éducation",
    year: "Bac+5",
    accentLight: "#2563eb",
    accentDark: "#60a5fa",
    bgLight: "#eff6ff",
    bgDark: "#1e3a5f",
    iconPath: "M22 10v6M2 10l10-5 10 5-10 5z M6 12v5c3 3 9 3 12 0v-5",
  },
  {
    degree: "Licence",
    field: "Licence d’éducation en informatique",
    school: "École normale supérieure Marrakech",
    year: "Bac+3",
    accentLight: "#065f46",
    accentDark: "#6ee7b7",
    bgLight: "#ecfdf5",
    bgDark: "#064e3b",
    iconPath: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z",
  },
  
];

const infoItems = [
  {
    label: "Localisation",
    value: "Maroc 🇲🇦",
    iconPath: "M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  },
  {
    label: "Spécialité",
    value: "Ingénierie pédagogique & e-learning",
    iconPath: "M22 10v6M2 10l10-5 10 5-10 5z M6 12v5c3 3 9 3 12 0v-5",
  },
  {
    label: "Langues",
    value: "Français · Arabe · Anglais",
    iconPath: "M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
  },
];

const stats = [
  { value: "5+", label: "ans d'expérience" },
  { value: "20+", label: "projets e-learning" },
  { value: "3", label: "langues maîtrisées" },
];

function FadeIn({
  children,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const initial =
    direction === "up"
      ? { opacity: 0, y: 32 }
      : direction === "left"
        ? { opacity: 0, x: -32 }
        : { opacity: 0, x: 32 };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function About({ darkMode }: AboutProps) {
  const dk = darkMode;

  return (
    <section
      id="about"
      className="relative py-32 overflow-hidden"
      style={{
        background: dk ? "#0d1117" : "#f8f7f4",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,700&display=swap');`}</style>

      {/* Background geometry — identical across all sections */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: dk
            ? "radial-gradient(ellipse 60% 40% at 80% 20%, rgba(59,130,246,0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 30% at 10% 80%, rgba(16,185,129,0.05) 0%, transparent 70%)"
            : "radial-gradient(ellipse 60% 40% at 80% 20%, rgba(59,130,246,0.07) 0%, transparent 70%), radial-gradient(ellipse 40% 30% at 10% 80%, rgba(16,185,129,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: dk
            ? "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)"
            : "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* ── Header ── */}
        <FadeIn>
          <div className="mb-20">
            <p
              className="text-sm font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: dk ? "#60a5fa" : "#2563eb" }}
            >
              Profil
            </p>
            <h2
              style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                color: dk ? "#f1f5f9" : "#0f172a",
                marginBottom: "0.5rem",
              }}
            >
              Ingénieur pédagogique{" "}
              <span style={{ color: dk ? "#60a5fa" : "#2563eb" }}>orienté impact</span>
            </h2>
            <div
              className="h-px w-24 mt-4"
              style={{
                background: dk
                  ? "linear-gradient(90deg, #3b82f6, transparent)"
                  : "linear-gradient(90deg, #2563eb, transparent)",
              }}
            />
          </div>
        </FadeIn>

        {/* ── Two-column grid — 3/5 · 2/5 ── */}
        <div className="grid lg:grid-cols-5 gap-14 items-start">

          {/* ── Left 3/5 ── */}
          <div className="lg:col-span-3 space-y-7">

            {/* Bio */}
            <FadeIn delay={0.1} direction="left">
              <div
                className="p-7 rounded-2xl border"
                style={{
                  background: dk ? "rgba(255,255,255,0.025)" : "#ffffff",
                  borderColor: dk ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)",
                }}
              >
                <p
                  className="text-lg leading-[1.85] mb-5"
                  style={{
                    color: dk ? "#94a3b8" : "#475569",
                    fontFamily: "'Lora', Georgia, serif",
                  }}
                >
                  Je suis{" "}
                  <strong style={{ color: dk ? "#f1f5f9" : "#0f172a", fontWeight: 700 }}>
                    Amine Jabbour, ingénieur pédagogique
                  </strong>
                  . J'accompagne la conception de dispositifs de formation centrés sur
                  l'apprenant, avec une approche structurée et mesurable.
                </p>
                <p
                  className="text-lg leading-[1.85]"
                  style={{
                    color: dk ? "#94a3b8" : "#475569",
                    fontFamily: "'Lora', Georgia, serif",
                  }}
                >
                  Mon travail relie{" "}
                  <em style={{ color: dk ? "#c7d2fe" : "#3730a3" }}>scénarisation pédagogique</em>
                  ,{" "}
                  <em style={{ color: dk ? "#c7d2fe" : "#3730a3" }}>technologies éducatives</em>{" "}
                  et théories d'apprentissage pour créer des parcours efficaces,
                  motivants et transférables.
                </p>
              </div>
            </FadeIn>

            {/* Info cards */}
            <FadeIn delay={0.18} direction="left">
              <div className="grid sm:grid-cols-3 gap-3">
                {infoItems.map((item) => (
                  <div
                    key={item.label}
                    className="p-4 rounded-2xl border"
                    style={{
                      background: dk ? "rgba(255,255,255,0.025)" : "#ffffff",
                      borderColor: dk ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)",
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                      style={{
                        background: dk ? "rgba(59,130,246,0.12)" : "#eff6ff",
                        color: dk ? "#60a5fa" : "#2563eb",
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d={item.iconPath} />
                      </svg>
                    </div>
                    <div
                      className="text-xs font-semibold uppercase tracking-widest mb-1"
                      style={{ color: dk ? "#475569" : "#94a3b8" }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-sm font-medium leading-snug"
                      style={{ color: dk ? "#e2e8f0" : "#1e293b" }}
                    >
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={0.26} direction="left">
              <div className="flex gap-10 pl-1">
                {stats.map((s, i) => (
                  <div key={i} className="flex items-center gap-10">
                    <div>
                      <div
                        className="text-3xl font-bold tabular-nums"
                        style={{
                          color: dk ? "#60a5fa" : "#2563eb",
                          letterSpacing: "-0.03em",
                        }}
                      >
                        {s.value}
                      </div>
                      <div
                        className="text-xs mt-0.5"
                        style={{ color: dk ? "#64748b" : "#94a3b8" }}
                      >
                        {s.label}
                      </div>
                    </div>
                    {i < stats.length - 1 && (
                      <div
                        className="h-8 w-px"
                        style={{
                          background: dk ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* ── Right 2/5 — Education ── */}
          <div className="lg:col-span-2">
            <FadeIn delay={0.15} direction="right">
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em] mb-8"
                style={{ color: dk ? "#475569" : "#94a3b8" }}
              >
                Formation
              </p>

              <div className="relative">
                {/* Timeline spine */}
                <div
                  className="absolute left-[19px] top-2 bottom-2 w-px"
                  style={{
                    background: dk
                      ? "linear-gradient(to bottom, transparent, rgba(255,255,255,0.07) 15%, rgba(255,255,255,0.07) 85%, transparent)"
                      : "linear-gradient(to bottom, transparent, rgba(0,0,0,0.08) 15%, rgba(0,0,0,0.08) 85%, transparent)",
                  }}
                />

                <div className="space-y-5">
                  {education.map((edu, i) => (
                    <motion.div
                      key={edu.degree}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -2, transition: { duration: 0.2 } }}
                      className="relative flex gap-5 pl-12"
                    >
                      {/* Node */}
                      <div
                        className="absolute left-0 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: dk ? edu.bgDark : edu.bgLight,
                          border: `1px solid ${dk ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.06)"}`,
                          color: dk ? edu.accentDark : edu.accentLight,
                        }}
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d={edu.iconPath} />
                        </svg>
                      </div>

                      {/* Card */}
                      <div
                        className="relative flex-1 p-5 rounded-2xl border"
                        style={{
                          background: dk ? "rgba(255,255,255,0.025)" : "#ffffff",
                          borderColor: dk ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)",
                        }}
                      >
                        {/* Left accent bar */}
                        <div
                          className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full"
                          style={{
                            background: dk ? edu.accentDark : edu.accentLight,
                            opacity: 0.6,
                          }}
                        />
                        <div className="pl-4">
                          <div className="flex items-center justify-between mb-1.5">
                            <span
                              className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold"
                              style={{
                                background: dk ? edu.bgDark : edu.bgLight,
                                color: dk ? edu.accentDark : edu.accentLight,
                              }}
                            >
                              {edu.degree}
                            </span>
                            <span
                              className="text-xs font-mono"
                              style={{ color: dk ? "#475569" : "#94a3b8" }}
                            >
                              {edu.year}
                            </span>
                          </div>
                          <p
                            className="font-semibold text-sm leading-snug mb-1"
                            style={{ color: dk ? "#f1f5f9" : "#0f172a" }}
                          >
                            {edu.field}
                          </p>
                          <p
                            className="text-xs"
                            style={{ color: dk ? "#64748b" : "#94a3b8" }}
                          >
                            {edu.school}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Signature quote */}
              <blockquote
                className="mt-10 pl-5 border-l-2 italic text-base leading-relaxed"
                style={{
                  fontFamily: "'Lora', Georgia, serif",
                  borderColor: dk ? "#334155" : "#e2e8f0",
                  color: dk ? "#475569" : "#94a3b8",
                }}
              >
                « Apprendre, c'est transformer une information externe en compétence interne durable. »
              </blockquote>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}