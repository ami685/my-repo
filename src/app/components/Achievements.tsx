import { motion } from "motion/react";

interface AchievementsProps {
  darkMode: boolean;
}

const achievements = [
  {
    icon: "🎯",
    title: "Conception pédagogique",
    description:
      "Conception de dispositifs de formation centrés apprenant, alignés sur des objectifs mesurables.",
    color: "blue",
  },
  {
    icon: "🧠",
    title: "Approches théoriques maîtrisées",
    description:
      "Mobilisation de cadres comme ADDIE, CoI et Bloom pour guider les décisions pédagogiques.",
    color: "purple",
  },
  {
    icon: "🚀",
    title: "Déploiement LMS",
    description:
      "Structuration et pilotage de parcours sur Moodle et Google Classroom avec suivi des acquis.",
    color: "green",
  },
  {
    icon: "🎬",
    title: "Médiatisation pédagogique",
    description:
      "Production de capsules vidéo et supports d'apprentissage favorisant clarté et engagement.",
    color: "orange",
  },
  {
    icon: "🧩",
    title: "Scénarisation de projets",
    description:
      "Conception de projets variés (VR, leçon IA, capsules) adaptés à des contextes de formation divers.",
    color: "red",
  },
  {
    icon: "🤝",
    title: "Accompagnement et collaboration",
    description:
      "Travail en équipe et coordination avec parties prenantes pour livrer des expériences d'apprentissage efficaces.",
    color: "teal",
  },
];

const colorMap: Record<string, { bg: string; bgDark: string; text: string; textDark: string; border: string; borderDark: string }> = {
  blue: { bg: "bg-blue-50", bgDark: "bg-blue-900/20", text: "text-blue-600", textDark: "text-blue-400", border: "border-blue-100", borderDark: "border-blue-900/40" },
  purple: { bg: "bg-purple-50", bgDark: "bg-purple-900/20", text: "text-purple-600", textDark: "text-purple-400", border: "border-purple-100", borderDark: "border-purple-900/40" },
  green: { bg: "bg-green-50", bgDark: "bg-green-900/20", text: "text-green-600", textDark: "text-green-400", border: "border-green-100", borderDark: "border-green-900/40" },
  orange: { bg: "bg-orange-50", bgDark: "bg-orange-900/20", text: "text-orange-600", textDark: "text-orange-400", border: "border-orange-100", borderDark: "border-orange-900/40" },
  red: { bg: "bg-red-50", bgDark: "bg-red-900/20", text: "text-red-600", textDark: "text-red-400", border: "border-red-100", borderDark: "border-red-900/40" },
  teal: { bg: "bg-teal-50", bgDark: "bg-teal-900/20", text: "text-teal-600", textDark: "text-teal-400", border: "border-teal-100", borderDark: "border-teal-900/40" },
};

export function Achievements({ darkMode }: AchievementsProps) {
  return (
    <section
      id="achievements"
      className={`py-28 relative overflow-hidden ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      {/* Moroccan-inspired accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-700 via-blue-600 to-red-600" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
            darkMode ? "bg-blue-900/40 text-blue-400" : "bg-blue-50 text-blue-600"
          }`}>
            Points forts
          </span>
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
            Valeur ajoutée
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto mb-4" />
          <p className={`max-w-xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
            Compétences et réalisations clés au service de l'ingénierie pédagogique.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => {
            const c = colorMap[item.color];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`p-6 rounded-2xl border transition-all ${
                  darkMode
                    ? `${c.bgDark} ${c.borderDark} hover:shadow-xl`
                    : `${c.bg} ${c.border} hover:shadow-md`
                }`}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className={`font-bold text-lg mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`mt-16 p-8 rounded-3xl border ${
            darkMode
              ? "bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700"
              : "bg-gradient-to-r from-blue-600 to-blue-700 border-transparent"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "8+", label: "Projets pédagogiques" },
              { value: "3+", label: "Environnements LMS" },
              { value: "4+", label: "Formats de contenus" },
              { value: "100%", label: "Engagement qualité" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className={`text-3xl font-bold mb-1 ${darkMode ? "text-white" : "text-white"}`}>
                  {stat.value}
                </div>
                <div className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-blue-100"}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
