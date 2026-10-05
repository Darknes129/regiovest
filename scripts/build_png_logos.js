const sharp = require('sharp');
const fs = require('fs');

const pathData = `M 192 324 L 236 392 H 418 C 452 392 464 408 464 430 C 464 452 448 468 416 468 C 376 468 344 476 296 492 L 446 710 H 538 L 570 532 L 628 710 L 826 362 H 740 L 600 610 L 538 488 C 564 455 568 410 554 372 C 538 335 488 324 416 324 Z`;

// 1. Crisp Vibrant Royal Blue Transparent PNG (#2563EB)
const svgBlueFlat = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="170 300 680 430" width="1024" height="648" fill="none">
  <path d="${pathData}" fill="#2563EB"/>
</svg>`;

// 2. Crisp White Transparent PNG (#FFFFFF) for dark footers
const svgWhite = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="170 300 680 430" width="1024" height="648" fill="none">
  <path d="${pathData}" fill="#FFFFFF"/>
</svg>`;

// 3. Premium 3D BLUE Rendered Version (Vibrant Electric/Royal Blue with 3D Depth & Specular Sheen)
const svgBlue3D = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="150 280 720 470" width="1024" height="668" fill="none">
  <defs>
    <!-- Vibrant Royal Blue 3D Gradient -->
    <linearGradient id="blue3dGrad" x1="20%" y1="0%" x2="80%" y2="100%">
      <stop offset="0%" stop-color="#60A5FA" />
      <stop offset="25%" stop-color="#3B82F6" />
      <stop offset="65%" stop-color="#2563EB" />
      <stop offset="100%" stop-color="#1D4ED8" />
    </linearGradient>

    <!-- 3D Bevel Luminous Edge Glow -->
    <linearGradient id="blueEdgeGlow" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#93C5FD" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#1E40AF" stop-opacity="0.3" />
    </linearGradient>

    <!-- Deep 3D Shadow -->
    <filter id="blueShadow3d" x="-20%" y="-20%" width="150%" height="150%">
      <feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#1E3A8A" flood-opacity="0.5" />
      <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#0F172A" flood-opacity="0.35" />
    </filter>
  </defs>

  <!-- 3D Extrusion Depth Layers -->
  <g filter="url(#blueShadow3d)">
    <!-- Base depth extrusions in deep navy-blue -->
    <path d="${pathData}" transform="translate(0, 10)" fill="#0F244F" opacity="0.9" />
    <path d="${pathData}" transform="translate(0, 5)" fill="#1E3A8A" opacity="0.95" />
    
    <!-- Top Face in Rich Glossy 3D Blue -->
    <path
      d="${pathData}"
      fill="url(#blue3dGrad)"
      stroke="url(#blueEdgeGlow)"
      stroke-width="4"
      stroke-linejoin="round"
    />
  </g>
</svg>`;

// 4. Square 3D Social Media Icon with Deep Midnight Navy Base & 3D Blue Emblem
const svgIcon3D = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1024" height="1024" fill="none">
  <defs>
    <!-- Background Gradient: Deep Midnight Navy -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F2042" />
      <stop offset="50%" stop-color="#0B1B3D" />
      <stop offset="100%" stop-color="#050E21" />
    </linearGradient>

    <!-- 3D Blue Gradient for Icon Emblem -->
    <linearGradient id="iconBlueGrad" x1="15%" y1="0%" x2="85%" y2="100%">
      <stop offset="0%" stop-color="#93C5FD" />
      <stop offset="30%" stop-color="#3B82F6" />
      <stop offset="70%" stop-color="#2563EB" />
      <stop offset="100%" stop-color="#1D4ED8" />
    </linearGradient>

    <!-- Edge Specular Highlight -->
    <linearGradient id="iconEdgeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#BFDBFE" stop-opacity="0.95" />
      <stop offset="100%" stop-color="#1E40AF" stop-opacity="0.3" />
    </linearGradient>

    <!-- Deep Ambient Drop Shadow -->
    <filter id="iconShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="24" stdDeviation="22" flood-color="#000000" flood-opacity="0.6" />
      <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#1E3A8A" flood-opacity="0.4" />
    </filter>
  </defs>

  <!-- Dark Navy Squircle Background -->
  <rect width="1000" height="1000" rx="220" fill="url(#bgGrad)"/>
  <rect width="996" height="996" x="2" y="2" rx="218" stroke="#2563EB" stroke-opacity="0.35" stroke-width="4"/>

  <!-- 3D Extruded Blue Emblem -->
  <g filter="url(#iconShadow)">
    <path d="${pathData}" transform="translate(0, 16)" fill="#020617" opacity="0.8" />
    <path d="${pathData}" transform="translate(0, 10)" fill="#0F244F" opacity="0.9" />
    <path d="${pathData}" transform="translate(0, 5)" fill="#1E3A8A" opacity="0.95" />
    
    <!-- Face with 3D Blue Gloss -->
    <path
      d="${pathData}"
      fill="url(#iconBlueGrad)"
      stroke="url(#iconEdgeGlow)"
      stroke-width="4"
      stroke-linejoin="round"
    />
  </g>
</svg>`;

async function build() {
  console.log('Generating BLUE PNG assets with sharp...');
  
  // 1. Transparent PNG Blue
  await sharp(Buffer.from(svgBlueFlat)).png().toFile('public/logo-regiovest.png');
  console.log('✓ public/logo-regiovest.png (Royal Blue)');

  // 2. Transparent PNG White
  await sharp(Buffer.from(svgWhite)).png().toFile('public/logo-regiovest-white.png');
  console.log('✓ public/logo-regiovest-white.png (White)');

  // 3. 3D Transparent Blue PNG
  await sharp(Buffer.from(svgBlue3D)).png().toFile('public/logo-regiovest-3d.png');
  console.log('✓ public/logo-regiovest-3d.png (3D Royal Blue)');

  // 4. 3D App Icon PNG (Square)
  await sharp(Buffer.from(svgIcon3D)).png().toFile('public/logo-regiovest-icon.png');
  console.log('✓ public/logo-regiovest-icon.png (3D Icon with Blue Emblem)');

  // Also save the SVGs directly
  fs.writeFileSync('public/logo-regiovest-3d.svg', svgBlue3D);
  fs.writeFileSync('public/logo-regiovest-icon.svg', svgIcon3D);
  fs.writeFileSync('public/logo-regiovest.svg', svgBlueFlat);

  console.log('All Blue PNG and 3D assets generated successfully!');
}

build().catch(err => {
  console.error('Error generating blue PNGs:', err);
  process.exit(1);
});
