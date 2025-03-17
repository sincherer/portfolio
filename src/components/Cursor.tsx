import React, { useEffect, useState } from 'react';

interface CursorProps {
  className?: string;
}

const Cursor: React.FC<CursorProps> = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Update cursor position
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Check if the cursor should change to pointer
    const updateCursorStyle = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      const computedStyle = hoveredElement ? window.getComputedStyle(hoveredElement).cursor : 'default';
      setIsPointer(computedStyle === 'pointer');
    };

    // Handle visibility on mouse enter/leave
    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);

    // Attach event listeners
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mousemove', updateCursorStyle);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      // Clean up event listeners
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mousemove', updateCursorStyle);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [position]);

  // Hide cursor on server-side rendering
  if (typeof window === 'undefined' || isHidden) return null;

  return (
    <>
      {/* Inner Circle */}
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: 'opacity 150ms ease-in-out',
        }}
      >
        <div
          className={`relative -ml-2 -mt-2 h-4 w-4 rounded-full bg-gray-900 dark:bg-gray-700 transition-transform duration-300 ${
            isPointer ? 'scale-150 mix-blend-difference' : 'scale-100'
          }`}
        />
      </div>

      {/* Outer Ring */}
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: 'opacity 150ms ease-in-out',
        }}
      >
        <div
          className={`relative -ml-5 -mt-5 h-10 w-10 rounded-full border border-gray-900 dark:border-gray-100 transition-transform duration-300 ${
            isPointer ? 'scale-150 opacity-0' : 'scale-50 opacity-100'
          }`}
        />
      </div>
    </>
  );
};

export default Cursor;