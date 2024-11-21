import React from "react";
import { useThemeStore } from "../../store/theme";
const services = [
  {
    title: "Web Design",
    description: "Creating beautiful, intuitive interfaces that users love",
    icon: "🎨",
  },
  {
    title: "Development",
    description: "Building robust applications with cutting-edge technology",
    icon: "💻",
  },
  {
    title: "Branding",
    description: "Crafting unique brand identities that stand out",
    icon: "✨",
  },
];

export default function Services() {
  const { theme } = useThemeStore();
  return (
    <section
      id="services"
      className={`min-h-screen py-20 px-4 ${
        theme === "dark" ? "bg-slate-900" : "bg-white"
      }`}
    >
      <div className="group flex max-md:flex-col justify-center gap-2 w-[80%] mx-auto mb-10 mt-3">
        {services.map((item, i: number) => {
          return (
            <article className="bg-violet-900 h-80 group/article relative w-full rounded-xl overflow-hidden md:group-hover:[&:not(:hover)]:w-[20%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 after:absolute after:inset-0 after:bg-white/30 after:backdrop-blur after:rounded-lg after:transition-all focus-within:ring focus-within:ring-indigo-300">
              <div className="absolute inset-0 text-white z-10  p-3 flex flex-col justify-end">
                <div className="text-8xl mb-8 flex justify-center">
                  {item.icon}
                </div>

                <h1 className=" text-xl font-medium   md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300">
                  {item?.title}
                </h1>
                <span className=" text-3xl font-medium  md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-500 group-focus-within/article:delay-500">
                  {item?.description}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
