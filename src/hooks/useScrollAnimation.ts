
import { useEffect, useState } from 'react';

export const useScrollAnimation = (threshold: number = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    const elements = document.querySelectorAll('[data-scroll-animation]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return isVisible;
};
