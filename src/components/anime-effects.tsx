"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

export function FloatingOrbs({ count = 6, colors = ["#3b82f6", "#8b5cf6", "#06b6d4"] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const orbs = containerRef.current.querySelectorAll(".orb");

    orbs.forEach((orb, i) => {
      anime({
        targets: orb,
        translateX: () => anime.random(-100, 100),
        translateY: () => anime.random(-100, 100),
        scale: [{ value: 0.8 }, { value: 1.2 }, { value: 1 }],
        opacity: [{ value: 0.3 }, { value: 0.7 }, { value: 0.4 }],
        duration: anime.random(4000, 8000),
        delay: i * 500,
        direction: "alternate",
        loop: true,
        easing: "easeInOutQuad",
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="orb absolute rounded-full blur-3xl"
          style={{
            width: `${anime.random(150, 400)}px`,
            height: `${anime.random(150, 400)}px`,
            background: colors[i % colors.length],
            opacity: 0.2,
            top: `${anime.random(0, 80)}%`,
            left: `${anime.random(0, 80)}%`,
          }}
        />
      ))}
    </div>
  );
}

export function AnimatedGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const dots = gridRef.current.querySelectorAll(".grid-dot");

    anime({
      targets: dots,
      opacity: [0.1, 0.5],
      scale: [1, 1.5],
      delay: anime.stagger(50, { grid: [20, 10], from: "center" }),
      duration: 2000,
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
    });
  }, []);

  return (
    <div ref={gridRef} className="absolute inset-0 overflow-hidden pointer-events-none -z-10 opacity-30">
      <div className="grid grid-cols-20 gap-8 p-8" style={{ gridTemplateColumns: "repeat(20, 1fr)" }}>
        {Array.from({ length: 200 }).map((_, i) => (
          <div
            key={i}
            className="grid-dot w-1 h-1 rounded-full bg-blue-500/50"
          />
        ))}
      </div>
    </div>
  );
}

export function MorphingBlob() {
  const blobRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!blobRef.current) return;

    const paths = [
      "M440,320Q430,390,370,420Q310,450,250,440Q190,430,140,390Q90,350,80,290Q70,230,110,180Q150,130,200,100Q250,70,310,80Q370,90,410,140Q450,190,450,250Q450,310,440,320Z",
      "M420,310Q400,370,350,410Q300,450,240,440Q180,430,130,390Q80,350,90,290Q100,230,130,170Q160,110,220,90Q280,70,340,90Q400,110,430,160Q460,210,440,260Q420,310,420,310Z",
      "M450,330Q440,410,370,430Q300,450,240,430Q180,410,130,370Q80,330,70,270Q60,210,100,160Q140,110,200,80Q260,50,320,70Q380,90,420,140Q460,190,460,260Q460,330,450,330Z",
    ];

    anime({
      targets: blobRef.current,
      d: paths,
      duration: 8000,
      loop: true,
      direction: "alternate",
      easing: "easeInOutQuad",
    });
  }, []);

  return (
    <svg className="absolute -z-10 opacity-20" viewBox="0 0 500 500" width="600" height="600">
      <defs>
        <linearGradient id="blob-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <path
        ref={blobRef}
        d="M440,320Q430,390,370,420Q310,450,250,440Q190,430,140,390Q90,350,80,290Q70,230,110,180Q150,130,200,100Q250,70,310,80Q370,90,410,140Q450,190,450,250Q450,310,440,320Z"
        fill="url(#blob-gradient)"
      />
    </svg>
  );
}

export function GlowingLines() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const lines = containerRef.current.querySelectorAll(".glow-line");

    anime({
      targets: lines,
      scaleX: [0, 1],
      opacity: [0, 0.6, 0],
      delay: anime.stagger(300),
      duration: 3000,
      loop: true,
      easing: "easeInOutExpo",
    });
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="glow-line absolute h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          style={{
            top: `${20 + i * 15}%`,
            left: "10%",
            right: "10%",
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}

export function CountUpNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const numRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const obj = { val: 0 };
          anime({
            targets: obj,
            val: value,
            duration: 2000,
            easing: "easeOutExpo",
            round: 1,
            update: () => {
              if (numRef.current) {
                numRef.current.textContent = obj.val + suffix;
              }
            },
          });
        }
      },
      { threshold: 0.5 }
    );

    if (numRef.current) observer.observe(numRef.current);
    return () => observer.disconnect();
  }, [value, suffix]);

  return <span ref={numRef}>0{suffix}</span>;
}

export function StaggeredText({ text, className = "" }: { text: string; className?: string }) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const chars = containerRef.current.querySelectorAll(".char");

    anime({
      targets: chars,
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(30),
      duration: 800,
      easing: "easeOutExpo",
    });
  }, []);

  return (
    <span ref={containerRef} className={className}>
      {text.split("").map((char, i) => (
        <span key={i} className="char inline-block" style={{ opacity: 0 }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
