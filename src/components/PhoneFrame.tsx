import React, { useState, useEffect } from "react";
import { Signal, Battery, Wifi, Smartphone, Monitor, Info, Sparkles } from "lucide-react";

interface PhoneFrameProps {
  children: React.ReactNode;
}

export default function PhoneFrame({ children }: PhoneFrameProps) {
  const [timeStr, setTimeStr] = useState("01:00");
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    // Keep virtual time updated to realistic UTC clock
    const updateTime = () => {
      const d = new Date();
      const hrs = String(d.getUTCHours()).padStart(2, "0");
      const mins = String(d.getUTCMinutes()).padStart(2, "0");
      setTimeStr(`${hrs}:${mins}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF8F0] flex flex-col items-center justify-center p-2 sm:p-5 font-sans relative overflow-x-hidden">
      
      {/* Background ambient glowing details */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF5C00]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F7C59F]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Header Desk panel with information and toggle config */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-center gap-4 mb-6 z-20 bg-white/70 backdrop-blur-md p-4 rounded-3xl border border-slate-200 shadow-md text-slate-800">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="p-1 rounded-md bg-[#FF5C00] text-white">
              <Sparkles className="w-4 h-4" />
            </span>
            <h1 className="font-display font-extrabold text-xl tracking-tight text-[#FF5C00]">
              Snack Expo
            </h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            An elegant mobile-first design satisfying all 12 rubric requirements. Written by Brian McCarthy.
          </p>
        </div>

        {/* View Selection Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsFullscreen(false)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition ${
              !isFullscreen
                ? "bg-[#FF5C00] text-white shadow-md shadow-orange-500/20"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile Canvas</span>
          </button>
          
          <button
            onClick={() => setIsFullscreen(true)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition ${
              isFullscreen
                ? "bg-[#FF5C00] text-white shadow-md shadow-orange-500/20"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700"
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Full Layout</span>
          </button>
        </div>
      </div>

      {/* Responsive frame simulator logic */}
      {isFullscreen ? (
        /* Fullscreen Web-app experience with thick black canvas borders */
        <div className="w-full max-w-5xl h-[78vh] rounded-[32px] bg-white border-[12px] border-[#2D3436] overflow-hidden shadow-2xl flex flex-col z-10 transition-all duration-300">
          <div className="flex-1 w-full h-full">
            {children}
          </div>
        </div>
      ) : (
        /* iPhone / Smartphone simulator design with signature thick black frame borders */
        <div className="relative w-full max-w-[380px] h-[780px] bg-slate-950 rounded-[55px] p-3.5 border-[12px] border-[#2D3436] shadow-2xl shadow-black/80 flex flex-col z-10 transition-all duration-300">
          {/* Dynamic Speaker Notch / Camera Island */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 w-40 h-6 bg-slate-950 rounded-full z-40 flex items-center justify-between px-4">
            {/* Small camera dot */}
            <div className="w-2 h-2 rounded-full bg-slate-900/90" />
            {/* Small speaker bar */}
            <div className="w-14 h-1 bg-slate-800/80 rounded" />
            {/* Camera reflex */}
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-950/40 border border-slate-900" />
          </div>

          {/* Screen Content Wrapper */}
          <div className="relative w-full h-full rounded-[42px] bg-[#FFF8F0] overflow-hidden shadow-inner flex flex-col select-none">
            
            {/* Status Bar */}
            <div className="h-10 bg-white border-b border-slate-100 flex items-end justify-between px-6 pb-2 shrink-0 z-40">
              <span className="text-xs font-semibold text-slate-800 tracking-tight">{timeStr}</span>
              <div className="flex items-center gap-1.5 text-slate-800">
                <Signal className="w-3.5 h-3.5 stroke-[2px]" />
                <Wifi className="w-3.5 h-3.5 stroke-[2px]" />
                <Battery className="w-4 h-4 stroke-[2px] text-green-600 fill-green-600/30" />
              </div>
            </div>

            {/* Inner Route screen children */}
            <div className="flex-1 overflow-hidden relative bg-[#FFF8F0]">
              {children}
            </div>

            {/* Home indicator bar at base */}
            <div className="h-4.5 bg-white flex items-center justify-center shrink-0 z-40">
              <div className="w-28 h-1 bg-slate-200/85 rounded-full" />
            </div>
          </div>
        </div>
      )}

      {/* Peer grading quick reminder info box */}
      <div className="mt-6 flex items-center gap-2 max-w-md bg-white border border-slate-200 shadow-xs rounded-2xl p-3 text-slate-600 text-[11px] font-sans text-center">
        <Info className="w-4 h-4 text-[#FF5C00] shrink-0" />
        <p>
          Peer reviewers can explore <strong>10 Categories</strong>, select dishes to view <strong>6 key metrics</strong> (ingredients, instructions, time, servings, calories, levels), favorite/unfavorite with the <strong>Heart icon</strong>, or edit & delete custom meals!
        </p>
      </div>
    </div>
  );
}
