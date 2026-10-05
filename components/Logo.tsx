'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'auto';
  showWordmark?: boolean;
  is3D?: boolean;
  withContainer?: boolean;
}

export default function Logo({
  className = '',
  size = 'md',
  variant = 'auto',
  showWordmark = true,
  is3D = false,
  withContainer = false,
}: LogoProps) {
  // Sizing definitions for both Full Horizontal Logo and Monogram Symbol
  const sizeConfig = {
    sm: {
      fullWidth: 130,
      fullHeight: 39,
      symbolWidth: 32,
      symbolHeight: 20,
      containerClass: 'w-8 h-8 rounded-xl p-1',
    },
    md: {
      fullWidth: 165,
      fullHeight: 49,
      symbolWidth: 44,
      symbolHeight: 28,
      containerClass: 'w-10 h-10 sm:w-11 sm:h-11 rounded-2xl p-1.5',
    },
    lg: {
      fullWidth: 200,
      fullHeight: 60,
      symbolWidth: 56,
      symbolHeight: 35,
      containerClass: 'w-13 h-13 sm:w-14 sm:h-14 rounded-2xl p-2',
    },
    xl: {
      fullWidth: 250,
      fullHeight: 75,
      symbolWidth: 72,
      symbolHeight: 45,
      containerClass: 'w-16 h-16 sm:w-20 sm:h-20 rounded-3xl p-2.5',
    },
  };

  const { fullWidth, fullHeight, symbolWidth, symbolHeight, containerClass } = sizeConfig[size];

  // Pick the image source based on variant & wordmark
  let imageSrc = '/logo-regiovest.png';
  let targetWidth = fullWidth;
  let targetHeight = fullHeight;

  if (showWordmark) {
    if (variant === 'light') {
      imageSrc = '/logo-regiovest-white.png';
    } else {
      imageSrc = '/logo-regiovest.png';
    }
  } else {
    // Monogram symbol only
    targetWidth = symbolWidth;
    targetHeight = symbolHeight;
    if (is3D) {
      imageSrc = '/logo-regiovest-3d.png';
    } else if (variant === 'light') {
      imageSrc = '/logo-regiovest-symbol.png'; // Rich blue with high contrast
    } else {
      imageSrc = '/logo-regiovest-symbol.png';
    }
  }

  // CSS Filter to enhance blue saturation and high-contrast sharpness on the 'R'
  const filterClass =
    variant === 'light'
      ? 'filter drop-shadow-[0_2px_8px_rgba(59,130,246,0.3)] contrast-105'
      : 'filter drop-shadow-[0_1px_4px_rgba(37,99,235,0.12)] contrast-105 saturate-105';

  return (
    <div
      className={`inline-flex items-center select-none font-display ${className}`}
    >
      {withContainer ? (
        <div
          className={`${containerClass} bg-[#0B1B3D] flex items-center justify-center shrink-0 shadow-md shadow-slate-900/20 border border-slate-800 transition-transform group-hover:scale-105`}
        >
          <Image
            src={is3D ? '/logo-regiovest-3d.png' : '/logo-regiovest-symbol.png'}
            alt="RegioVest"
            width={symbolWidth}
            height={symbolHeight}
            className="w-auto h-auto max-w-full max-h-full object-contain filter drop-shadow-sm brightness-110"
            priority
            unoptimized
          />
        </div>
      ) : (
        <div
          className="relative shrink-0 flex items-center justify-center transition-transform group-hover:scale-102"
          style={{ width: targetWidth, height: targetHeight }}
        >
          <Image
            src={imageSrc}
            alt="RegioVest"
            width={targetWidth}
            height={targetHeight}
            className={`w-full h-full object-contain ${filterClass}`}
            priority
            unoptimized
          />
        </div>
      )}
    </div>
  );
}
