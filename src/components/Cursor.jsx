import { useEffect, useRef } from "react";

function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // guard for SSR
    if (typeof window === "undefined") return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const move = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      ring.style.left = `${x}px`;
      ring.style.top = `${y}px`;
    };

    const addHover = () => ring.classList.add("cursor-hover");
    const removeHover = () => ring.classList.remove("cursor-hover");

    const clickEffect = () => {
      ring.classList.add("cursor-click");
      setTimeout(() => ring.classList.remove("cursor-click"), 150);
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mousedown", clickEffect);

    const hoverTargets = document.querySelectorAll(
      "a, button, input, textarea, .hover-target"
    );

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousedown", clickEffect);

      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" ref={dotRef} className="cursor-dot"></div>
      <div id="cursor-ring" ref={ringRef} className="cursor-ring"></div>
    </>
  );
}

export { Cursor };
export default Cursor;
