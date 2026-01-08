import ThreeModel from "../components/ThreeModel";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden
      bg-[radial-gradient(ellipse_at_top,_#1b0040_0%,_#05070d_45%,_#05070d_100%)]">

      {/* Background cosmic glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-250px] left-1/2 -translate-x-1/2
          w-[900px] h-[900px] rounded-full
          bg-gradient-to-b from-purple-600/40 via-purple-500/20 to-transparent
          blur-[140px]" />

        <div className="absolute bottom-[-300px] right-[-200px]
          w-[600px] h-[600px] rounded-full
          bg-cyan-500/20 blur-[160px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left: Text */}
        <div>
          <p className="text-cyan-400 uppercase tracking-[0.35em] text-xs mb-6">
            Software Developer · AI · Data Analytics
          </p>

          <h1
            className="text-6xl lg:text-7xl font-semibold leading-[1.05] text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Building the <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              future of digital
            </span>
            <br />
            experiences
          </h1>

          <p className="mt-8 max-w-lg text-gray-400 text-lg leading-relaxed">
            I design intelligent, scalable and visually refined applications
            where AI meets modern engineering.
          </p>

          <div className="mt-10 flex gap-6">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full
              bg-gradient-to-r from-purple-600 to-cyan-500
              text-white font-medium
              hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="#about"
              className="px-6 py-3 rounded-full
              border border-white/20 text-white
              hover:bg-white/5 transition"
            >
              About Me
            </a>
          </div>
        </div>

        {/* Right: 3D Model */}
        <div className="relative flex justify-center">
          {/* Model glow */}
          <div className="absolute inset-0 rounded-full
            bg-gradient-to-tr from-purple-500/20 to-cyan-400/20
            blur-3xl" />

          <div className="relative scale-110">
            <ThreeModel />
          </div>
        </div>

      </div>
    </section>
  );
}
