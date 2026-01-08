import { useRef } from "react";
import Spline from "@splinetool/react-spline";

export default function ThreeModel() {
  const robotRef = useRef(null);

  function onLoad(spline) {
    const robot = spline.findObjectByName("Robot");
    robotRef.current = robot;
  }

  function handleMouseMove(e) {
    if (!robotRef.current) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 0.6;
    const y = (e.clientY / window.innerHeight - 0.5) * 0.6;

    robotRef.current.rotation.y = x;
    robotRef.current.rotation.x = -y;
  }

  return (
    <div
      className="w-full h-full"
      style={{
        WebkitMaskImage:
          "radial-gradient(circle at center, black 60%, transparent 100%)",
        maskImage:
          "radial-gradient(circle at center, black 60%, transparent 100%)",
      }}
    >
      <Spline scene="https://prod.spline.design/giIEqgMLotvFEeCW/scene.splinecode" />
    </div>
  );
}