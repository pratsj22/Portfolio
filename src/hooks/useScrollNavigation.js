import { useState, useEffect } from 'react';

const useScrollNavigation = (isProgrammaticScroll) => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { id: 'home', href: '/' },
    { id: 'skills', href: '#skills' },
    { id: 'experience', href: '#experience' },
    { id: 'projects', href: '#projects' },
    { id: 'contact', href: '#contact' }
  ];

  useEffect(() => {
    // Function to determine which section is currently in view
    const getCurrentSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight -200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            return i;
          }
        }
      }
      return activeSection;
    };

    // Throttle function to limit scroll event frequency
    let ticking = false;
    const handleScroll = () => {
      if (isProgrammaticScroll && isProgrammaticScroll.current) return;
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentSection = getCurrentSection();
          setActiveSection(prevSection => {
            if (currentSection !== prevSection) {
              return currentSection;
            }
            return prevSection;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check after a short delay to ensure all elements are rendered
    setTimeout(handleScroll, 50);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isProgrammaticScroll]);

  const updateActiveSection = (index) => {
    setActiveSection(index);
  };

  return {
    activeSection,
    updateActiveSection,
    sections
  };
};

export default useScrollNavigation; 