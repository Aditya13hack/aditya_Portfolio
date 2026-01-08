export default function ReachMe() {
  return (
    <section
      id="contact"
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#05070d",
        color: "white",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Reach Me
        </h2>

        <p style={{ opacity: 0.7, marginBottom: "2rem" }}>
          Let’s connect and build something meaningful.
        </p>

        <a
          href="mailto:adityabuisness13@gmail.com"
          style={{
            padding: "14px 28px",
            borderRadius: "999px",
            background:
              "linear-gradient(90deg, #7c3aed, #06b6d4)",
            color: "white",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          adityabuisness13@gmail.com
        </a>
      </div>
    </section>
  );
}
