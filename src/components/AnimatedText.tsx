
import React, { useState, useEffect } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  children?: React.ReactNode;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.02,
  children
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  const characters = text.split('');

  return (
    <div className={`${className}`}>
      {isVisible ? (
        <div className="inline-block">
          {characters.map((char, index) => (
            <span
              key={index}
              className="reveal-text inline-block"
              style={
                {
                  '--order': index,
                  animationDelay: `${index * duration}s`
                } as React.CSSProperties
              }
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
          {children}
        </div>
      ) : (
        <div className="opacity-0">{text}</div>
      )}
    </div>
  );
};

export default AnimatedText;
