import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldAlert, Award } from 'lucide-react';
import { triggerHaptic, hapticSpring } from '../../utils/haptics';

interface UssrEasterEggProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UssrEasterEgg: React.FC<UssrEasterEggProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e && e.key === 'Escape') onClose();
    };
    if (isOpen) {
      triggerHaptic('medium');
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleClose = () => {
    triggerHaptic('light');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6"
        >
          {/* Dimmed backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-lg rounded-[32px] bg-[#141416] border border-red-500/30 shadow-[0_0_80px_rgba(205,0,0,0.35)] overflow-hidden z-10 flex flex-col text-center"
          >
            {/* Top Close Button */}
            <motion.button
              whileTap={hapticSpring.iconButton}
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Schließen"
            >
              <X className="w-4 h-4" />
            </motion.button>

            {/* Official Flag of the USSR (High-Quality SVG) */}
            <div className="relative w-full aspect-[2/1] bg-[#CD0000] flex items-center justify-center overflow-hidden shadow-inner">
              <svg
                viewBox="0 0 600 300"
                className="w-full h-full object-cover"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Red field */}
                <rect width="600" height="300" fill="#CD0000" />

                {/* Canton Group: Hammer, Sickle & Star */}
                <g transform="translate(45, 20) scale(1.15)">
                  {/* Star above hammer and sickle */}
                  <polygon
                    points="60,18 64,28 75,28 66,35 69,45 60,39 51,45 54,35 45,28 56,28"
                    fill="#FFD700"
                    stroke="#CD0000"
                    strokeWidth="1.5"
                  />

                  {/* Sickle */}
                  <path
                    d="M 64 45 
                       C 50 45, 36 58, 36 78 
                       C 36 98, 52 114, 72 114 
                       C 82 114, 91 109, 97 101 
                       C 98 99, 96 97, 94 98 
                       C 89 104, 80 108, 71 108 
                       C 55 108, 43 95, 43 78 
                       C 43 62, 53 50, 65 48 
                       C 67 47, 66 45, 64 45 Z"
                    fill="#FFD700"
                  />
                  {/* Sickle Handle */}
                  <path
                    d="M 72 114 L 84 134 C 86 137, 89 135, 87 132 L 77 114 Z"
                    fill="#FFD700"
                  />

                  {/* Hammer */}
                  <g transform="rotate(-45 60 85)">
                    {/* Handle */}
                    <rect x="56" y="45" width="8" height="60" rx="2" fill="#FFD700" />
                    {/* Head */}
                    <rect x="46" y="38" width="28" height="14" rx="2" fill="#FFD700" />
                  </g>
                </g>
              </svg>

              {/* Subtle sheen overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10 pointer-events-none" />
            </div>

            {/* Funny Propaganda / Engineering Text */}
            <div className="p-6 sm:p-8 space-y-4 text-left">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-red-500">
                <ShieldAlert className="w-4 h-4 text-red-500 animate-pulse" />
                <span>Geheimer Staats-Kernel aktiviert</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                Genosse Jacob meldet Dienstbereitschaft! ☭
              </h3>

              <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/20 space-y-2 text-xs sm:text-sm text-red-200/90 leading-relaxed font-sans">
                <p>
                  <strong>Offizielles Dekret Nr. 1922:</strong> Sämtliche Bugs und Speicher-Leaks wurden hiermit offiziell verstaatlicht und gleichmäßig auf alle CPU-Kerne umverteilt!
                </p>
                <div className="pt-2 border-t border-red-500/20 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-red-400">
                  <span>• Planerfüllung: 140%</span>
                  <span>• Latenz: 0.0 ms (parteilich geprüft)</span>
                  <span>• RAM: Volkseigentum</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-xs text-[#86868b]">
                  <Award className="w-3.5 h-3.5 text-yellow-500" />
                  <span>Held der Arbeit (Embedded Klasse 1)</span>
                </div>

                <motion.button
                  whileTap={hapticSpring.button}
                  onClick={handleClose}
                  className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold tracking-wide transition-colors shadow-[0_0_20px_rgba(205,0,0,0.4)] cursor-pointer"
                >
                  Zurück zum Kapitalismus
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
