const canvas = document.getElementById('animation');
const ctx = canvas.getContext('2d');
let frameCount = 0;

function drawFrame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#ff0000';
  ctx.fillRect(frameCount % canvas.width, 0, 50, 50);
  frameCount++;
}

setInterval(drawFrame, 20);
