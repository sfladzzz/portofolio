'use client';

import { useEffect, useMemo, useState } from 'react';

type Particle = {
  left: string;
  top: string;
  size: number;
  delay: string;
  duration: string;
  opacity: number;
};

type Hexagon = {
  left: number;
  top: number;
  index: number;
};

export default function ThreeBackground() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        left: `${((i * 13.37) % 100).toFixed(2)}%`,
        top: `${((i * 19.91) % 100).toFixed(2)}%`,
        size: 4 + (i % 5) * 2,
        delay: `${(i % 7) * 0.6}s`,
        duration: `${5 + (i % 8)}s`,
        opacity: 0.2 + (i % 5) * 0.12,
      })),
    []
  );

  const hexagons = useMemo<Hexagon[]>(
    () =>
      Array.from({ length: 30 }, (_, index) => {
        const row = Math.floor(index / 6);
        const column = index % 6;

        return {
          left: 3 + column * 18 + (row % 2) * 9,
          top: 2 + row * 25,
          index,
        };
      }),
    []
  );

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 40;
      const y = (event.clientY / window.innerHeight - 0.5) * 40;

      setPointer({ x, y });
    };

    window.addEventListener('pointermove', handlePointerMove);

    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{
        background:
          `radial-gradient(ellipse at 18% 20%, rgba(37, 99, 235, 0.18), transparent 38%), radial-gradient(ellipse at 82% 76%, rgba(180, 116, 72, 0.12), transparent 42%), radial-gradient(circle at ${50 + pointer.x * 2}% ${50 + pointer.y * 2}%, rgba(55, 65, 81, 0.16), transparent 55%)`,
        transform: `perspective(1200px) rotateX(${pointer.y * -0.15}deg) rotateY(${pointer.x * 0.18}deg)`,
        transition: 'transform 180ms ease-out',
      }}
    >
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(rgba(96, 165, 250, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(96, 165, 250, 0.12) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          transform: `translate(${pointer.x * 0.6}px, ${pointer.y * 0.6}px)`,
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(96, 165, 250, 0.4) 4px)',
          backgroundSize: '100% 5px',
        }}
      />

      <div
        className="absolute -left-32 top-12 h-80 w-80 bg-blue-400/20 blur-3xl"
        style={{
          clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0 50%)',
          transform: `translate(${pointer.x * -1.2}px, ${pointer.y * -1.1}px) scale(1.1)`,
          animation: 'pulse-slow 9s ease-in-out infinite',
        }}
      />

      <div
        className="absolute right-[-8rem] top-1/3 h-96 w-96 bg-amber-700/15 blur-3xl"
        style={{
          clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0 50%)',
          transform: `translate(${pointer.x * 1.1}px, ${pointer.y * 1}px)`,
          animation: 'pulse-slower 12s ease-in-out infinite',
        }}
      />

      <div className="absolute inset-0" aria-hidden="true">
        {hexagons.map((hexagon) => {
          const pointerX = pointer.x / 20 + 0.5;
          const pointerY = pointer.y / 20 + 0.5;
          const distance = Math.hypot(pointerX - hexagon.left / 100, pointerY - hexagon.top / 100);
          const proximity = Math.max(0, 1 - distance * 2.2);
          const isWarm = hexagon.index % 7 === 0;
          const glowColor = isWarm ? '180, 116, 72' : '96, 165, 250';

          return (
            <div
              key={hexagon.index}
              className="absolute aspect-[1.155/1] w-[clamp(78px,12vw,176px)] transition-[opacity,transform,filter] duration-300 ease-out"
              style={{
                left: `${hexagon.left}%`,
                top: `${hexagon.top}%`,
                opacity: 0.28 + proximity * 0.52,
                clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0 50%)',
                backgroundColor: `rgba(${glowColor}, ${0.32 + proximity * 0.52})`,
                filter: `drop-shadow(0 0 ${5 + proximity * 16}px rgba(${glowColor}, ${0.12 + proximity * 0.4}))`,
                transform: `translate3d(calc(-50% + ${pointer.x * (0.25 + (hexagon.index % 4) * 0.12)}px), calc(-50% + ${pointer.y * (0.25 + (hexagon.index % 3) * 0.14)}px), 0) scale(${1 + proximity * 0.08})`,
              }}
            >
              <span
                className="absolute inset-[1px]"
                style={{
                  clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0 50%)',
                  backgroundColor: 'rgba(15, 17, 24, 0.52)',
                }}
              />
            </div>
          );
        })}
      </div>

      <div
        className="absolute left-[12%] top-[62%] h-px w-32 bg-gradient-to-r from-transparent via-blue-300/70 to-transparent animate-pulse"
        style={{ transform: `translate(${pointer.x * -0.8}px, ${pointer.y * 0.7}px) rotate(-28deg)` }}
      />
      <div
        className="absolute right-[14%] top-[28%] h-px w-44 bg-gradient-to-r from-transparent via-amber-200/50 to-transparent animate-pulse"
        style={{ transform: `translate(${pointer.x * 0.7}px, ${pointer.y * -0.8}px) rotate(32deg)`, animationDelay: '1.2s' }}
      />

      <div className="absolute inset-0">
        {particles.map((particle, index) => (
          <div
            key={index}
            className={`absolute rounded-full ${index % 5 === 0 ? 'bg-amber-200/75 shadow-[0_0_16px_rgba(180,116,72,0.45)]' : 'bg-blue-200/80 shadow-[0_0_16px_rgba(96,165,250,0.55)]'} animate-float`}
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
              transform: `translate(${pointer.x * (0.5 + index * 0.08)}px, ${pointer.y * (0.5 + index * 0.06)}px)`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(15,17,24,0.48)_70%,_rgba(15,17,24,0.78)_100%)]" />
    </div>
  );
}
