const fs = require('fs');

const pathData = `M 192 324 L 236 392 H 418 C 452 392 464 408 464 430 C 464 452 448 468 416 468 C 376 468 344 476 296 492 L 446 710 H 538 L 570 532 L 628 710 L 826 362 H 740 L 600 610 L 538 488 C 564 455 568 410 554 372 C 538 335 488 324 416 324 Z`;

// Dark icon on transparent/navy
const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="none">
  <rect width="1000" height="1000" rx="200" fill="#0B1B3D"/>
  <path d="${pathData}" fill="#FFFFFF"/>
</svg>`;

// Monogram alone with snug viewBox (no excess margins)
// Bounding box of path: X from 192 to 826 (width 634), Y from 320 to 710 (height 390)
const svgSymbol = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="180 310 660 410" fill="none">
  <path d="${pathData}" fill="currentColor"/>
</svg>`;

// Full horizontal lockup (Monogram + Wordmark "RegioVest")
const svgFull = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400" fill="none">
  <!-- Monogram -->
  <g transform="translate(-100, -160) scale(0.9)">
    <path d="${pathData}" fill="currentColor"/>
  </g>
  <!-- Wordmark -->
  <text
    x="540"
    y="235"
    font-family="system-ui, -apple-system, 'Space Grotesk', 'Plus Jakarta Sans', sans-serif"
    font-size="160"
    font-weight="800"
    letter-spacing="-3"
    fill="currentColor"
  >RegioVest</text>
</svg>`;

fs.writeFileSync('public/logo-regiovest-social.svg', svgIcon);
fs.writeFileSync('public/logo-regiovest-symbol.svg', svgSymbol);
fs.writeFileSync('public/logo-regiovest.svg', svgFull);

console.log('Successfully written official SVG files to public/');
