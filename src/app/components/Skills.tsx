import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

interface SkillsProps {
  darkMode: boolean;
}

const skillCategories = [
  {
    title: "Design pédagogique",
    icon: "target",
    accentLight: "#2563eb",
    accentDark: "#60a5fa",
    bgLight: "#eff6ff",
    bgDark: "#1e3a5f",
    skills: [
      { name: "Analyse des besoins", level: 92 },
      { name: "Scénarisation de formation", level: 90 },
      { name: "Alignement objectifs-évaluation", level: 88 },
      { name: "Storyboard pédagogique", level: 91 },
      { name: "Animation centrée apprenant", level: 86 },
    ],
  },
  {
    title: "Cadres & méthodes",
    icon: "brain",
    accentLight: "#7c3aed",
    accentDark: "#c4b5fd",
    bgLight: "#f5f3ff",
    bgDark: "#2e1065",
    skills: [
      { name: "ADDIE", level: 90 },
      { name: "Community of Inquiry (CoI)", level: 86 },
      { name: "Taxonomie de Bloom", level: 88 },
      { name: "Approche par compétences", level: 84 },
    ],
  },
  {
    title: "Outils e-learning",
    icon: "layers",
    accentLight: "#065f46",
    accentDark: "#6ee7b7",
    bgLight: "#ecfdf5",
    bgDark: "#064e3b",
    skills: [
      { name: "Moodle", level: 90 },
      { name: "Google Classroom", level: 88 },
      { name: "Notion", level: 92 },
      { name: "Capsules vidéo pédagogiques", level: 85 },
      { name: "Suivi des apprenants", level: 87 },
    ],
  },
  {
    title: "Production de contenus",
    icon: "pen",
    accentLight: "#92400e",
    accentDark: "#fcd34d",
    bgLight: "#fffbeb",
    bgDark: "#451a03",
    skills: [
      { name: "Rédaction pédagogique", level: 89 },
      { name: "Vulgarisation scientifique", level: 84 },
      { name: "Micro-learning", level: 83 },
      { name: "Supports interactifs", level: 86 },
      { name: "Évaluation formative", level: 87 },
    ],
  },
  {
    title: "Compétences transversales",
    icon: "users",
    accentLight: "#be123c",
    accentDark: "#fda4af",
    bgLight: "#fff1f2",
    bgDark: "#4c0519",
    skills: [
      { name: "Gestion de projet", level: 86 },
      { name: "Communication", level: 90 },
      { name: "Conduite du changement", level: 82 },
    ],
  },
];

const techTags = [
  "Moodle", "Google Classroom", "Notion", "Canva", "Google Workspace",
  "Scénarisation", "ADDIE", "CoI", "Bloom", "Micro-learning",
  "Capsule vidéo", "Quiz interactifs", "Suivi apprenants", "FAD", "E-learning",
  "Conception blended", "Pédagogie active", "Ingénierie de formation",
];

function IconSVG({ name, size = 16 }: { name: string; size?: number }) {
  const s = { width: size, height: size, stroke: "currentColor", strokeWidth: 2, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "target") return <svg {...s} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;
  if (name === "brain") return <svg {...s} viewBox="0 0 24 24"><path d="M9.5 2a2.5 2.5 0 0 1 5 0" /><path d="M14.5 2a2.5 2.5 0 0 1 2.5 2.5v1a2 2 0 0 1 0 4v1a2.5 2.5 0 0 1-5 0V2.5" /><path d="M9.5 2A2.5 2.5 0 0 0 7 4.5v1a2 2 0 0 0 0 4v1a2.5 2.5 0 0 0 5 0" /></svg>;
  if (name === "layers") return <svg {...s} viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>;
  if (name === "pen") return <svg {...s} viewBox="0 0 24 24"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>;
  if (name === "users") return <svg {...s} viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
  if (name === "tag") return <svg {...s} viewBox="0 0 24 24"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>;
  return null;
}

function SkillBar({
  name, level, accentLight, accentDark, darkMode,
}: { name: string; level: number; accentLight: string; accentDark: string; darkMode: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const accent = darkMode ? accentDark : accentLight;

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span
          className="text-sm font-medium"
          style={{
            color: darkMode ? "#cbd5e1" : "#374151",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {name}
        </span>
        <span
          className="text-xs tabular-nums font-semibold"
          style={{ color: accent, fontFamily: "'DM Sans', sans-serif" }}
        >
          {level}%
        </span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)" }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: accent, opacity: 0.85 }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        />
      </div>
    </div>
  );
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Skills({ darkMode }: SkillsProps) {
  const dk = darkMode;

  return (
    <section
      id="skills"
      className="relative py-32 overflow-hidden"
      style={{
        background: dk ? "#0d1117" : "#f8f7f4",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,700&display=swap');`}</style>

      {/* Background geometry — same as Hero & About */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: dk
            ? "radial-gradient(ellipse 50% 40% at 90% 10%, rgba(59,130,246,0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 30% at 5% 90%, rgba(16,185,129,0.04) 0%, transparent 70%)"
            : "radial-gradient(ellipse 50% 40% at 90% 10%, rgba(59,130,246,0.07) 0%, transparent 70%), radial-gradient(ellipse 40% 30% at 5% 90%, rgba(16,185,129,0.05) 0%, transparent 70%)",
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
              Compétences
            </p>
            <h2
              style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                color: dk ? "#f1f5f9" : "#0f172a",
                marginBottom: "1rem",
              }}
            >
              Compétences clés du profil
            </h2>
            <div
              className="h-px w-24"
              style={{
                background: dk
                  ? "linear-gradient(90deg, #3b82f6, transparent)"
                  : "linear-gradient(90deg, #2563eb, transparent)",
              }}
            />
          </div>
        </FadeIn>

        {/* ── Skill cards grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="relative p-6 rounded-2xl border"
              style={{
                background: dk ? "rgba(255,255,255,0.025)" : "#ffffff",
                borderColor: dk ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)",
              }}
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full"
                style={{
                  background: dk ? cat.accentDark : cat.accentLight,
                  opacity: 0.65,
                }}
              />

              <div className="pl-4">
                {/* Card header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: dk ? cat.bgDark : cat.bgLight,
                      color: dk ? cat.accentDark : cat.accentLight,
                    }}
                  >
                    <IconSVG name={cat.icon} size={16} />
                  </div>
                  <h3
                    className="font-semibold leading-tight"
                    style={{
                      color: dk ? "#f1f5f9" : "#0f172a",
                      fontSize: "0.95rem",
                    }}
                  >
                    {cat.title}
                  </h3>
                </div>

                {/* Skill bars */}
                {cat.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    accentLight={cat.accentLight}
                    accentDark={cat.accentDark}
                    darkMode={dk}
                  />
                ))}
              </div>
            </motion.div>
          ))}

          {/* ── Tech tags card ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="relative p-6 rounded-2xl border"
            style={{
              background: dk ? "rgba(255,255,255,0.025)" : "#ffffff",
              borderColor: dk ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)",
            }}
          >
            {/* Left accent bar — gray/neutral */}
            <div
              className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full"
              style={{
                background: dk ? "#475569" : "#94a3b8",
                opacity: 0.5,
              }}
            />

            <div className="pl-4">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: dk ? "rgba(255,255,255,0.06)" : "#f1f5f9",
                    color: dk ? "#94a3b8" : "#64748b",
                  }}
                >
                  <IconSVG name="tag" size={15} />
                </div>
                <h3
                  className="font-semibold"
                  style={{ color: dk ? "#f1f5f9" : "#0f172a", fontSize: "0.95rem" }}
                >
                  Outils & environnements
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {techTags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.15 }}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium cursor-default"
                    style={{
                      background: dk ? "rgba(255,255,255,0.05)" : "#f8fafc",
                      border: `1px solid ${dk ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)"}`,
                      color: dk ? "#94a3b8" : "#64748b",
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom quote — mirrors About section signature ── */}
        <FadeIn delay={0.3}>
          <blockquote
            className="mt-12 pl-5 border-l-2 italic text-base leading-relaxed max-w-xl"
            style={{
              fontFamily: "'Lora', Georgia, serif",
              borderColor: dk ? "#334155" : "#e2e8f0",
              color: dk ? "#475569" : "#94a3b8",
            }}
          >
            « La compétence n'est pas ce que l'on sait, mais ce que l'on sait faire avec ce que l'on sait. »
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}