import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { ProjectCard } from '../ProjectCard';

const projects = [
  {
    title: "Digital Experience",
    description: "Creating immersive digital experiences that connect with your audience.",
    imageUrl: "https://images.unsplash.com/photo-1605106702842-01a887a31122?q=80&w=500&auto=format&fit=crop",
    color: "#5196fd"
  },
  {
    title: "Brand Evolution",
    description: "Evolving brands through strategic design and creative direction.",
    imageUrl: "https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=500&auto=format&fit=crop&q=60",
    color: "#8f89ff"
  },
  {
    title: "Creative Solutions",
    description: "Innovative solutions that push the boundaries of digital design.",
    imageUrl: "https://images.unsplash.com/photo-1605106901227-991bd663255c?w=500&auto=format&fit=crop",
    color: "#13006c"
  }
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <section id="projects" ref={container} className="bg-transparent">
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <ProjectCard
            key={i}
            i={i}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            color={project.color}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
}