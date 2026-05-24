import React, { useEffect } from "react";
import { motion } from "motion/react";
import { ChefHat } from "lucide-react";

interface WelcomeScreenProps {
  onFinish: () => void;
}

export default function WelcomeScreen({ onFinish }: WelcomeScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2800);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="flex flex-col items-center justify-between w-full h-full bg-brand-orange p-8 select-none relative overflow-hidden">
      {/* Expanding Decorative Background Circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 2.2, opacity: [0.15, 0.25, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
          className="absolute w-64 h-64 border border-white/30 rounded-full"
        />
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1.8, opacity: [0.15, 0.2, 0] }}
          transition={{ duration: 2.5, delay: 0.6, repeat: Infinity, ease: "easeOut" }}
          className="absolute w-64 h-64 border border-white/20 rounded-full"
        />
      </div>

      {/* Top spacing */}
      <div className="h-10" />

      {/* Animated Center Logo & Rings */}
      <div className="flex flex-col items-center z-10">
        <div className="relative flex items-center justify-center">
          {/* Ring 2: outer ring */}
          <motion.div
            initial={{ padding: 0 }}
            animate={{ padding: "32px" }}
            transition={{ type: "spring", stiffness: 40, damping: 15, delay: 0.3 }}
            className="rounded-full bg-white/10 backdrop-blur-xs shadow-lg"
          >
            {/* Ring 1: inner ring */}
            <motion.div
              initial={{ padding: 0 }}
              animate={{ padding: "24px" }}
              transition={{ type: "spring", stiffness: 50, damping: 12, delay: 0.1 }}
              className="rounded-full bg-white/15 shadow-inner"
            >
              <motion.div
                initial={{ scale: 0.3, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 80, damping: 12 }}
                className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-brand-orange shadow-md"
              >
                <ChefHat className="w-14 h-14" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Brand Text Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center mt-8 space-y-2"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-widest drop-shadow-md font-display">
            Snack Expo
          </h1>
          <p className="text-sm font-medium text-orange-100 tracking-wider uppercase">
            your signature recipe portfolio
          </p>
        </motion.div>
      </div>

      {/* Footer / Written by info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="w-full text-center z-10 text-white/90 text-xs font-semibold tracking-wider bg-black/15 py-2.5 rounded-full border border-white/10 shadow-xs"
      >
        Written by Brian McCarthy
      </motion.div>
    </div>
  );
}
