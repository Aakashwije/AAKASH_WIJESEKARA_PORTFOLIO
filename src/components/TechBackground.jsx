import { useEffect, useRef } from "react";

class ParticleNode {
  constructor(width, height) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.22;
    this.vy = (Math.random() - 0.5) * 0.22;
    this.bright = 0;
  }

  move(width, height) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;

    this.bright *= 0.93;
  }

  draw(ctx) {
    ctx.fillStyle = `rgba(250,204,21,${0.5 + this.bright})`;
    ctx.fillRect(this.x, this.y, 2.8, 2.8);
  }
}

function TechBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let animationFrame;
    let nodes = [];

    function connect() {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 200) {
            const alpha = 0.18 - dist / 1000;

            if (Math.random() < 0.0003) {
              ctx.strokeStyle = "rgba(255,255,220,0.9)";
              nodes[i].bright = 1;
              nodes[j].bright = 1;
            } else {
              ctx.strokeStyle = `rgba(250,204,21,${alpha})`;
            }

            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function drawFrame(shouldMove = true) {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(43,45,49,0.35)";
      ctx.fillRect(0, 0, width, height);

      nodes.forEach((n) => {
        if (shouldMove) n.move(width, height);
        n.draw(ctx);
      });

      connect();
    }

    function animate() {
      drawFrame();
      animationFrame = requestAnimationFrame(animate);
    }

    const resize = () => {
      const bounds = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = Math.max(1, Math.round(bounds.width));
      height = Math.max(1, Math.round(bounds.height));

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const nodeCount = width < 640 ? 48 : width < 1024 ? 80 : 140;
      nodes = Array.from({ length: nodeCount }, () => new ParticleNode(width, height));
      if (reducedMotion) drawFrame(false);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas.parentElement);
    resize();

    if (!reducedMotion) animate();

    return () => {
      observer.disconnect();
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };

  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
    />
  );
}

export { TechBackground };
export default TechBackground;
