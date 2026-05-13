import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Mail, ChevronDown, Play } from "lucide-react";
import type { Language } from "../i18n/translations";
import { useState, useRef, useCallback } from "react";
import heroVideo from "@/assets/HEROOOO.mp4";
import heroPoster from "@/assets/hero-thumb.jpg";

interface HeroProps {
  darkMode: boolean;
  lang: Language;
}

export function Hero({ darkMode, lang }: HeroProps) {
  const { scrollY } = useScroll();
  const opacityParallax = useTransform(scrollY, [0, 400], [1, 0]);

  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoState, setVideoState] = useState<"idle" | "loading" | "playing">("idle");

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const loadAndPlay = useCallback(() => {
    const video = videoRef.current;
    if (!video || videoState === "playing") return;

    setVideoState("loading");
    video.src = heroVideo;
    video.load();
    video
      .play()
      .then(() => setVideoState("playing"))
      .catch(() => setVideoState("idle"));
  }, [videoState]);

  const dk = darkMode;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: dk ? "#0d1117" : "#f8f7f4",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,300&display=swap');

        @keyframes float-hero {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .float-photo { animation: float-hero 7s ease-in-out infinite; }

        @keyframes ping-dot {
          0% { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        .ping-dot { animation: ping-dot 1.8s ease-out infinite; }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .spinner { animation: spin 0.9s linear infinite; }
      `}</style>

      {/* Moroccan tricolor top bar */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, #dc2626 0%, #dc2626 33%, #2563eb 33%, #2563eb 66%, #16a34a 66%, #16a34a 100%)",
        }}
      />

      {/* Background geometry */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: dk
            ? "radial-gradient(ellipse 55% 45% at 75% 25%, rgba(59,130,246,0.07) 0%, transparent 70%), radial-gradient(ellipse 40% 35% at 15% 75%, rgba(16,185,129,0.05) 0%, transparent 70%)"
            : "radial-gradient(ellipse 55% 45% at 75% 25%, rgba(59,130,246,0.08) 0%, transparent 70%), radial-gradient(ellipse 40% 35% at 15% 75%, rgba(16,185,129,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: dk
            ? "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)"
            : "radial-gradient(circle, rgba(0,0,0,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <motion.div
        style={{ opacity: opacityParallax }}
        className="relative w-full max-w-6xl mx-auto px-6 lg:px-10 py-28"
      >
        <div className="grid lg:grid-cols-[1fr_650px] gap-14 xl:gap-20 items-center">

          {/* ── LEFT ── */}
          <div className="order-2 lg:order-1">

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-10"
            >
              <div
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: dk ? "rgba(37,99,235,0.1)" : "rgba(37,99,235,0.07)",
                  border: `1px solid ${dk ? "rgba(59,130,246,0.22)" : "rgba(37,99,235,0.16)"}`,
                  color: dk ? "#93c5fd" : "#1d4ed8",
                }}
              >
                <span className="relative flex items-center justify-center w-2 h-2">
                  <span
                    className="ping-dot absolute inline-flex w-full h-full rounded-full"
                    style={{ background: "#22c55e" }}
                  />
                  <span
                    className="relative inline-flex w-2 h-2 rounded-full"
                    style={{ background: "#22c55e" }}
                  />
                </span>
                Disponible pour missions
              </div>

              <div
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium"
                style={{
                  background: dk ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
                  border: `1px solid ${dk ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
                  color: dk ? "#64748b" : "#94a3b8",
                }}
              >
                <svg
                  width="11" height="11" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Maroc
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: "clamp(3rem, 5.5vw, 4.8rem)",
                fontWeight: 700,
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                color: dk ? "#f1f5f9" : "#0f172a",
                marginBottom: "0.35em",
              }}
            >
              Amine{" "}
              <span style={{ color: dk ? "#60a5fa" : "#2563eb" }}>Jabbour</span>
            </motion.h1>

            {/* Role line */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-7"
            >
              <div
                className="h-px w-10"
                style={{
                  background: dk
                    ? "linear-gradient(90deg, #3b82f6, transparent)"
                    : "linear-gradient(90deg, #2563eb, transparent)",
                }}
              />
              <p
                className="text-sm font-semibold uppercase tracking-[0.18em]"
                style={{ color: dk ? "#60a5fa" : "#2563eb" }}
              >
                Ingénieur pédagogique
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg leading-[1.85] mb-10 max-w-[500px]"
              style={{
                color: dk ? "#94a3b8" : "#475569",
                fontFamily: "'Lora', Georgia, serif",
                fontWeight: 400,
              }}
            >
              Je conçois des expériences d'apprentissage engageantes, en combinant{" "}
              <em style={{ color: dk ? "#c7d2fe" : "#3730a3", fontStyle: "italic" }}>
                design pédagogique
              </em>
              ,{" "}
              <em style={{ color: dk ? "#c7d2fe" : "#3730a3", fontStyle: "italic" }}>
                outils e-learning
              </em>{" "}
              et théories de l'apprentissage.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleScroll("#projects")}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold text-white"
                style={{
                  background: "#2563eb",
                  boxShadow: dk
                    ? "0 4px 24px rgba(37,99,235,0.35)"
                    : "0 4px 20px rgba(37,99,235,0.28)",
                }}
              >
                Voir les projets
                <ArrowRight size={15} />
              </motion.button>

              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleScroll("#contact")}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-medium"
                style={{
                  background: dk ? "rgba(255,255,255,0.05)" : "#ffffff",
                  border: `1px solid ${dk ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
                  color: dk ? "#e2e8f0" : "#334155",
                  boxShadow: dk ? "none" : "0 2px 10px rgba(0,0,0,0.06)",
                }}
              >
                <Mail size={15} />
                Me contacter
              </motion.button>
            </motion.div>

            {/* Stats row (preserved) */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-8"
            />
          </div>

          {/* ── RIGHT — Video Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 32, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="float-photo relative w-full max-w-[650px] aspect-[16/10]">

              {/* Outer card frame */}
              <div
                className="absolute inset-0 rounded-[2.5rem]"
                style={{
                  background: dk ? "rgba(255,255,255,0.02)" : "#ffffff",
                  border: `1px solid ${dk ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)"}`,
                  boxShadow: dk
                    ? "0 24px 64px rgba(0,0,0,0.5)"
                    : "0 24px 64px rgba(37,99,235,0.09)",
                }}
              />

              {/* Blue accent bar */}
              <div
                className="absolute top-8 left-0 w-0.5 rounded-full"
                style={{ height: 60, background: dk ? "#60a5fa" : "#2563eb", opacity: 0.6 }}
              />

              {/* Media layer */}
              <div className="absolute inset-4 rounded-[2rem] overflow-hidden">

                {/* Poster — always rendered, fades out when video plays */}
                <img
                  src={heroPoster}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    zIndex: 1,
                    opacity: videoState === "playing" ? 0 : 1,
                    transition: "opacity 0.5s ease",
                  }}
                />

                {/* Video — no src until user clicks */}
                <video
                  ref={videoRef}
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    zIndex: 2,
                    opacity: videoState === "playing" ? 1 : 0,
                    transition: "opacity 0.5s ease",
                  }}
                />

                {/* Play button — idle only */}
                {videoState === "idle" && (
                  <button
                    onClick={loadAndPlay}
                    aria-label="Lancer la vidéo"
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ zIndex: 3, background: "transparent", border: "none", cursor: "pointer" }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center w-14 h-14 rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.18)",
                        backdropFilter: "blur(8px)",
                        border: "1.5px solid rgba(255,255,255,0.35)",
                        boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
                      }}
                    >
                      <Play size={22} fill="white" color="white" style={{ marginLeft: 3 }} />
                    </motion.div>
                  </button>
                )}

                {/* Loading spinner — loading only */}
                {videoState === "loading" && (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ zIndex: 3 }}
                  >
                    <svg
                      className="spinner"
                      width="36" height="36" viewBox="0 0 24 24"
                      fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"
                    >
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                  </div>
                )}

                {/* Gradient overlay */}
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    zIndex: 4,
                    background: dk
                      ? "linear-gradient(to top, rgba(13,17,23,0.45) 0%, transparent 55%)"
                      : "linear-gradient(to top, rgba(15,23,42,0.12) 0%, transparent 55%)",
                  }}
                />
              </div>

              {/* Dot pattern accent */}
              <div
                aria-hidden
                className="absolute -bottom-6 -right-6 w-20 h-20 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle, ${
                    dk ? "rgba(96,165,250,0.25)" : "rgba(37,99,235,0.2)"
                  } 1.5px, transparent 1.5px)`,
                  backgroundSize: "10px 10px",
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => handleScroll("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        style={{ color: dk ? "#475569" : "#94a3b8", fontFamily: "'DM Sans', sans-serif" }}
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <ChevronDown size={15} />
      </motion.button>
    </section>
  );
}