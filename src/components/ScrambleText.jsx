import React, { useState, useEffect } from 'react';

const GLYPHS = '01#@%&§$XYZ_<>[]/*+=';

export default function ScrambleText({ text, className = '', hoverTrigger = true }) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  const scramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iteration = 0;
    const maxIterations = text.length;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join('')
      );

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsScrambling(false);
      }

      iteration += 1 / 2;
    }, 30);
  };

  useEffect(() => {
    scramble();
  }, [text]);

  return (
    <span
      className={`inline-block cursor-default font-mono ${className}`}
      onMouseEnter={hoverTrigger ? scramble : undefined}
    >
      {displayText}
    </span>
  );
}
