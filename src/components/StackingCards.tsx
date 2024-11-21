import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface Card {
  title: string;
  description: string;
  color: string;
}

const cards: Card[] = [
  {
    title: "Card One",
    description: "This is the first card description with some amazing content.",
    color: "bg-blue-500",
  },
  {
    title: "Card Two",
    description: "Second card brings more exciting features to showcase.",
    color: "bg-purple-500",
  },
  {
    title: "Card Three",
    description: "Third card completes the set with stunning visuals.",
    color: "bg-pink-500",
  },
];

export default function StackingCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative h-[60vh] w-full max-w-[1000px] mx-auto">
          {cards.map((card, i) => {
            const translateY = useTransform(
              scrollYProgress,
              [i * 0.25, 1],
              [0, -50 * (cards.length - i)]
            );

            const scale = useTransform(
              scrollYProgress,
              [i * 0.25, 1],
              [1, 0.8]
            );

            const opacity = useTransform(
              scrollYProgress,
              [i * 0.25, (i + 1) * 0.25],
              [1, 0.5]
            );

            return (
              <motion.div
                key={i}
                style={{ translateY, scale, opacity }}
                className={`absolute inset-0 ${card.color} rounded-3xl p-8 flex flex-col justify-between
                  shadow-xl will-change-transform`}
              >
                <h2 className="text-4xl font-bold text-white">{card.title}</h2>
                <p className="text-lg text-white/90">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}