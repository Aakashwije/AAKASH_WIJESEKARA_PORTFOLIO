import { useEffect, useRef } from "react";

function TechBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const nodes = [];
    const NODE_COUNT = 160; // 🔥 MORE NODES

    // ===== NODE =====
    class Node {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.22;
        this.vy = (Math.random() - 0.5) * 0.22;
        this.bright = 0;
      }

      move() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;

        this.bright *= 0.93;
      }

      draw() {
        ctx.fillStyle = `rgba(250,204,21,${0.5 + this.bright})`;
        ctx.fillRect(this.x, this.y, 2.8, 2.8);
      }
    }

    for (let i = 0; i < NODE_COUNT; i++) nodes.push(new Node());

    // ===== CONNECTIONS + SPARKS =====
    function connect() {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 200) { // 🔥 MORE CONNECTION RANGE
            const alpha = 0.18 - dist / 1000;

            // random spark flash
            if (Math.random() < 0.0003) { // 🔥 more sparks
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

    function animate() {
      ctx.clearRect(0, 0, w, h);

      // dark fade background
      ctx.fillStyle = "rgba(43,45,49,0.35)";
      ctx.fillRect(0, 0, w, h);

      nodes.forEach(n => {
        n.move();
        n.draw();
      });

      connect();

      requestAnimationFrame(animate);
    }

    animate();

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);

  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
}

export { TechBackground };
export default TechBackground;
