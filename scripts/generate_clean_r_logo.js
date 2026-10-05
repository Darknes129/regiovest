const fs = require('fs');

const svgClean = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112" fill="none">
  <!-- Solid, perfectly readable vertical stem of the R -->
  <path
    d="M 26 20 V 86"
    stroke="currentColor"
    stroke-width="12"
    stroke-linecap="square"
  />

  <!-- Top horizontal overhanging bar and rounded bowl of the R -->
  <path
    d="M 10 20 H 56 C 76 20 90 32 90 47 C 90 62 76 72 56 72 H 26"
    stroke="currentColor"
    stroke-width="12"
    stroke-linecap="square"
    stroke-linejoin="miter"
  />

  <!-- The interlocked V formed by the R's leg and the V's right arm -->
  <path
    d="M 44 72 L 72 104 L 102 52"
    stroke="currentColor"
    stroke-width="12"
    stroke-linecap="square"
    stroke-linejoin="miter"
  />
</svg>`;

fs.writeFileSync('public/logo-regiovest-symbol.svg', svgClean);

// Horizontal logo lockup: Symbol + "RegioVest" wordmark
const svgFull = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 112" fill="none">
  <!-- Monogram Symbol -->
  <g transform="translate(0, 0)">
    <path
      d="M 26 20 V 86"
      stroke="#0B1B3D"
      stroke-width="12"
      stroke-linecap="square"
    />
    <path
      d="M 10 20 H 56 C 76 20 90 32 90 47 C 90 62 76 72 56 72 H 26"
      stroke="#0B1B3D"
      stroke-width="12"
      stroke-linecap="square"
      stroke-linejoin="miter"
    />
    <path
      d="M 44 72 L 72 104 L 102 52"
      stroke="#0B1B3D"
      stroke-width="12"
      stroke-linecap="square"
      stroke-linejoin="miter"
    />
  </g>

  <!-- Wordmark "RegioVest" matching the official logo -->
  <text
    x="126"
    y="78"
    font-family="system-ui, -apple-system, 'Space Grotesk', 'Plus Jakarta Sans', sans-serif"
    font-size="64"
    font-weight="700"
    letter-spacing="-1.5"
    fill="#0B1B3D"
  >RegioVest</text>
</svg>`;

fs.writeFileSync('public/logo-regiovest.svg', svgFull);

// Square icon for social media / favicon (Navy background + White symbol)
const svgSocial = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
  <rect width="512" height="512" rx="110" fill="#0B1B3D"/>
  <g transform="translate(100, 100) scale(2.8)" stroke="#FFFFFF">
    <path
      d="M 26 20 V 86"
      stroke-width="12"
      stroke-linecap="square"
    />
    <path
      d="M 10 20 H 56 C 76 20 90 32 90 47 C 90 62 76 72 56 72 H 26"
      stroke-width="12"
      stroke-linecap="square"
      stroke-linejoin="miter"
    />
    <path
      d="M 44 72 L 72 104 L 102 52"
      stroke-width="12"
      stroke-linecap="square"
      stroke-linejoin="miter"
    />
  </g>
</svg>`;

fs.writeFileSync('public/logo-regiovest-social.svg', svgSocial);

console.log('Regenerated all SVGs with clean, unmistakable R and V!');
