"use client";

import { useEffect, useMemo, useState } from "react";

const greetings = [
  "Halo",
  "Hello",
  "Hola",
  "Bonjour",
  "Ciao",
  "नमस्ते",
  "こんにちは",
  "안녕하세요"
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [gradientIndex, setGradientIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
      setGradientIndex((prev) => (prev + 1) % 4);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  const activeGreeting = useMemo(() => greetings[index], [index]);
  const gradientClass = useMemo(
    () => `gradient gradient-${gradientIndex + 1}`,
    [gradientIndex]
  );

  return (
    <main className="page">
      <section className="hero" aria-labelledby="hero-title">
        <div className={gradientClass} />
        <div className="hero__content">
          <h1 id="hero-title" className="hero__title">
            {activeGreeting}, traveler.
          </h1>
          <p className="hero__subtitle">
            Step into a tranquil corner of the web where a single word welcomes
            you in many languages. Let the cadence of greeting ripple through
            space and color.
          </p>
          <button
            type="button"
            onClick={() => {
              setIndex((prev) => (prev + 1) % greetings.length);
              setGradientIndex((prev) => (prev + 1) % 4);
            }}
            className="hero__button"
          >
            Next greeting
          </button>
        </div>
        <footer className="hero__footer">
          Inspired by the timeless simplicity of a heartfelt &ldquo;Halo&rdquo;.
        </footer>
      </section>
    </main>
  );
}
