import { motion } from "motion/react";
import { Building2, Clock, Medal, Target } from "lucide-react";

interface LeadershipVolunteeringProps {
  darkMode: boolean;
}

interface VolunteerRole {
  organization: string;
  role: string;
  duration: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  skills: string[];
}

const roles: VolunteerRole[] = [
  {
    organization: "Communauté pédagogique locale",
    role: "Coordinateur pédagogique",
    duration: "2025 – 2026",
    description:
      "Contribution active à l'organisation d'activités de formation et de partage de pratiques.",
    responsibilities: [
      "Organisé des ateliers de conception pédagogique",
      "Facilité la collaboration entre pairs",
      "Coordonné les activités de montée en compétences",
    ],
    achievements: [
      "Mise en place d'un cadre de partage régulier",
      "Renforcement de l'engagement des participants",
    ],
    skills: ["Animation", "Communication", "Coordination"],
  },
  {
    organization: "Collectif projets éducatifs",
    role: "Référent projet",
    duration: "2024 – 2025",
    description: "Pilotage de projets éducatifs en équipe multidisciplinaire.",
    responsibilities: [
      "Cadré les besoins des parties prenantes",
      "Coordonné livrables et planning pédagogique",
    ],
    achievements: ["Livraison de projets dans les délais"],
    skills: ["Leadership", "Gestion de projet"],
  },
  {
    organization: "Initiatives d'accompagnement apprenant",
    role: "Mentor",
    duration: "2023 – 2024",
    description: "Accompagnement de pairs sur méthodes de travail et organisation d'apprentissage.",
    responsibilities: ["Suivi individuel", "Conseils méthodologiques"],
    achievements: ["Amélioration de l'autonomie de plusieurs apprenants"],
    skills: ["Mentorat", "Écoute active"],
  },
  {
    organization: "Actions de sensibilisation éducative",
    role: "Bénévole",
    duration: "2022 – 2023",
    description: "Participation à des actions de sensibilisation et d'appui pédagogique.",
    responsibilities: ["Animation de sessions", "Support logistique"],
    achievements: ["Participation à plusieurs actions terrain"],
    skills: ["Collaboration", "Communication"],
  },
];

export function LeadershipVolunteering({ darkMode }: LeadershipVolunteeringProps) {
  return (
    <section
      id="leadership-volunteering"
      className={`py-28 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
              darkMode ? "bg-emerald-900/30 text-emerald-400" : "bg-emerald-50 text-emerald-700"
            }`}
          >
            Leadership & engagement
          </span>
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
            Impact collectif
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full mx-auto mb-4" />
          <p className={`max-w-2xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
            Engagement associatif et coordination d'initiatives orientées apprentissage.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {roles.map((item, i) => (
            <motion.article
              key={`${item.organization}-${item.role}-${item.duration}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className={`rounded-2xl border p-6 flex flex-col h-full ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700"
                  : "bg-gray-50/80 border-gray-100 shadow-sm"
              }`}
            >
              <div className="flex items-start gap-3 mb-4">
                <div
                  className={`p-2 rounded-xl shrink-0 ${
                    darkMode ? "bg-emerald-900/30 text-emerald-400" : "bg-emerald-50 text-emerald-700"
                  }`}
                >
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className={`font-bold text-lg ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {item.organization}
                  </h3>
                  <p className={`font-semibold text-sm ${darkMode ? "text-emerald-400" : "text-emerald-700"}`}>
                    {item.role}
                  </p>
                  <p
                    className={`inline-flex items-center gap-1.5 text-xs mt-1.5 ${
                      darkMode ? "text-gray-500" : "text-gray-500"
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    {item.duration}
                  </p>
                </div>
              </div>

              <p className={`text-sm leading-relaxed mb-5 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                {item.description}
              </p>

              <div className="space-y-5 flex-1">
                <div>
                  <p
                    className={`text-xs font-semibold uppercase tracking-wide mb-2 flex items-center gap-1.5 ${
                      darkMode ? "text-gray-500" : "text-gray-500"
                    }`}
                  >
                    <Target className="w-3.5 h-3.5" />
                    Responsabilités
                  </p>
                  <ul className="space-y-1.5">
                    {item.responsibilities.map((r) => (
                      <li
                        key={r}
                        className={`flex items-start gap-2 text-sm ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p
                    className={`text-xs font-semibold uppercase tracking-wide mb-2 flex items-center gap-1.5 ${
                      darkMode ? "text-gray-500" : "text-gray-500"
                    }`}
                  >
                    <Medal className="w-3.5 h-3.5" />
                    Réalisations
                  </p>
                  <ul className="space-y-1.5">
                    {item.achievements.map((a) => (
                      <li
                        key={a}
                        className={`flex items-start gap-2 text-sm ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p
                    className={`text-xs font-semibold uppercase tracking-wide mb-2 ${
                      darkMode ? "text-gray-500" : "text-gray-500"
                    }`}
                  >
                    Compétences développées
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((s) => (
                      <span
                        key={s}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                          darkMode ? "bg-gray-700/80 text-gray-200" : "bg-white text-gray-700 border border-gray-200"
                        }`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
