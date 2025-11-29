<template>
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    class="w-full h-full"
  >
    <defs>
      <!-- Main gradient for file background -->
      <linearGradient id="fileGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color: #3b82f6; stop-opacity: 1" />
        <stop offset="100%" style="stop-color: #1d4ed8; stop-opacity: 1" />
      </linearGradient>

      <!-- Fold gradient -->
      <linearGradient id="foldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color: #1e40af; stop-opacity: 1" />
        <stop offset="100%" style="stop-color: #1e3a8a; stop-opacity: 1" />
      </linearGradient>

      <!-- Shadow filter -->
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow
          dx="0"
          dy="2"
          stdDeviation="4"
          flood-color="rgba(0,0,0,0.1)"
        />
      </filter>

      <!-- Inner shadow for depth -->
      <filter id="innerShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feOffset dx="0" dy="1" />
        <feGaussianBlur stdDeviation="1" result="offset-blur" />
        <feFlood flood-color="rgba(0,0,0,0.05)" />
        <feComposite in2="offset-blur" operator="in" />
      </filter>
    </defs>

    <!-- Main file body -->
    <path
      d="M12 8 C12 6.895 12.895 6 14 6 L38 6 L52 20 L52 56 C52 57.105 51.105 58 50 58 L14 58 C12.895 58 12 57.105 12 56 Z"
      fill="url(#fileGradient)"
      stroke="rgba(0,0,0,0.08)"
      stroke-width="0.5"
      filter="url(#shadow)"
    />

    <!-- Folded corner -->
    <path
      d="M38 6 L38 18 C38 19.105 38.895 20 40 20 L52 20 Z"
      fill="url(#foldGradient)"
      stroke="rgba(0,0,0,0.1)"
      stroke-width="0.5"
    />

    <!-- Fold crease line -->
    <path
      d="M38 6 L52 20"
      stroke="rgba(0,0,0,0.08)"
      stroke-width="0.5"
      fill="none"
    />

    <!-- Document lines (Apple-style) -->
    <g opacity="0.6">
      <rect x="18" y="28" width="20" height="1.5" rx="0.75" fill="#ffffff" />
      <rect x="18" y="32" width="24" height="1.5" rx="0.75" fill="#ffffff" />
      <rect x="18" y="36" width="16" height="1.5" rx="0.75" fill="#ffffff" />
      <rect x="18" y="40" width="22" height="1.5" rx="0.75" fill="#ffffff" />
      <rect x="18" y="44" width="18" height="1.5" rx="0.75" fill="#ffffff" />
    </g>

    <!-- Subtle highlight on top edge -->
    <path
      d="M14 6 C12.895 6 12 6.895 12 8 L12 12 C12 10.895 12.895 10 14 10 L38 10 L48 16 L52 20 L52 16 L38 6 Z"
      fill="rgba(255,255,255,0.3)"
    />

    <!-- Bottom subtle shadow -->
    <ellipse cx="32" cy="59" rx="18" ry="2" fill="rgba(0,0,0,0.06)" />
  </svg>
</template>
