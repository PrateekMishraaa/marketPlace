import React, { useState, useEffect, useRef } from 'react';

const Stats = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { target: 500, label: 'Happy Clients', icon: '😊', suffix: '+' },
    { target: 98, label: 'Satisfaction Rate', icon: '⭐', suffix: '%' },
    { target: 1200, label: 'Projects Completed', icon: '🚀', suffix: '+' },
    { target: 24, label: 'Support Hours', icon: '🕐', suffix: '/7' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Animate counts
          stats.forEach((stat, index) => {
            let current = 0;
            const increment = Math.ceil(stat.target / 60);
            const interval = setInterval(() => {
              current += increment;
              if (current >= stat.target) {
                current = stat.target;
                clearInterval(interval);
              }
              setCounts(prev => {
                const newCounts = [...prev];
                newCounts[index] = current;
                return newCounts;
              });
            }, 30);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div ref={sectionRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-3">{stat.icon}</div>
              <div className="text-4xl lg:text-5xl font-bold">
                {counts[index]}{stat.suffix}
              </div>
              <p className="text-lg opacity-90 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;