import { motion } from 'framer-motion';
import { useThemeStore } from '../store/theme';

export default function BackgroundGradient() {
  const { theme } = useThemeStore();

  return (
    <div className="fixed inset-0 -z-10">
      <div className={`absolute inset-0 ${
        theme === 'dark'
          ? 'bg-slate-950'
          : 'bg-gradient-to-br from-blue-50 to-indigo-100'
      }`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="54"
                height="54"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 54 0 L 0 0 0 54"
                  fill="none"
                  stroke={theme === 'dark' ? '#4f4f4f2e' : '#2563eb1a'}
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          <div
            className={`absolute inset-0 ${
              theme === 'dark'
                ? '[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'
                : '[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#fff_70%,transparent_100%)]'
            }`}
          />
        </motion.div>
      </div>
    </div>
  );
}