"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string; // ISO date string
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-end space-y-4">
      <div className="flex gap-5 md:gap-8">
        {/* Days */}
        <div className="flex flex-col items-center">
          <div 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tabular-nums leading-none mb-3"
            style={{
              textShadow: '0 0 30px rgba(255,255,255,0.6), 0 0 60px rgba(168,85,247,0.5), 0 0 90px rgba(59,130,246,0.4)',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 900,
              letterSpacing: '0.05em',
            }}
          >
            {String(timeLeft.days).padStart(2, "0")}
          </div>
          <div className="text-xs md:text-sm text-white/80 uppercase tracking-[0.15em] font-semibold">
            Days
          </div>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center">
          <div 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tabular-nums leading-none mb-3"
            style={{
              textShadow: '0 0 30px rgba(255,255,255,0.6), 0 0 60px rgba(168,85,247,0.5), 0 0 90px rgba(59,130,246,0.4)',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 900,
              letterSpacing: '0.05em',
            }}
          >
            {String(timeLeft.hours).padStart(2, "0")}
          </div>
          <div className="text-xs md:text-sm text-white/80 uppercase tracking-[0.15em] font-semibold">
            Hours
          </div>
        </div>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tabular-nums leading-none mb-3"
            style={{
              textShadow: '0 0 30px rgba(255,255,255,0.6), 0 0 60px rgba(168,85,247,0.5), 0 0 90px rgba(59,130,246,0.4)',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 900,
              letterSpacing: '0.05em',
            }}
          >
            {String(timeLeft.minutes).padStart(2, "0")}
          </div>
          <div className="text-xs md:text-sm text-white/80 uppercase tracking-[0.15em] font-semibold">
            Mins
          </div>
        </div>
      </div>
    </div>
  );
}

