export default function SectionDivider() {
  return (
    <div className="relative w-full pt-8 md:pt-12 pb-4 md:pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[0.5px] w-full overflow-hidden">
          {/* Main white line with fade at edges */}
          <div 
            className="absolute inset-0 h-[0.5px] bg-white"
            style={{
              boxShadow: '0 0 6px rgba(255, 255, 255, 0.7), 0 0 12px rgba(255, 255, 255, 0.5)',
              maskImage: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.3) 5%, white 15%, white 85%, rgba(255,255,255,0.3) 95%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.3) 5%, white 15%, white 85%, rgba(255,255,255,0.3) 95%, transparent 100%)',
            }}
          ></div>
          
          {/* Glow effect with stronger blur at edges */}
          <div 
            className="absolute inset-0 h-[0.5px] bg-white opacity-50 blur-[3px]"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.2) 8%, rgba(255,255,255,0.6) 20%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,0.2) 92%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.2) 8%, rgba(255,255,255,0.6) 20%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,0.2) 92%, transparent 100%)',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

