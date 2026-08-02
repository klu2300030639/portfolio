import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Update global CSS variables for dynamic spotlight effects across all cards!
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('glass-card') ||
        target.closest('.glass-card')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  // Smooth lag trailing effect for outer cursor ring
  useEffect(() => {
    let animationFrameId: number;

    const loop = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      animationFrameId = requestAnimationFrame(loop);
    };

    loop();
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  return (
    <>
      {/* Dynamic Screen Spotlight Glow Following Mouse */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
          background: `radial-gradient(650px circle at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.12), rgba(14, 165, 233, 0.06) 40%, transparent 80%)`,
          transition: 'opacity 0.3s ease'
        }}
      />

      {/* Main Sharp Neon Dot */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovered ? '12px' : '8px',
          height: isHovered ? '12px' : '8px',
          borderRadius: '50%',
          background: isHovered ? 'var(--secondary-light)' : 'var(--primary-light)',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: `translate3d(${position.x - (isHovered ? 6 : 4)}px, ${position.y - (isHovered ? 6 : 4)}px, 0) scale(${isClicked ? 0.7 : 1})`,
          boxShadow: `0 0 15px ${isHovered ? 'var(--secondary)' : 'var(--primary)'}`,
          transition: 'transform 0.1s ease, width 0.2s ease, height 0.2s ease, background-color 0.2s ease'
        }}
      />

      {/* Trailing Outer Ring */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovered ? '48px' : '32px',
          height: isHovered ? '48px' : '32px',
          borderRadius: '50%',
          border: `1.5px solid ${isHovered ? 'var(--secondary-light)' : 'rgba(99, 102, 241, 0.5)'}`,
          background: isHovered ? 'rgba(14, 165, 233, 0.08)' : 'transparent',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: `translate3d(${trailingPos.x - (isHovered ? 24 : 16)}px, ${trailingPos.y - (isHovered ? 24 : 16)}px, 0) scale(${isClicked ? 0.85 : 1})`,
          boxShadow: isHovered ? '0 0 25px rgba(14, 165, 233, 0.3)' : 'none',
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease, background 0.2s ease'
        }}
      />
    </>
  );
};

