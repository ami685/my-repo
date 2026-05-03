import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Github, Linkedin, Download, Send, CheckCircle } from "lucide-react";

interface ContactProps {
  darkMode: boolean;
}

export function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_key: "db7f8e45-fd25-4056-b057-04ca4f3b507f", // Remplacez par votre clé Web3Forms
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        }
      );
      
      const data = await response.json();
      
      if (data.success) {
        setSent(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      } else {
        console.error("Error:", data);
        alert("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = `w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm ${
    darkMode
      ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:bg-gray-750"
      : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:bg-white"
  }`;

  return (
    <section
      id="contact"
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
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${
            darkMode ? "bg-blue-900/40 text-blue-400" : "bg-blue-50 text-blue-600"
          }`}>
            Contact
          </span>
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
            Contact & collaboration
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto mb-4" />
          <p className={`max-w-lg mx-auto ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
            Disponible pour des projets de conception pédagogique, digital learning et accompagnement de dispositifs de formation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={`text-xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
              Me contacter
            </h3>

            <div className="space-y-4 mb-8">
              {[
                { icon: Mail, label: "Email", value: "jabbouramine99@gmail.com", href: "mailto:jabbouramine99@gmail.com" },
                { icon: Phone, label: "Téléphone", value: "+212 633-321260", href: "tel:+212 633-321260" },
                { icon: MapPin, label: "Localisation", value: "Maroc 🇲🇦", href: null },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                    darkMode
                      ? "border-gray-800 bg-gray-800/50 hover:border-gray-700"
                      : "border-gray-100 bg-white hover:border-blue-100 shadow-sm"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    darkMode ? "bg-blue-900/40 text-blue-400" : "bg-blue-50 text-blue-600"
                  }`}>
                    <item.icon size={18} />
                  </div>
                  <div>
                    <div className={`text-xs font-semibold uppercase tracking-wide mb-0.5 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} className={`text-sm font-medium hover:text-blue-500 transition-colors ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                        {item.value}
                      </a>
                    ) : (
                      <span className={`text-sm font-medium ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                        {item.value}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <h4 className={`text-sm font-semibold uppercase tracking-wide mb-4 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
              Réseaux
            </h4>
            
            <div className="flex gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", color: "bg-blue-600" },
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.07, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm font-medium shadow-sm transition-all ${link.color}`}
                >
                  <link.icon size={16} />
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Moroccan-inspired decorative */}
            <div className="mt-10 p-5 rounded-2xl border border-dashed border-blue-200 bg-gradient-to-br from-blue-50/50 to-transparent"
              style={darkMode ? { borderColor: "rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.04)" } : {}}>
              <p className={`text-sm italic ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
                " Non point enseigner la vertu ni la vérité, mais garantir le cœur du vice et l'esprit de l'erreur." Jean Jack Rousseau
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
