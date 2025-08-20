import { useEffect } from 'react';

const SparkleCursor = () => {
  useEffect(() => {
    const colors = ['#FFD700', '#FF8C00', '#FF4500', '#FB68EE', '#FF69B4', '#00CED1'];

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      const sparkle = document.createElement('div');
      sparkle.className = 'fixed rounded-full pointer-events-none z-[9999]';
      
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 15 + 5; // 5px to 20px
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 50 + 10;

      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      sparkle.style.backgroundColor = color;
      sparkle.style.boxShadow = `0 0 10px ${color}`;
      sparkle.style.transform = 'translate(-50%, -50%)';
      sparkle.style.opacity = '1';

      document.body.appendChild(sparkle);

      sparkle.animate([
        { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        {
          opacity: 0,
          transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(0)`
        }
      ], {
        duration: 600,
        easing: 'ease-out',
      }).onfinish = () => sparkle.remove();
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null; // nothing to render directly
};

export default SparkleCursor;
