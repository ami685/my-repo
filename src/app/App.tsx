import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useLang } from "./i18n/useLang";
import { Analytics } from "@vercel/analytics/next"
export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { lang, toggleLang } = useLang();

  // Smooth scroll globally
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-gray-950" : "bg-white"}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} lang={lang} toggleLang={toggleLang} />
      <Hero darkMode={darkMode} lang={lang} />
      <About darkMode={darkMode} lang={lang} />
      <Skills darkMode={darkMode} lang={lang} />
      <Experience darkMode={darkMode} lang={lang} />
      <Projects darkMode={darkMode} lang={lang} />
      <Certifications darkMode={darkMode} lang={lang} />
      <Achievements darkMode={darkMode} lang={lang} />
      <Contact darkMode={darkMode} lang={lang} />
      <Footer darkMode={darkMode} lang={lang} />
    </div>
  );
}
