export type Language = 'en' | 'fr';

export const translations = {
  en: {
    nav: {
      profile: 'Profile',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      certifications: 'Certifications',
      contact: 'Contact',
      collaborate: 'Collaborate',
    },
    hero: {
      greeting: 'Hi, I\'m',
      name: 'Amine Jabbour',
      title: 'Educational Engineer',
      subtitle: 'Specialized in e-learning & instructional design',
      description: 'I design engaging and effective learning experiences, combining innovative pedagogy and educational technologies.',
      availability: 'Available for missions',
      viewProjects: 'View projects',
      contactMe: 'Contact me',
    },
    about: {
      title: 'About',
      profile: 'Profile',
      engineer: 'Educational Engineer',
      focus: 'impact-oriented',
      bio1: 'I am',
      bio2: 'Amine Jabbour, educational engineer',
      bio3: 'I support the design of learner-centered training programs, with a structured and measurable approach.',
      bio4: 'My work connects',
      bio5: 'pedagogical scripting',
      bio6: 'educational technologies',
      bio7: 'and learning theories to create effective, motivating, and transferable paths.',
      location: 'Location',
      specialty: 'Specialty',
      languages: 'Languages',
      education: 'Education',
      quote: '\"Good pedagogical design is not seen, it is experienced.\" 🇲🇦',
    },
    skills: {
      title: 'Skills',
      subtitle: 'Technical & Pedagogical Expertise',
    },
    experience: {
      title: 'Experience',
      subtitle: 'Professional Journey',
    },
    projects: {
      title: 'Projects',
      subtitle: 'Recent Work',
      viewProject: 'View Project',
      viewCode: 'View Code',
    },
    certifications: {
      title: 'Certifications',
      subtitle: 'Professional Qualifications',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Let\'s discuss your project',
      description: 'Available for pedagogical design projects, digital learning and training program support.',
      quote: '\"Not to teach virtue or truth, but to guard against the heart of vice and the spirit of error.\" Jean Jack Rousseau',
    },
    footer: {
      rights: 'All rights reserved',
    },
  },
  fr: {
    nav: {
      profile: 'Profil',
      skills: 'Compétences',
      experience: 'Parcours',
      projects: 'Projets',
      certifications: 'Formation',
      contact: 'Contact',
      collaborate: 'Collaborer',
    },
    hero: {
      greeting: 'Salut, je suis',
      name: 'Amine Jabbour',
      title: 'Ingénieur pédagogique',
      subtitle: 'Spécialisé en e-learning & design pédagogique',
      description: 'Je conçois des expériences d\'apprentissage engageantes et efficaces, en combinant pédagogie innovante et technologies éducatives.',
      availability: 'Disponible pour missions',
      viewProjects: 'Voir les projets',
      contactMe: 'Me contacter',
    },
    about: {
      title: 'À propos',
      profile: 'Profil',
      engineer: 'Ingénieur pédagogique',
      focus: 'orienté impact',
      bio1: 'Je suis',
      bio2: 'Amine Jabbour, ingénieur pédagogique',
      bio3: 'J\'accompagne la conception de dispositifs de formation centrés sur l\'apprenant, avec une approche structurée et mesurable.',
      bio4: 'Mon travail relie',
      bio5: 'scénarisation pédagogique',
      bio6: 'technologies éducatives',
      bio7: 'et théories d\'apprentissage pour créer des parcours efficaces, motivants et transférables.',
      location: 'Localisation',
      specialty: 'Spécialité',
      languages: 'Langues',
      education: 'Formation',
      quote: '\"Un bon design pédagogique ne se voit pas, il se vit.\" 🇲🇦',
    },
    skills: {
      title: 'Compétences',
      subtitle: 'Expertise Technique & Pédagogique',
    },
    experience: {
      title: 'Parcours',
      subtitle: 'Parcours Professionnel',
    },
    projects: {
      title: 'Projets',
      subtitle: 'Travaux Récents',
      viewProject: 'Voir le projet',
      viewCode: 'Voir le code',
    },
    certifications: {
      title: 'Formation',
      subtitle: 'Qualifications Professionnelles',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Discutons de votre projet',
      description: 'Disponible pour des projets de conception pédagogique, digital learning et accompagnement de dispositifs de formation.',
      quote: '\"Non point enseigner la vertu ni la vérité, mais garantir le cœur du vice et l\'esprit de l\'erreur.\" Jean Jack Rousseau',
    },
    footer: {
      rights: 'Tous droits réservés',
    },
  },
};

export function t(lang: Language, section: keyof typeof translations['en'], key: string): string {
  return (translations[lang][section] as Record<string, string>)?.[key] || `${section}.${key}`;
}
