/**
 * Color Configuration
 * Consistent black background and white text color scheme
 */

export const colors = {
  // Background Colors
  background: {
    primary: "#000000", // Pure black
    secondary: "rgba(0, 0, 0, 0.7)", // Semi-transparent black
    tertiary: "rgba(0, 0, 0, 0.5)", // More transparent black
    glass: "rgba(0, 0, 0, 0.5)", // Glass morphism background
    glassLight: "rgba(255, 255, 255, 0.05)", // Light glass overlay
    glassMedium: "rgba(255, 255, 255, 0.1)", // Medium glass overlay
  },

  // Text Colors
  text: {
    primary: "#ffffff", // Pure white
    secondary: "rgba(255, 255, 255, 0.9)", // Slightly transparent white
    tertiary: "rgba(255, 255, 255, 0.7)", // More transparent white
    muted: "rgba(255, 255, 255, 0.5)", // Muted white
    placeholder: "rgba(255, 255, 255, 0.5)", // Placeholder text
  },

  // Border Colors
  border: {
    default: "rgba(255, 255, 255, 0.1)", // Subtle border
    hover: "rgba(255, 255, 255, 0.3)", // Hover border
    active: "rgba(255, 255, 255, 0.5)", // Active border
    solid: "#ffffff", // Solid white border
  },

  // Accent Colors (for gradients and highlights)
  accent: {
    purple: "#8b5cf6",
    blue: "#3b82f6",
    cyan: "#06b6d4",
    pink: "#ec4899",
  },

  // Gradient Colors
  gradient: {
    primary: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
    secondary: "linear-gradient(135deg, #a855f7, #ec4899, #3b82f6)",
    purple: "linear-gradient(135deg, #8b5cf6, #a855f7)",
    blue: "linear-gradient(135deg, #3b82f6, #06b6d4)",
  },
} as const;

