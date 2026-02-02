interface FluidNetworksLogoProps {
  className?: string;
}

const FluidNetworksLogo = ({ className = "h-10 w-auto" }: FluidNetworksLogoProps) => {
  return (
    <svg 
      viewBox="0 0 280 50" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7ED957" />
          <stop offset="100%" stopColor="#14B8A6" />
        </linearGradient>
      </defs>

      {/* Power Symbol Circle with Orbits */}
      <g transform="translate(25, 25)">
        {/* Outer orbital dots */}
        <g className="animate-pulse-subtle" style={{ transformOrigin: 'center' }}>
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) * (Math.PI / 180);
            const radius = 22;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const size = i % 3 === 0 ? 2.5 : 1.5;
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={size}
                fill="url(#greenGradient)"
                opacity={0.6 + (i % 3) * 0.15}
              />
            );
          })}
        </g>
        
        {/* Inner power circle */}
        <circle cx="0" cy="0" r="14" fill="url(#greenGradient)" />
        
        {/* Power symbol */}
        <g stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none">
          {/* Vertical line */}
          <line x1="0" y1="-8" x2="0" y2="-2" />
          {/* Arc */}
          <path d="M -6 -4 A 8 8 0 1 0 6 -4" />
        </g>
      </g>
      
      {/* FLUID text */}
      <text 
        x="55" 
        y="28" 
        fontFamily="Inter, -apple-system, sans-serif" 
        fontSize="22" 
        fontWeight="700" 
        fill="url(#logoGradient)"
        letterSpacing="-0.5"
      >
        FLUID
      </text>
      
      {/* NETWORKS text */}
      <text 
        x="118" 
        y="28" 
        fontFamily="Inter, -apple-system, sans-serif" 
        fontSize="22" 
        fontWeight="700" 
        fill="#1E293B"
        letterSpacing="-0.5"
      >
        NETWORKS
      </text>
      
      {/* Tagline */}
      <text 
        x="98" 
        y="44" 
        fontFamily="Inter, -apple-system, sans-serif" 
        fontSize="8" 
        fontWeight="500" 
        fill="#64748B"
        letterSpacing="2"
      >
        POWER OVER ETHERNET
      </text>
    </svg>
  );
};

export default FluidNetworksLogo;
