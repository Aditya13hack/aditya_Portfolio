import { motion } from "framer-motion";
import blackHole from "../assets/black-hole.png";

const skills = [
  "JavaScript", "React", "Node.js", "Java",
  "DBMS", "DSA", "HTML", "Three.js",
  "Spline", "Tailwind CSS", "API Integration", "GitHub",
  "MongoDB", "Professional Skills", "Problem Solving", "Software Development",
];

// Parent stagger animation
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// Card animation
const cardVariants = {
  hidden: {
    opacity: 0,
    x: 40,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen bg-[#05070d] flex items-center overflow-hidden"
    >
      {/* LEFT — BLACK HOLE IMAGE */}
      <div className="relative w-1/2 flex items-center justify-center">
        {/* Ambient glow */}
        <div
          className="
            absolute w-[320px] h-[320px]
            bg-purple-600/25
            blur-[160px]
            rounded-full
          "
        />

        <img
          src={blackHole}
          alt="Black Hole"
          className="
            w-[260px]
            opacity-80
            pointer-events-none
            select-none
          "
        />
      </div>

      {/* RIGHT — SKILLS GRID */}
      <div className="relative z-10 w-1/2 pr-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold text-white mb-10"
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              variants={cardVariants}
              className="
                group relative
                px-6 py-6 rounded-2xl
                bg-white/5 border border-white/10
                backdrop-blur-xl
                text-white text-sm font-medium text-center
                transition-all duration-300
                hover:-translate-y-2
                hover:scale-[1.03]
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute inset-0 rounded-2xl
                  bg-gradient-to-br from-purple-500/30 to-cyan-400/20
                  opacity-0 blur-xl
                  group-hover:opacity-100
                  transition
                "
              />

              <span className="relative z-10">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
