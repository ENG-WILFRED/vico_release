"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const calculateTimeLeft = () => {
      // Release date: April 17, 2026
      const releaseDate = new Date("2026-04-17T00:00:00").getTime();
      const now = new Date().getTime();
      const difference = releaseDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-brand-400 to-brand-600 rounded-lg flex items-center justify-center shadow-lg">
          <span className="text-3xl sm:text-4xl font-bold text-white">
            {String(value).padStart(2, "0")}
          </span>
        </div>
        <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-brand-600/20 to-transparent"></div>
      </div>
      <p className="text-sm sm:text-base font-semibold text-brand-700 mt-3 uppercase tracking-wide">
        {label}
      </p>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center py-12 sm:py-16 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-brand-900 mb-2 text-center">
        Coming Soon
      </h2>
      <p className="text-base sm:text-lg text-brand-700 mb-8 sm:mb-12 text-center">
        VICO Launches on April 17, 2026
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>

      <div className="mt-12 sm:mt-16 text-center">
        <p className="text-sm sm:text-base text-brand-700">
          Get ready for the ultimate tennis community platform
        </p>
      </div>
    </div>
  );
}
