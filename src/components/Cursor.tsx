import React, { useEffect, useState } from 'react';

interface CursorProps {
  className?: string;
}

const Cursor: React.FC<CursorProps> = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Detect if the device is a touch device
  const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  };

  useEffect(() => {
    // If it's a touch device, don't render the cursor
    if (isTouchDevice()) {
      setIsHidden(true);
      return;
    }

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
  }, [position]);

  // Hide the cursor for touch devices or server-side rendering
  if (typeof window === 'undefined' || isHidden) return null;

  return (
    <>
      {/* Inner Circle */}
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${position.x - 2}px, ${position.y - 2}px, 0)`, // Offset for 4x4 element
        }}
      >
        <div
          className={`relative h-4 w-4 rounded-full bg-gray-900 dark:bg-gray-700 transition-transform duration-300 ${
            isPointer ? 'scale-150 mix-blend-difference' : 'scale-100'
          }`}
        />
      </div>

      {/* Outer Ring */}
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${position.x - 5}px, ${position.y - 5}px, 0)`, // Offset for 10x10 element
        }}
      >
        <div
          className={`relative h-10 w-10 rounded-full border border-gray-900 dark:border-gray-100 transition-transform duration-300 ${
            isPointer ? 'scale-150 opacity-0' : 'scale-50 opacity-100'
          }`}
        />
      </div>
    </>
  );
};

export default Cursor;