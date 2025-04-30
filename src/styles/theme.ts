// Theme configuration for Tech Lumina website

export const theme = {
  colors: {
    // Primary brand colors
    primary: '#6B17ED', // Purple accent color
    background: '#130420', // Dark background
    text: '#FFFFFF',
    textSecondary: '#CCCCCC',
    
    // Background gradients
    gradients: {
      // Standard page background gradient
      page: 'bg-gradient-to-b from-black/50 via-[#1E0B2D]/50 to-black/50',
      // Hero section background gradient
      hero: 'bg-gradient-to-b from-[#130420]/80 via-[#1E0B2D]/90 to-black/80',
      // Card hover effect
      cardHover: 'bg-black/70',
    },
    
    // UI element colors
    ui: {
      card: 'bg-white/5',
      border: 'border-white/10',
      buttonPrimary: '#6B17ED',
      buttonHover: '#5812C5',
    }
  },
  
  // Typography
  typography: {
    fontFamily: {
      regular: 'var(--font-regular)',
      bold: 'var(--font-bold)',
    }
  },
  
  // Effects
  effects: {
    blur: 'backdrop-blur-sm',
    transition: 'transition-all duration-300',
    hover: 'hover:-translate-y-1',
  }
};
