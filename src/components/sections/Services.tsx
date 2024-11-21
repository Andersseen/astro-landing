import { motion } from 'framer-motion';
import { useThemeStore } from '../../store/theme';

const services = [
  {
    title: "Web Design",
    description: "Creating beautiful, intuitive interfaces that users love",
    icon: "🎨"
  },
  {
    title: "Development",
    description: "Building robust applications with cutting-edge technology",
    icon: "💻"
  },
  {
    title: "Branding",
    description: "Crafting unique brand identities that stand out",
    icon: "✨"
  }
];

export default function Services() {
  const { theme } = useThemeStore();

  return (
    <section id="services" className={`min-h-screen py-20 px-4 ${
      theme === 'dark' ? 'bg-slate-900' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`text-4xl font-bold text-center mb-16 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}
        >
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`p-6 rounded-lg transition-colors ${
                theme === 'dark'
                  ? 'bg-slate-800 hover:bg-slate-700'
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className={`text-xl font-semibold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                {service.title}
              </h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}