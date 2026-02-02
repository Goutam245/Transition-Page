import { useEffect, useState, useRef } from 'react';

const stats = [
  { value: 500, suffix: '+', label: 'Clients Served', color: 'from-ocean-blue to-electric-purple' },
  { value: 99.9, suffix: '%', label: 'Uptime Guaranteed', color: 'from-vibrant-teal to-ocean-blue' },
  { value: 24, suffix: '/7', label: 'Expert Support', color: 'from-electric-purple to-rose-pink' },
  { value: 15, suffix: '+', label: 'Years Experience', color: 'from-lime-green to-vibrant-teal' },
];

const AnimatedNumber = ({ value, suffix, color }: { value: number; suffix: string; color: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current * 10) / 10);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className={`text-5xl lg:text-6xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
      {count === 99.9 ? '99.9' : Math.floor(count)}
      <span>{suffix}</span>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      
      {/* Animated Orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-ocean-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-electric-purple/20 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} color={stat.color} />
              <p className="text-sm font-medium text-gray-400 mt-3 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
