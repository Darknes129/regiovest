const fs = require('fs');

// We will construct the exact SVG based on this geometric analysis
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="none">
  <!-- Deep Navy Background of the Social Media Icon -->
  <rect width="1000" height="1000" fill="#0B1B3D"/>
  
  <!-- Official Minimalist RegioVest Monogram in Crisp White -->
  <path
    d="M 190 320
       L 236 390
       H 418
       C 448 390 460 405 460 425
       C 460 445 444 460 412 460
       C 375 460 342 470 298 488
       L 446 710
       H 540
       L 516 630
       L 568 535
       L 628 710
       L 826 360
       H 740
       L 598 605
       L 538 488
       C 564 455 568 410 554 372
       C 538 335 488 320 425 320
       Z"
    fill="#FFFFFF"
  />
</svg>
`;

fs.writeFileSync('/public/test_icon.svg', svg);
console.log('Saved test_icon.svg');
