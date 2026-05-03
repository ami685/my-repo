import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code2,
  X,
  CheckCircle,
  Layers,
  Zap,
  Target,
  ChevronRight,
  Play,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectsProps {
  darkMode: boolean;
}

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  color: string;
  liveDemo: string;
  details: {
    overview: string;
    features: string[];
    architecture: string[];
    challenges: string[];
    outcome: string;
  };
}






const projects: Project[] = [
  {
    title: "01 — Module E-learning",
    description:
      "Module e-learning interactif conçu avec ADDIE et Bloom, incluant activités et évaluation intégrées.",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1080&q=80",
    tags: ["CoI", "ADDIE", "Bloom", "Terminé"],
    category: "Conception e-learning",
    color: "blue",
    liveDemo: "https://jumpshare.com/embed/R41toDQ5BXwDtmQtaiPd",
    details: {
      overview:
        "Module e-learning complet orienté apprentissage actif et autonomie. Organisation efficace du travail de groupe grâce à une répartition claire des rôles et une meilleure communication entre les membres.Méthodes simples pour maintenir la motivation, gérer le temps et assurer la réussite du projet collectif",
      features: [
        "Objectifs pédagogiques mesurables",
        "Scénarisation des séquences",
        "Activités interactives",
        "Évaluation formative",
      ],
      architecture: ["CoI", "ADDIE", "Bloom"],
      challenges: [
        "Engagement en asynchrone",
        "Cohérence objectifs-activités-évaluation",
      ],
      outcome: "Terminé",
    },
  },
  {
    title: "02 — Serious Game ",
    description: "Présentation d’un jeu de quiz mathématique innovant conçu pour stimuler les compétences des joueurs de manière interactive et ludique .",
    image:
      "https://69f610f3a0be0e562863fe85.imgix.net/gamification-concept-with-woman-controller.jpg?w=4222&h=3292&rect=0%2C0%2C4222%2C3292",
    tags: ["Kolb", "Simulation", "Terminé"],
    category: "Serious Game",
    color: "purple",
    liveDemo: "https://jumpshare.com/embed/Gwycb9W94yFEP36dVBfE",
    details: {
      overview:
        "Présentation d’un jeu de quiz mathématique innovant conçu pour stimuler les compétences des joueurs de manière interactive et ludique. Ce template se distingue par son design unique, son interface moderne et sa grande flexibilité de personnalisation, répondant parfaitement aux besoins des développeurs de jeux.",
      features: [
        "Mises en situation réalistes",
        "Feedback immédiat",
        "Débriefing guidé",
        "Progression par scénarios",
      ],
      architecture: ["Kolb", "Simulation"],
      challenges: ["Équilibre réalisme/clarté", "Charge cognitive"],
      outcome: "Terminé",
    },
  },
  {
    title: "03 — Capsule bande dessinée",
    description: "Résolution de conflit organisationnel à travers une bande dessinée animée.",
    image:
      "https://achetezdelart.com/wordpress/wp-content/uploads/bande-dessinee-2000x1200.jpg",
    tags: ["Storytelling", "Communication", "Gestion de conflit", "Terminé"],
    category: "Conception pédagogique",
    color: "green",

    liveDemo: "https://jumpshare.com/embed/OGMIYZ5RnNEcp54yh0gX",
    details: {
      overview:
       "Capsule vidéo sous forme de bande dessinée animée illustrant un partenariat entre deux entreprises confrontées à des conflits liés au stress et aux différences de méthodes de travail. Le projet propose une approche narrative pour analyser la situation et suggérer des solutions de communication et d’adaptation.",

    features: [
      "Narration visuelle en bande dessinée",
      "Animation vidéo engageante",
      "Mise en situation réaliste",
      "Approche pédagogique par storytelling",
    ],
        architecture: ["Storytelling", "Apprentissage situationnel", "Communication organisationnelle"],
      challenges: ["Traduire un problème complexe en scénario simple",
      "Maintenir l’engagement visuel",
      "Rendre le message pédagogique clair"],
      outcome: "Terminé",
    },
  },
  {
    title: "04 — Capsule Vidéo Interactive",
    description:
      "Capsule pédagogique autour de l'analyse ergonomique du travail.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1080&q=80",
    tags: ["Ergonomie", "Analyse du travail", "Activité", "Terminé"],
    category: "Analyse ergonomique",
    color: "orange",
    liveDemo: "https://jumpshare.com/embed/W2ANuD8njBsh6rpt0hrc",
    details: {
      overview:
        "Capsule interactive conçue pour expliciter les principes ergonomiques en contexte professionnel. Combine vidéo, diagrammes et activités pratiques.",
      features: [
        "Narration pédagogique",
        "Exemples de terrain",
        "Interactivité",
        "Synthèse opérationnelle",
      ],
      architecture: ["Ergonomie", "Analyse du travail", "Activité"],
      challenges: ["Simplification sans perte de sens", "Clarté visuelle"],
      outcome: "Terminé",
    },
  },
  {
    title: "05 — Protocole d'Accueil",
    description: "Conception d'un protocole professionnel pour réception et interview.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1080&q=80",
    tags: ["Gestion d'événement", "Production", "Service", "Terminé"],
    category: "Protocole professionnel",
    color: "blue",

    liveDemo: "https://jumpshare.com/embed/YsnOSbkZk0encaDVRxbO", 
    details: {
      overview:
        "Formalisation d'un protocole clair pour standardiser qualité d'accueil et fluidité opérationnelle.",
      features: [
        "Checklist opérationnelle",
        "Rôles et responsabilités",
        "Séquençage des actions",
        "Points de contrôle qualité",
      ],
      architecture: ["Gestion d'événement", "Production", "Service"],
      challenges: ["Coordination multi-acteurs", "Respect du timing"],
      outcome: "Terminé",
    },
  },
  {
    title: "06 — Cours Moodle",
    description: "Conception et structuration d'un cours complet sur Moodle.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1080&q=80",
    tags: ["CoI", "ADDIE", "Bloom", "Terminé"],
    category: "Conception e-learning",
    color: "purple",
    liveDemo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    details: {
      overview:
        "Parcours Moodle structuré par modules, activités et évaluations pour soutenir la progression de l'apprenant.",
      features: [
        "Structuration modulaire",
        "Quiz et devoirs",
        "Suivi des apprenants",
        "Ressources contextualisées",
      ],
      architecture: ["CoI", "ADDIE", "Bloom"],
      challenges: [
        "Paramétrage pédagogique LMS",
        "Cohérence des activités",
      ],
      outcome: "Terminé",
    },
  },
  {
    title: "07 — Cours Google Classroom",
    description: "Organisation et gestion d'un cours sur Google Classroom.",
    image:
      "https://69f610f3a0be0e562863fe85.imgix.net/yNbRqdBpDrCQMoP9NNfZ2d.jpg",
    tags: ["CoI", "ADDIE", "Bloom", "Terminé"],
    category: "Conception e-learning",
    color: "green",
liveDemo: "https://jumpshare.com/embed/vSYL2PzkmRI1xOFZf9wT",
 details: {
      overview:
        "Conception et mise en œuvre d’un cours structuré sur Google Classroom dans le cadre du module Analyse et Conception des Bases de Données (Master S2).Le cours propose une progression pédagogique complète allant de l’analyse du besoin jusqu’à l’implémentation SQL, avec activités interactives et suivi continu des apprenants.",
      features: [
        "Organisation par thèmes",
        "Gestion des travaux",
        "Communication enseignant-apprenant",
        "Favoriser l’apprentissage actif via TP et quiz",
      ],
      architecture: ["CoI", "ADDIE", "Bloom"],
      challenges: ["Rythme de publication", "Engagement durable"],
      outcome: "Terminé",
    },
  },
];

const colorMap: Record<
  string,
  {
    badge: string;
    badgeDark: string;
    tag: string;
    tagDark: string;
    gradient: string;
    accent: string;
    accentDark: string;
  }
> = {
  blue: {
    badge: "bg-blue-50 text-blue-600",
    badgeDark: "bg-blue-900/40 text-blue-400",
    tag: "bg-blue-50/80 text-blue-600",
    tagDark: "bg-blue-900/30 text-blue-400",
    gradient: "from-blue-600/80 to-blue-800/80",
    accent: "text-blue-600",
    accentDark: "text-blue-400",
  },
  purple: {
    badge: "bg-purple-50 text-purple-600",
    badgeDark: "bg-purple-900/40 text-purple-400",
    tag: "bg-purple-50/80 text-purple-600",
    tagDark: "bg-purple-900/30 text-purple-400",
    gradient: "from-purple-600/80 to-purple-900/80",
    accent: "text-purple-600",
    accentDark: "text-purple-400",
  },
  green: {
    badge: "bg-green-50 text-green-600",
    badgeDark: "bg-green-900/40 text-green-400",
    tag: "bg-green-50/80 text-green-600",
    tagDark: "bg-green-900/30 text-green-400",
    gradient: "from-green-600/80 to-green-900/80",
    accent: "text-green-600",
    accentDark: "text-green-400",
  },
  orange: {
    badge: "bg-orange-50 text-orange-600",
    badgeDark: "bg-orange-900/40 text-orange-400",
    tag: "bg-orange-50/80 text-orange-600",
    tagDark: "bg-orange-900/30 text-orange-400",
    gradient: "from-orange-500/80 to-orange-800/80",
    accent: "text-orange-600",
    accentDark: "text-orange-400",
  },
};

function ProjectModal({
  project,
  darkMode,
  onClose,
}: {
  project: Project;
  darkMode: boolean;
  onClose: () => void;
}) {
  const c = colorMap[project.color];
  const hasVideo = project.liveDemo && project.liveDemo.trim() !== "";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl ${
          darkMode ? "bg-gray-900 border border-gray-800" : "bg-white border border-gray-100"
        }`}
      >
        {/* Header image */}
        <div className="relative h-52 overflow-hidden rounded-t-3xl">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${c.gradient}`} />
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
                {project.category}
              </span>
            </div>
            <h2 className="text-white text-2xl font-bold leading-tight">
              {project.title}
            </h2>
          </div>
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  darkMode ? c.badgeDark : c.badge
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Overview Section */}
          <div>
            <div
              className={`flex items-center gap-2 mb-3 font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              <Target
                size={18}
                className={darkMode ? c.accentDark : c.accent}
              />
              Vue d'ensemble
            </div>
            <p
              className={`text-sm leading-relaxed ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {project.details.overview}
            </p>
          </div>

          {/* Video Demo Section - ONLY SHOWN IF VIDEO EXISTS */}
          {hasVideo && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`rounded-2xl overflow-hidden border-2 ${
                darkMode
                  ? "bg-gray-800/40 border-gray-700"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              {/* Video Section Header */}
              <div
                className={`flex items-center gap-2 px-5 py-4 border-b ${
                  darkMode ? "border-gray-700 bg-gray-800/60" : "border-gray-200 bg-gray-100/50"
                }`}
              >
                <Play
                  size={18}
                  className={`flex-shrink-0 ${darkMode ? c.accentDark : c.accent}`}
                />
                <h3
                  className={`font-bold text-sm ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Démonstration vidéo
                </h3>
              </div>

              {/* Video Player Container */}
              <div className="relative w-full bg-black">
                {/* Aspect Ratio Container (16:9) */}
                <div className="relative w-full pt-[56.25%]">
               {project.liveDemo.includes("jumpshare.com/embed") ? (
  <div >
    <iframe
      src={project.liveDemo}
      title={`${project.title} - Video Demo`}
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        border: 0,
      }}
    />
  </div>
) : (
  <iframe
    className="absolute top-0 left-0 w-full h-full border-0"
    src={project.liveDemo}
    title={`${project.title} - Video Demo`}
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
  />
)}
                </div>
              </div>
            </motion.div>
          )}

          {/* Features and Architecture Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Features */}
            <div>
              <div
                className={`flex items-center gap-2 mb-3 font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <Zap
                  size={18}
                  className={darkMode ? c.accentDark : c.accent}
                />
                Points clés
              </div>
              <ul className="space-y-2">
                {project.details.features.map((f, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-2 text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <CheckCircle
                      size={14}
                      className={`mt-0.5 flex-shrink-0 ${
                        darkMode ? c.accentDark : c.accent
                      }`}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture */}
            <div>
              <div
                className={`flex items-center gap-2 mb-3 font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <Layers
                  size={18}
                  className={darkMode ? c.accentDark : c.accent}
                />
                Démarche
              </div>
              <ul className="space-y-2">
                {project.details.architecture.map((a, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-2 text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <ChevronRight
                      size={14}
                      className={`mt-0.5 flex-shrink-0 ${
                        darkMode ? c.accentDark : c.accent
                      }`}
                    />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Challenges */}
          <div>
            <div
              className={`flex items-center gap-2 mb-3 font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              <Code2
                size={18}
                className={darkMode ? c.accentDark : c.accent}
              />
              Défis
            </div>
            <ul className="space-y-2">
              {project.details.challenges.map((ch, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-2 text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <span
                    className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      project.color === "blue"
                        ? "bg-blue-500"
                        : project.color === "purple"
                          ? "bg-purple-500"
                          : project.color === "green"
                            ? "bg-green-500"
                            : "bg-orange-500"
                    }`}
                  />
                  {ch}
                </li>
              ))}
            </ul>
          </div>

          {/* Outcome */}
          <div
            className={`p-4 rounded-2xl border ${
              darkMode
                ? "bg-gray-800/60 border-gray-700"
                : "bg-gray-50 border-gray-100"
            }`}
          >
            <p
              className={`text-xs font-bold uppercase tracking-wide mb-1 ${
                darkMode ? c.accentDark : c.accent
              }`}
            >
              Résultat
            </p>
            <p
              className={`text-sm leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {project.details.outcome}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects({ darkMode }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className={`py-28 ${darkMode ? "bg-gray-950" : "bg-gray-50/60"}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
              darkMode ? "bg-blue-900/40 text-blue-400" : "bg-blue-50 text-blue-600"
            }`}
          >
            Projets
          </span>
          <h2
            className={`text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Projets pédagogiques
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto mb-4" />
          <p
            className={`max-w-xl mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Dispositifs construits autour du design instructionnel, des LMS et
            de la pédagogie active.
            <span
              className={`block text-xs mt-1 ${
                darkMode ? "text-gray-600" : "text-gray-400"
              }`}
            >
              Cliquez sur un projet pour voir les détails
            </span>
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => {
            const c = colorMap[project.color];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(project)}
                className={`group rounded-2xl overflow-hidden border transition-all cursor-pointer ${
                  darkMode
                    ? "bg-gray-900 border-gray-800 hover:border-gray-700 hover:shadow-2xl hover:shadow-blue-950/40"
                    : "bg-white border-gray-100 hover:border-blue-100 hover:shadow-xl shadow-sm"
                }`}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${c.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}
                  >
                    <div className="text-white flex flex-col items-center gap-2">
                      <Code2 size={26} />
                      <span className="text-sm font-semibold">
                        View Details
                      </span>
                    </div>
                  </div>
                  {/* Category badge */}
                  <div
                    className={`absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-semibold backdrop-blur-sm ${
                      darkMode
                        ? "bg-gray-900/80 text-gray-200"
                        : "bg-white/90 text-gray-700"
                    }`}
                  >
{project.category}
                  </div>
                  {/* Click hint */}
                  <div
                    className={`absolute bottom-3 right-3 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ${
                      darkMode ? "bg-white/20" : "bg-white/80"
                    }`}
                  >
                    <ChevronRight
                      size={14}
                      className={darkMode ? "text-white" : "text-gray-700"}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3
                    className={`font-bold text-sm mb-2 leading-snug ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed mb-4 line-clamp-3 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-0.5 rounded-md text-xs font-medium ${
                          darkMode ? c.tagDark : c.tag
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span
                        className={`px-2 py-0.5 rounded-md text-xs font-medium ${
                          darkMode
                            ? "text-gray-500"
                            : "text-gray-400"
                        }`}
                      >
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            darkMode={darkMode}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}