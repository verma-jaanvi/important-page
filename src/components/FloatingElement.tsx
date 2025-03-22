
import React from 'react';

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  position?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
}

const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  delay = 0,
  className = '',
  size = 'md',
  position = {}
}) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-3xl',
    lg: 'text-5xl'
  };

  const style: React.CSSProperties = {
    animationDelay: `${delay}s`,
    ...position
  };

  return (
    <div
      className={`absolute animate-float ${sizeClasses[size]} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default FloatingElement;
