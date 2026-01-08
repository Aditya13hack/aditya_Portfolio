import { motion } from "framer-motion";
import { useState } from "react";

/* Reusable cinematic project card */
function ProjectCard({ title, description, tags }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      className="
        group relative p-10 rounded-3xl
        bg-white/5 border border-white/10
        backdrop-blur-xl
        overflow-hidden
        transition-all duration-500
        hover:-translate-y-2
      "
    >
      {/* Cursor-follow glow */}
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-0 group-hover:opacity-100
          transition duration-300
        "
        style={{
          background: `radial-gradient(
            450px circle at ${pos.x}px ${pos.y}px,
            rgba(124, 58, 237, 0.35),
            transparent 60%
          )`,
        }}
      />

      {/* Lightning sweep */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-gradient-to-r from-transparent via-white/10 to-transparent
          opacity-0 group-hover:opacity-100
          animate-lightning
        "
      />

      {/* Content */}
      <h3 className="relative text-3xl font-semibold text-white">
        {title}
      </h3>

      <p className="relative mt-6 text-gray-400 text-lg leading-relaxed max-w-3xl">
        {description}
      </p>

      <div className="relative mt-8 flex flex-wrap gap-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-4 py-1.5 rounded-full bg-white/10 text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}


export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative py-40 overflow-hidden
        bg-[radial-gradient(ellipse_at_center,_#0a0f24_0%,_#05070d_60%)]
      "
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute right-[-200px] top-1/4
            w-[600px] h-[600px]
            bg-cyan-500/20 blur-[180px]
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section label */}
        <p className="text-cyan-400 uppercase tracking-[0.35em] text-xs mb-6">
          Selected Work
        </p>

        {/* Section heading */}
        <h2
          className="text-5xl lg:text-6xl font-semibold text-white leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Systems I’ve designed
          <br />
          to solve real problems
        </h2>

        {/* Projects */}
        <div className="mt-24 space-y-16">
          <ProjectCard
            title="AI Copilot — Driver Alertness System"
            description="A real-time AI-powered safety system designed to monitor driver alertness using facial expressions and head movement patterns. The system continuously analyzes live visual input to detect fatigue, distraction, or micro-sleep conditions, triggering intelligent alerts with minimal latency. The core focus was accuracy, responsiveness, and real-world reliability."
            tags={[
              "Computer Vision",
              "AI / ML",
              "Real-time Systems",
              "Human Safety",
            ]}
          />

          <ProjectCard
            title="EV Showcase Platform"
            description="A visually immersive web platform created to present next-generation electric vehicles through a clean, intuitive, and performance-focused interface. The project emphasizes structured information flow, smooth transitions, and modern UI patterns, allowing users to explore vehicle features and specifications without friction."
            tags={[
              "Frontend Architecture",
              "UI / UX Design",
              "Performance Optimization",
              "Web Experience",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
