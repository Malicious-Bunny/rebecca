'use client';

import { useEffect, useState } from 'react';

const keywords = [
  'DREAMS',
  'MAGIC',
  'ARTISTRY',
  'LOVE',
  'BEAUTY',
  'REBORN',
  'CRAFTED',
  'UNIQUE',
  'PRECIOUS',
  'HANDMADE',
  'AUTHENTIC',
  'DETAILED'
];

export function AnimatedTextBanner() {
  const [currentIndex, setCurr9ent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % keywords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)] py-4">
      <div className="flex animate-pulse items-center justify-center">
        <div className="flex space-x-8 font-heading text-lg font-medium uppercase tracking-widest text-white md:text-xl">
          {keywords.map((keyword, index) => (
            <span
              key={keyword}
              className={`transition-all duration-500 ${
                index === currentIndex
                  ? 'scale-110 opacity-100'
                  : 'scale-100 opacity-60'
              }`}
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
