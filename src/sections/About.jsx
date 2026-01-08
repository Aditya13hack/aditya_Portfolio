import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-40 overflow-hidden
      bg-[radial-gradient(ellipse_at_center,_#0b1020_0%,_#05070d_60%)]"
    >
      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-200px] top-1/3
          w-[500px] h-[500px]
          bg-purple-600/20 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-cyan-400 uppercase tracking-[0.35em] text-xs mb-6"
        >
          About
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-6xl font-semibold text-white leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          I build systems that feel
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400
            bg-clip-text text-transparent">
            {" "}intelligent
          </span>,
          not complicated.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-8 max-w-3xl text-gray-400 text-lg leading-relaxed"
        >
          I’m a software developer focused on AI-driven systems and modern
          web engineering. My work blends clean architecture, performance,
          and thoughtful design to create experiences that scale and feel
          effortless to use.
        </motion.p>

      </div>
    </section>
  );
}
