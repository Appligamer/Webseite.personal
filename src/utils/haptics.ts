/**
 * Apple-grade subtle haptic feedback utilities.
 * Combines physical micro-vibrations (where supported) with crisp spring physics.
 */

export const triggerHaptic = (type: 'selection' | 'light' | 'medium' = 'light') => {
  try {
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      if (type === 'selection') {
        navigator.vibrate(8);
      } else if (type === 'light') {
        navigator.vibrate(12);
      } else if (type === 'medium') {
        navigator.vibrate(22);
      }
    }
  } catch {
    // Gracefully ignore environments without vibration hardware
  }
};

export const hapticSpring = {
  card: {
    scale: 0.982,
    transition: { type: 'spring', stiffness: 550, damping: 28 },
  },
  button: {
    scale: 0.955,
    transition: { type: 'spring', stiffness: 650, damping: 26 },
  },
  iconButton: {
    scale: 0.90,
    transition: { type: 'spring', stiffness: 700, damping: 24 },
  },
  pill: {
    scale: 0.94,
    transition: { type: 'spring', stiffness: 650, damping: 25 },
  },
} as const;
