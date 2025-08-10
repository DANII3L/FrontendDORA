import React, { useRef, useEffect } from 'react';

const POINTS = 28;
const CONNECTION_DISTANCE = 110;
const COLORS = ['#fff', '#fffbe6', '#ffe0b2']; // blanco y amarillo claro
const BG_GRADIENT_1 = '#ff7a18'; // naranja
const BG_GRADIENT_2 = '#ff0033'; // rojo

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createPoints(width, height, count) {
  return Array.from({ length: count }, () => ({
    x: randomBetween(50, width - 50),
    y: randomBetween(50, height - 50),
    vx: randomBetween(-0.18, 0.18),
    vy: randomBetween(-0.18, 0.18),
    size: randomBetween(2.5, 5.5),
    opacity: randomBetween(0.5, 1),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  }));
}

const Background3D = () => {
  const canvasRef = useRef();
  const animationRef = useRef();
  const pointsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;
    pointsRef.current = createPoints(width, height, POINTS);

    function draw() {
      // Fondo degradado lineal naranja a rojo
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, BG_GRADIENT_1);
      gradient.addColorStop(1, BG_GRADIENT_2);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Líneas entre puntos cercanos
      for (let i = 0; i < pointsRef.current.length; i++) {
        for (let j = i + 1; j < pointsRef.current.length; j++) {
          const p1 = pointsRef.current[i];
          const p2 = pointsRef.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            ctx.save();
            ctx.globalAlpha = 0.10 + 0.18 * (1 - dist / CONNECTION_DISTANCE);
            ctx.strokeStyle = '#fff';
            ctx.shadowColor = '#fffbe6';
            ctx.shadowBlur = 6;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // Dibujar puntos
      for (let p of pointsRef.current) {
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 14;
        ctx.fill();
        ctx.restore();
      }
    }

    function animate() {
      // Mover puntos
      for (let p of pointsRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        // Rebote en bordes
        if (p.x < 30 || p.x > width - 30) p.vx *= -1;
        if (p.y < 30 || p.y > height - 30) p.vy *= -1;
      }
      draw();
      animationRef.current = requestAnimationFrame(animate);
    }

    animate();
    window.addEventListener('resize', handleResize);
    function handleResize() {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      pointsRef.current = createPoints(width, height, POINTS);
    }
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 block"
      style={{ display: 'block', width: '100%', height: '100%' }}
    />
  );
};

export default Background3D; 