import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: 500, label: 'Happy Clients', icon: '😊', suffix: '+' },
    { number: 98, label: 'Satisfaction Rate', icon: '⭐', suffix: '%' },
    { number: 1200, label: 'Projects Completed', icon: '🚀', suffix: '+' },
    { number: 24, label: 'Support Hours', icon: '🕐', suffix: '/7' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-3">{stat.icon}</div>
              <div className="text-4xl lg:text-5xl font-bold">
                {inView && (
                  <CountUp
                    end={stat.number}
                    duration={2.5}
                    suffix={stat.suffix}
                    separator=","
                  />
                )}
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