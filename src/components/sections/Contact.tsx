import { motion } from "framer-motion";
import { useThemeStore } from "../../store/theme";

const contacts = [
  {
    icon: "📧",
    title: "Email",
    value: "hello@creative.studio",
    link: "mailto:hello@creative.studio",
    description: "Drop us a line anytime",
  },
  {
    icon: "📱",
    title: "WhatsApp",
    value: "+1 234 567 890",
    link: "https://wa.me/1234567890",
    description: "Quick responses, Monday to Friday",
  },
  {
    icon: "🔗",
    title: "LinkedIn",
    value: "@creativestudio",
    link: "https://linkedin.com/company/creativestudio",
    description: "Follow our company updates",
  },
  {
    icon: "📸",
    title: "Instagram",
    value: "@creative.studio",
    link: "https://instagram.com/creative.studio",
    description: "Check our latest work",
  },
];

export default function Contact() {
  const { theme } = useThemeStore();

  return (
    <section
      id="contact"
      className={`sticky top-0 min-h-screen flex items-center justify-center py-20 px-4 ${
        theme === "dark" ? "bg-transparent" : "bg-white/80"
      }`}
    >
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2
            className={`text-7xl font-bold mb-6 ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}
          >
            Let's Connect
          </h2>
          <p
            className={`text-xl ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Choose your preferred way to reach us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {contacts.map((contact, index) => (
            <motion.a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              key={contact.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`group p-8 rounded-2xl transition-all ${
                theme === "dark"
                  ? "bg-slate-800/50 hover:bg-slate-800"
                  : "bg-white hover:bg-gray-50"
              } cursor-pointer`}
            >
              <div className="flex items-start gap-6">
                <span className="text-4xl">{contact.icon}</span>
                <div>
                  <h3
                    className={`text-sm uppercase tracking-wider mb-2 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {contact.title}
                  </h3>
                  <p
                    className={`text-xl font-semibold mb-2 ${
                      theme === "dark" ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {contact.value}
                  </p>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {contact.description}
                  </p>
                </div>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="ml-auto"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${
                      theme === "dark" ? "stroke-gray-400" : "stroke-gray-600"
                    } group-hover:stroke-blue-500 transition-colors`}
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
