import React, { useEffect, useState } from 'react';

interface CursorProps {
  className?: string;
}

const Cursor: React.FC<CursorProps> = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorStyle = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      const computedStyle = hoveredElement ? window.getComputedStyle(hoveredElement).cursor : 'default';
      setIsPointer(computedStyle === 'pointer');
    };

    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mousemove', updateCursorStyle);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mousemove', updateCursorStyle);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [position.x, position.y]);

  if (typeof window === 'undefined' || isHidden) return null;

  return (
    <>
      <div
        className={`fixed pointer-events-none z--10 transition-transform duration-100 ease-out ${isHidden ? 'opacity-0' : 'opacity-100'}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'opacity 150ms ease-in-out',
        }}
      >
        <div
          className={`relative -ml-2 -mt-2 h-4 w-4 rounded-full bg-gray-900 dark:bg-gray-700 transition-transform duration-300 ${isPointer ? 'scale-150 mix-blend-difference' : 'scale-100'}`}
        />
      </div>
      <div
        className={`fixed pointer-events-none z-50 transition-transform duration-300 ease-out ${isHidden ? 'opacity-0' : 'opacity-100'}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'opacity 150ms ease-in-out',
        }}
      >
        <div
          className={`relative -ml-5 -mt-5 h-10 w-10 rounded-full border border-gray-900 dark:border-gray-100 transition-transform duration-300 ${isPointer ? 'scale-150' : 'scale-50'} ${isPointer ? 'opacity-0' : 'opacity-100'}`}
        />
      </div>
    </>
  );
};

export default Cursor;