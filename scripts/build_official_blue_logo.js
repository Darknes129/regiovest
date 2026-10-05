const sharp = require('sharp');
const fs = require('fs');

// Exact geometric path from the user's uploaded blueprint image
const pathData = `
  M 190 320
  L 236 390
  H 412
  C 446 390 460 410 460 439
  C 460 468 446 488 412 488
  H 298
  L 446 710
  H 538
  L 516 510
  L 628 710
  L 826 360
  H 740
  L 628 554
  L 538 386
  C 555 350 515 320 430 320
  H 190
  Z
`;

// 1. High-Res Standalone Monogram in Rich Blue Tones (ViewBox snug: 180 300 660 420)
// Using RegioVest Royal Blue gradient with electric blue accents
const svgSymbolBlue = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="175 305 665 415" width="1330" height="830" fill="none">
  <defs>
    <!-- RegioVest Brand Blue Gradient -->
    <linearGradient id="regioBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B82F6" />
      <stop offset="40%" stop-color="#2563EB" />
      <stop offset="85%" stop-color="#1D4ED8" />
      <stop offset="100%" stop-color="#1E40AF" />
    </linearGradient>

    <!-- Subtle inner bevel highlight -->
    <linearGradient id="bevelLight" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#93C5FD" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#1D4ED8" stop-opacity="0.2" />
    </linearGradient>

    <filter id="softGlow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#1E40AF" flood-opacity="0.25" />
    </filter>
  </defs>

  <path
    d="${pathData}"
    fill="url(#regioBlueGrad)"
    stroke="url(#bevelLight)"
    stroke-width="3"
    stroke-linejoin="round"
    filter="url(#softGlow)"
  />
</svg>`;

// 2. Full Horizontal Logo (Emblem + Wordmark "RegioVest" in authentic Blue tones)
const svgFullHorizontalBlue = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 480" width="2400" height="720" fill="none">
  <defs>
    <linearGradient id="hBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3B82F6" />
      <stop offset="50%" stop-color="#2563EB" />
      <stop offset="100%" stop-color="#1D4ED8" />
    </linearGradient>

    <linearGradient id="wordGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0B1B3D" />
      <stop offset="65%" stop-color="#1E3A8A" />
      <stop offset="100%" stop-color="#2563EB" />
    </linearGradient>

    <filter id="hShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#1D4ED8" flood-opacity="0.2" />
    </filter>
  </defs>

  <!-- Official Monogram Symbol scaled & positioned on the left -->
  <g transform="translate(-120, -180) scale(1.1)" filter="url(#hShadow)">
    <path
      d="${pathData}"
      fill="url(#hBlueGrad)"
      stroke="#93C5FD"
      stroke-width="2.5"
      stroke-linejoin="round"
    />
  </g>

  <!-- Wordmark "RegioVest" in high-contrast navy & royal blue -->
  <text
    x="680"
    y="285"
    font-family="system-ui, -apple-system, 'Space Grotesk', 'Plus Jakarta Sans', 'Segoe UI', sans-serif"
    font-size="192"
    font-weight="900"
    letter-spacing="-4"
    fill="url(#wordGrad)"
  >RegioVest</text>
</svg>`;

// 3. Full Horizontal Logo White/Light (for dark footers)
const svgFullHorizontalWhite = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 480" width="2400" height="720" fill="none">
  <defs>
    <linearGradient id="whiteBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#60A5FA" />
      <stop offset="50%" stop-color="#3B82F6" />
      <stop offset="100%" stop-color="#2563EB" />
    </linearGradient>
  </defs>

  <!-- Official Monogram in Electric Blue -->
  <g transform="translate(-120, -180) scale(1.1)">
    <path
      d="${pathData}"
      fill="url(#whiteBlueGrad)"
      stroke="#BFDBFE"
      stroke-width="2.5"
      stroke-linejoin="round"
    />
  </g>

  <!-- Wordmark in crisp White -->
  <text
    x="680"
    y="285"
    font-family="system-ui, -apple-system, 'Space Grotesk', 'Plus Jakarta Sans', 'Segoe UI', sans-serif"
    font-size="192"
    font-weight="900"
    letter-spacing="-4"
    fill="#FFFFFF"
  >RegioVest</text>
</svg>`;

// 4. 3D Extruded Blue Emblem
const svg3DBlue = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="150 280 720 470" width="1440" height="940" fill="none">
  <defs>
    <linearGradient id="grad3dBlue" x1="20%" y1="0%" x2="80%" y2="100%">
      <stop offset="0%" stop-color="#60A5FA" />
      <stop offset="30%" stop-color="#3B82F6" />
      <stop offset="70%" stop-color="#2563EB" />
      <stop offset="100%" stop-color="#1D4ED8" />
    </linearGradient>

    <linearGradient id="bevelGlow" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#BFDBFE" stop-opacity="0.95" />
      <stop offset="100%" stop-color="#1E40AF" stop-opacity="0.3" />
    </linearGradient>

    <filter id="shadow3d" x="-20%" y="-20%" width="150%" height="150%">
      <feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#1E3A8A" flood-opacity="0.45" />
      <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#0F172A" flood-opacity="0.3" />
    </filter>
  </defs>

  <g filter="url(#shadow3d)">
    <path d="${pathData}" transform="translate(0, 10)" fill="#0F244F" opacity="0.9" />
    <path d="${pathData}" transform="translate(0, 5)" fill="#1E3A8A" opacity="0.95" />
    <path d="${pathData}" fill="url(#grad3dBlue)" stroke="url(#bevelGlow)" stroke-width="4" stroke-linejoin="round" />
  </g>
</svg>`;

async function build() {
  console.log('Rendering high-res official blue logos with sharp...');

  // Save the full horizontal logo (Emblem + "RegioVest" text) as transparent PNG
  await sharp(Buffer.from(svgFullHorizontalBlue)).png().toFile('public/logo-regiovest.png');
  console.log('✓ public/logo-regiovest.png (Full Horizontal Logo in Blue)');

  // Save white version for dark backgrounds
  await sharp(Buffer.from(svgFullHorizontalWhite)).png().toFile('public/logo-regiovest-white.png');
  console.log('✓ public/logo-regiovest-white.png (Horizontal Logo White/Blue for Dark Footer)');

  // Save standalone blue monogram symbol
  await sharp(Buffer.from(svgSymbolBlue)).png().toFile('public/logo-regiovest-symbol.png');
  console.log('✓ public/logo-regiovest-symbol.png (Standalone Monogram in Blue)');

  // Save 3D Blue version
  await sharp(Buffer.from(svg3DBlue)).png().toFile('public/logo-regiovest-3d.png');
  console.log('✓ public/logo-regiovest-3d.png (3D Monogram in Blue)');

  // Also write the SVGs for crisp scaling
  fs.writeFileSync('public/logo-regiovest.svg', svgFullHorizontalBlue);
  fs.writeFileSync('public/logo-regiovest-symbol.svg', svgSymbolBlue);
  fs.writeFileSync('public/logo-regiovest-white.svg', svgFullHorizontalWhite);
  fs.writeFileSync('public/logo-regiovest-3d.svg', svg3DBlue);

  console.log('All high-resolution blue assets successfully generated!');
}

build().catch(err => {
  console.error('Build error:', err);
  process.exit(1);
});
