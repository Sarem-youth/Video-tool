const fs = require('fs');
const { createCanvas } = require('canvas');

function createIcon(size) {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = '#2962ff';
    ctx.fillRect(0, 0, size, size);

    // Letter "Y"
    ctx.fillStyle = '#ffffff';
    ctx.font = `bold ${size * 0.6}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Y', size/2, size/2);

    // Add a subtle play button triangle
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    const triangleSize = size * 0.3;
    ctx.moveTo(size/2 + triangleSize/2, size/2);
    ctx.lineTo(size/2 - triangleSize/4, size/2 - triangleSize/2);
    ctx.lineTo(size/2 - triangleSize/4, size/2 + triangleSize/2);
    ctx.fill();

    return canvas.toBuffer();
}

// Create icons directory if it doesn't exist
if (!fs.existsSync('./icons')) {
    fs.mkdirSync('./icons');
}

// Generate icons
[16, 48, 128].forEach(size => {
    const buffer = createIcon(size);
    fs.writeFileSync(`./icons/icon${size}.png`, buffer);
    console.log(`Created icon${size}.png`);
});
