import { motion } from 'framer-motion';
import { useThemeStore } from '../../store/theme';

export default function Hero() {
  const { theme } = useThemeStore();

  return (
    <section id="hero" className="h-screen flex items-center justify-center relative">
      <div className="text-center z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-[16vw] font-bold leading-[1] mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}
        >
          CREATIVE
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-xl mb-8 max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          A modern landing page template for creative agencies and digital studios
        </motion.p>
      </div>
    </section>
  );
}