"use client";

export default function LotusIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Minimal lotus-style icon */}
      <path
        d="M12 2L14.5 7L20 7L15.5 10L17.5 15L12 12L6.5 15L8.5 10L4 7L9.5 7L12 2Z"
        fill="white"
        opacity="0.95"
      />
      <path
        d="M12 4L13.25 7.5L17 7.5L14.25 9.5L15.5 13L12 11L8.5 13L9.75 9.5L7 7.5L10.75 7.5L12 4Z"
        fill="white"
        opacity="0.7"
      />
      <circle cx="12" cy="9.5" r="1" fill="white" opacity="0.9" />
    </svg>
  );
}

