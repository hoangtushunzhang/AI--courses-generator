"use client";

import { useCallback, useRef } from "react";
import { useCanvas } from "./useCanvas";

type ParticleType = {
  x: number;
  y: number;
  velocity: { x: number; y: number };
  radius: number;
  color: string;
};

const createParticle = (ctx: CanvasRenderingContext2D): ParticleType => ({
  x: Math.random() * ctx.canvas.width,
  y: Math.random() * ctx.canvas.height,
  velocity: {
    x: (Math.random() - 0.5) * 2,
    y: (Math.random() - 0.5) * 2,
  },
  radius: Math.random() * 1.5 + 0.5,
  color: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, ${
    Math.random() * 100 + 155
  }, 0.1)`,
});

const updateParticle = (
  particle: ParticleType,
  ctx: CanvasRenderingContext2D
) => {
  particle.x += particle.velocity.x;
  particle.y += particle.velocity.y;

  if (particle.x < 0 || particle.x > ctx.canvas.width)
    particle.velocity.x *= -1;
  if (particle.y < 0 || particle.y > ctx.canvas.height)
    particle.velocity.y *= -1;
};

const drawParticle = (
  particle: ParticleType,
  ctx: CanvasRenderingContext2D
) => {
  ctx.beginPath();
  ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
  ctx.fillStyle = particle.color;
  ctx.fill();
};

export function ParticleCanvas() {
  const particles = useRef<ParticleType[]>([]);

  const draw = useCallback((ctx: CanvasRenderingContext2D) => {
    if (particles.current.length === 0) {
      particles.current = Array.from({ length: 50 }, () => createParticle(ctx));
    }

    ctx.fillStyle = "rgba(10, 10, 10, 0.05)";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    particles.current.forEach((particle) => {
      updateParticle(particle, ctx);
      drawParticle(particle, ctx);
    });

    ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
    for (let i = 0; i < particles.current.length; i++) {
      for (let j = i; j < particles.current.length; j++) {
        const dx = particles.current[i].x - particles.current[j].x;
        const dy = particles.current[i].y - particles.current[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          ctx.beginPath();
          ctx.moveTo(particles.current[i].x, particles.current[i].y);
          ctx.lineTo(particles.current[j].x, particles.current[j].y);
          ctx.stroke();
        }
      }
    }
  }, []);

  const canvasRef = useCanvas(draw);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
    />
  );
}
