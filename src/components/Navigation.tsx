import { motion } from 'framer-motion';
import { useThemeStore } from '../store/theme';

const navItems = [
  { label: 'Home', target: 'hero' },
  { label: 'Services', target: 'services' },
  { label: 'Projects', target: 'projects' },
  { label: 'Contact', target: 'contact' },
];

export default function Navigation() {
  const { theme, toggleTheme } = useThemeStore();

  const scrollToSection = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        theme === 'dark' ? 'bg-slate-900/80' : 'bg-white/80'
      } backdrop-blur-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-2xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
          >
            Logo
          </motion.div>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => scrollToSection(item.target)}
                  className={`text-sm font-medium transition-colors ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-700 hover:text-black'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                theme === 'dark'
                  ? 'bg-slate-800 text-yellow-500'
                  : 'bg-slate-100 text-slate-900'
              }`}
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}