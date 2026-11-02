'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  hasCountdown?: boolean;
  onViewAll?: () => void;
  viewAllLinkText?: string;
}

export default function SectionHeader({
  title,
  hasCountdown = false,
  onViewAll,
  viewAllLinkText = 'Lihat Semua'
}: SectionHeaderProps) {
  // Countdown state starting from 02:15:47
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 15,
    seconds: 47
  });

  useEffect(() => {
    if (!hasCountdown) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 2, minutes: 59, seconds: 59 }; // reset loop
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [hasCountdown]);

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-4 sm:mb-5 pt-3">
      {/* Title & Countdown Timer */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-5">
        <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
          {title}
        </h2>

        {hasCountdown && (
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-lg shadow-2xs">
            <Clock className="w-4 h-4 text-[#0066FF] animate-pulse" />
            <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-700">
              <span className="text-gray-500 font-medium">Berakhir dalam:</span>
              <span className="font-mono font-bold text-gray-950 bg-gray-100 px-1.5 py-0.5 rounded text-xs">
                {pad(timeLeft.hours)}
              </span>
              <span className="text-gray-400 font-bold">:</span>
              <span className="font-mono font-bold text-gray-950 bg-gray-100 px-1.5 py-0.5 rounded text-xs">
                {pad(timeLeft.minutes)}
              </span>
              <span className="text-gray-400 font-bold">:</span>
              <span className="font-mono font-bold text-[#0066FF] bg-blue-50 px-1.5 py-0.5 rounded text-xs">
                {pad(timeLeft.seconds)}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* View All Button */}
      {onViewAll && (
        <button
          onClick={onViewAll}
          className="inline-flex items-center gap-1 text-sm font-bold text-[#0066FF] hover:text-[#0052cc] group transition-colors cursor-pointer"
        >
          <span>{viewAllLinkText}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
        </button>
      )}
    </div>
  );
}
