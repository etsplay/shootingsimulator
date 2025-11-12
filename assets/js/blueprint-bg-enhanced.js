const canvas = document.getElementById('blueprintCanvas');
const ctx = canvas.getContext('2d');
const rootEl = document.querySelector('.theme-root') || root;

let width, height, centerX, centerY;
let angle = 0, time = 0;
let scrollOffset = 0;

function getThemeColors(){
  const theme = rootEl.getAttribute('data-theme') || 'auto';
  if(theme === 'dark') return {line:'rgba(255,255,255,0.05)', fill:'rgba(255,255,255,0.1)', bg:'#11151c', target:'#000'};//#0a1428
  if(theme === 'light') return {line:'rgba(42,46,58,0.1)', fill:'rgba(42,46,58,0.2)', bg:'#ffffff', target:'#000'};
  // auto uses CSS media query fallback
  const darkMq = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return darkMq ? {line:'rgba(255,255,255,0.05)', fill:'rgba(255,255,255,0.1)', bg:'#11151c', target:'#000'} : {line:'rgba(42,46,58,0.1)', fill:'rgba(42,46,58,0.2)', bg:'#ffffff', target:'#000'};
}

function resize(){
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  centerX = width/2;
  centerY = height/2;
}

function drawConcentricCircles(colors, radiusStep = 100, maxRadius = 1000) {
  const pulse = 0.5 + 0.5 * Math.sin(time * 0.002);
  ctx.lineWidth = 1;
  ctx.font = "40px monospace";

  for (let r = radiusStep; r < maxRadius; r += radiusStep) {
    //const alpha = 1 - r / maxRadius; // darker at center, transparent at edge
    const alpha = Math.pow(1 - r/(maxRadius/1.2), 7);

    // draw filled circle using background color with fading transparency
    ctx.beginPath();
    ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
    ctx.fillStyle = hexToRgba(colors.target, alpha * 0.7);
    ctx.fill();

    // stroke outline
    ctx.strokeStyle = colors.line;
    ctx.stroke();

    // label text
    //ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.8})`;
    ctx.fillStyle = colors.fill;
    ctx.fillText(`${10 - r / 100}`, centerX + r + 40, centerY - 5);
  }
}

// helper to convert hex → rgba
function hexToRgba(hex, alpha = 1) {
  const c = hex.replace('#', '');
  const bigint = parseInt(c, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}


function drawCrosshair(colors){
  ctx.strokeStyle = colors.line;
  ctx.beginPath();
  ctx.moveTo(centerX,0);
  ctx.lineTo(centerX,height);
  ctx.moveTo(0,centerY);
  ctx.lineTo(width,centerY);
  ctx.stroke();
}

function animate(){
  time +=33;
  //scrollOffset = window.scrollY*0.01;
  const colors = getThemeColors();
  ctx.fillStyle = colors.bg;
  ctx.fillRect(0,0,width,height);

  ctx.save();
  ctx.translate(0,scrollOffset);
  ctx.translate(centerX, centerY);
  ctx.rotate(angle);
  ctx.translate(-centerX,-centerY);

  drawConcentricCircles(colors,100,Math.max(width,height));
  drawCrosshair(colors);

  ctx.restore();
  angle+=0.0005;
  requestAnimationFrame(animate);
}

window.addEventListener('resize',resize);
window.addEventListener('themechange',()=>{}); // optional hook if you want extra actions
resize();
animate();