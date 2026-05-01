import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

interface ExperienceProps {
  darkMode: boolean;
}

const experiences = [
  {
    company: "Projet e-learning collaboratif",
    role: "Concepteur pédagogique",
    period: "Projet académique",
    type: "Conception pédagogique",
    accentLight: "#2563eb",
    accentDark: "#60a5fa",
    bgLight: "#eff6ff",
    bgDark: "#1e3a5f",
    iconPath: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    bullets: [
      "Défini les objectifs pédagogiques et la progression des apprentissages",
      "Conçu les activités d'engagement et d'auto-évaluation",
      "Structuré les contenus en modules asynchrones",
      "Mesuré l'impact via indicateurs de complétion et feedbacks",
    ],
    tags: ["ADDIE", "CoI", "FAD", "Scénarisation", "Évaluation"],
  },
  {
    company: "Parcours Serious Game VR",
    role: "Ingénierie pédagogique immersive",
    period: "Projet applicatif",
    type: "Simulation pédagogique",
    accentLight: "#7c3aed",
    accentDark: "#c4b5fd",
    bgLight: "#f5f3ff",
    bgDark: "#2e1065",
    iconPath: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
    bullets: [
      "Traduit les objectifs de formation en scénarios immersifs",
      "Collaboré à la conception de cas d'usage simulés",
      "Aligné interactions et critères d'évaluation des compétences",
      "Optimisé la clarté pédagogique des séquences en VR",
    ],
    tags: ["Serious game", "Unity", "Scénarisation", "Compétences", "UX pédagogique"],
  },
  {
    company: "Cours sur Moodle — Essarghini.tech",
    role: "Concepteur & administrateur LMS",
    period: "Projet professionnel",
    type: "LMS",
    accentLight: "#0e7490",
    accentDark: "#67e8f9",
    bgLight: "#ecfeff",
    bgDark: "#164e63",
    iconPath: "M4 6h16M4 10h16M4 14h16M4 18h16",
    bullets: [
      "Structuré un cours complet en modules et séquences",
      "Paramétré activités, devoirs, quiz et suivi des progrès",
      "Mis en place une progression pédagogique claire et motivante",
      "Produit des ressources explicatives et consignes opérationnelles",
    ],
    tags: ["Moodle", "LMS", "Quiz", "Progression", "Suivi apprenants"],
  },
  {
    company: "Google Classroom",
    role: "Organisation de cours à distance",
    period: "Projet pédagogique",
    type: "Classe virtuelle",
    accentLight: "#065f46",
    accentDark: "#6ee7b7",
    bgLight: "#ecfdf5",
    bgDark: "#064e3b",
    iconPath: "M15 10l4.553-2.069A1 1 0 0 1 21 8.82v6.36a1 1 0 0 1-1.447.894L15 14M3 8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z",
    bullets: [
      "Organisé un espace de cours structuré par thèmes",
      "Déployé des activités synchrones et asynchrones",
      "Amélioré la communication enseignant-apprenant",
      "Soutenu la régularité de participation et de remise",
    ],
    tags: ["Google Classroom", "Classe inversée", "Communication", "Engagement"],
  },
  {
    company: "Production vidéo pédagogique",
    role: "Concepteur de capsules",
    period: "Projet multimédia",
    type: "Capsules vidéo",
    accentLight: "#92400e",
    accentDark: "#fcd34d",
    bgLight: "#fffbeb",
    bgDark: "#451a03",
    iconPath: "M15 10l4.553-2.069A1 1 0 0 1 21 8.82v6.36a1 1 0 0 1-1.447.894L15 14M5 8h.01M3 8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z",
    bullets: [
      "Conçu des capsules sur l'ergonomie du travail et la loi de Coulomb",
      "Scénarisé le rythme, les exemples et la narration",
      "Optimisé la clarté du message pour l'apprentissage autonome",
    ],
    tags: ["Storyboard", "Vulgarisation", "Vidéo", "Pédagogie active"],
  },
  {
    company: "Leçon d'introduction à l'IA",
    role: "Concepteur de séquence",
    period: "Projet académique",
    type: "Leçon structurée",
    accentLight: "#be123c",
    accentDark: "#fda4af",
    bgLight: "#fff1f2",
    bgDark: "#4c0519",
    iconPath: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    bullets: [
      "Conçu une leçon progressive adaptée à un public débutant",
      "Défini activités d'entrée, mise en pratique et synthèse",
      "Intégré des évaluations formatives pour valider les acquis",
    ],
    tags: ["Objectifs pédagogiques", "Bloom", "Évaluation formative", "IA"],
  },
];

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

export function Experience({ darkMode }: ExperienceProps) {
  const dk = darkMode;

  return (
    <section
      id="experience"
      className="relative py-32 overflow-hidden"
      style={{
        background: dk ? "#0d1117" : "#f8f7f4",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,700&display=swap');`}</style>

      {/* Background geometry */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: dk
            ? "radial-gradient(ellipse 55% 40% at 85% 15%, rgba(59,130,246,0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 30% at 10% 85%, rgba(124,58,237,0.05) 0%, transparent 70%)"
            : "radial-gradient(ellipse 55% 40% at 85% 15%, rgba(59,130,246,0.07) 0%, transparent 70%), radial-gradient(ellipse 40% 30% at 10% 85%, rgba(124,58,237,0.05) 0%, transparent 70%)",
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

      <div className="max-w-4xl mx-auto px-6 relative">

        {/* ── Header ── */}
        <FadeIn>
          <div className="mb-20">
            <p
              className="text-sm font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: dk ? "#60a5fa" : "#2563eb" }}
            >
              Parcours
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
              Expériences pédagogiques
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

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Vertical spine */}
          <div
            className="absolute left-[19px] top-2 bottom-2 w-px"
            style={{
              background: dk
                ? "linear-gradient(to bottom, transparent, rgba(255,255,255,0.08) 10%, rgba(255,255,255,0.08) 90%, transparent)"
                : "linear-gradient(to bottom, transparent, rgba(0,0,0,0.08) 10%, rgba(0,0,0,0.08) 90%, transparent)",
            }}
          />

          <div className="space-y-7">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${i}`}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex gap-6 pl-12"
              >
                {/* Timeline node */}
                <div
                  className="absolute left-0 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: dk ? exp.bgDark : exp.bgLight,
                    border: `1px solid ${dk ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)"}`,
                    color: dk ? exp.accentDark : exp.accentLight,
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={exp.iconPath} />
                  </svg>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  className="relative flex-1 p-6 rounded-2xl border"
                  style={{
                    background: dk ? "rgba(255,255,255,0.025)" : "#ffffff",
                    borderColor: dk ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)",
                  }}
                >
                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-5 bottom-5 w-0.5 rounded-full"
                    style={{
                      background: dk ? exp.accentDark : exp.accentLight,
                      opacity: 0.6,
                    }}
                  />

                  <div className="pl-4">
                    {/* Card header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                      <div>
                        <h3
                          className="font-semibold text-base leading-snug mb-0.5"
                          style={{ color: dk ? "#f1f5f9" : "#0f172a" }}
                        >
                          {exp.role}
                        </h3>
                        <p
                          className="text-sm font-medium"
                          style={{ color: dk ? exp.accentDark : exp.accentLight }}
                        >
                          {exp.company}
                        </p>
                        {exp.period && (
                          <p
                            className="text-xs mt-0.5"
                            style={{ color: dk ? "#475569" : "#94a3b8" }}
                          >
                            {exp.period}
                          </p>
                        )}
                      </div>

                      {/* Type badge */}
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0"
                        style={{
                          background: dk ? exp.bgDark : exp.bgLight,
                          color: dk ? exp.accentDark : exp.accentLight,
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>

                    {/* Bullets */}
                    <ul className="mt-4 space-y-2">
                      {exp.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2.5 text-sm leading-relaxed"
                          style={{ color: dk ? "#94a3b8" : "#64748b" }}
                        >
                          <span
                            className="mt-[7px] w-1 h-1 rounded-full flex-shrink-0"
                            style={{
                              background: dk ? exp.accentDark : exp.accentLight,
                              opacity: 0.7,
                            }}
                          />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium"
                          style={{
                            background: dk ? "rgba(255,255,255,0.04)" : "#f8fafc",
                            border: `1px solid ${dk ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"}`,
                            color: dk ? "#64748b" : "#94a3b8",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom quote */}
        <FadeIn delay={0.3}>
          <blockquote
            className="mt-16 pl-5 border-l-2 italic text-base leading-relaxed max-w-xl"
            style={{
              fontFamily: "'Lora', Georgia, serif",
              borderColor: dk ? "#334155" : "#e2e8f0",
              color: dk ? "#475569" : "#94a3b8",
            }}
          >
            « Chaque projet est une occasion de transformer une intention de formation en expérience d'apprentissage réelle. »
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}