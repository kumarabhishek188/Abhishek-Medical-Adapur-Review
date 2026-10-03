const fs = require('fs');
const qrcode = require('./js/qrcode.min.js');

function generateQR(url, targetSvgPath, targetArtifactSvgPath) {
  const qr = qrcode(0, 'M');
  qr.addData(url);
  qr.make();

  const count = qr.getModuleCount();
  const cellSize = 10;
  const margin = 40; // Standard 4-module quiet zone margin
  const size = count * cellSize + margin * 2;

  let rects = '';
  let terminalLines = [];

  for (let r = 0; r < count; r += 2) {
    let line = '  ';
    for (let c = 0; c < count; c++) {
      const top = qr.isDark(r, c);
      const bot = (r + 1 < count) ? qr.isDark(r + 1, c) : false;
      if (top && bot) line += '█';
      else if (top && !bot) line += '▀';
      else if (!top && bot) line += '▄';
      else line += ' ';
    }
    terminalLines.push(line);
  }

  for (let r = 0; r < count; r++) {
    for (let c = 0; c < count; c++) {
      if (qr.isDark(r, c)) {
        const x = margin + c * cellSize;
        const y = margin + r * cellSize;
        rects += `<rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" fill="#064e3b" />\n`;
      }
    }
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
  <rect width="${size}" height="${size}" fill="#ffffff" rx="16"/>
  ${rects}
</svg>`;

  fs.writeFileSync(targetSvgPath, svg, 'utf8');
  if (targetArtifactSvgPath) {
    fs.writeFileSync(targetArtifactSvgPath, svg, 'utf8');
  }

  console.log("QR Code ASCII for: " + url + "\n");
  console.log(terminalLines.join("\n"));
  console.log("\nSVG QR successfully saved to: " + targetSvgPath);
}

const targetUrl = process.argv[2] || "https://abhishekmedicaladapurgooglereview.netlify.app/";
const svgPath = "/Users/abhishekkumar/Desktop/AMH review/qr-code.svg";
const artifactSvgPath = "/Users/abhishekkumar/.gemini/antigravity/brain/515ca0c8-b923-45c1-8db5-a59ecf161baf/qr-code.svg";

generateQR(targetUrl, svgPath, artifactSvgPath);
