// --- Floating hearts ---
for (let i = 0; i < 30; i++) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 16 + Math.random() * 24 + "px";
  heart.style.animationDuration = 4 + Math.random() * 6 + "s";
  document.body.appendChild(heart);
}

// --- Audio (mobile-safe) ---
const music = document.getElementById("bg-music");

function startMusic() {
  if (!music.paused) {
    return;
  }
  music.volume = 0.7;
  music.play().catch(() => {});
}

document.addEventListener("touchstart", startMusic, { once: true });
document.addEventListener("click", startMusic, { once: true });

// --- Buttons ---
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const main = document.getElementById("main");
const result = document.getElementById("result");

// --- NO button escape ---
function moveNo() {
  startMusic();
  const padding = 20;
  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const x = Math.random() * maxX + padding;
  const y = Math.random() * maxY + padding;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  if (navigator.vibrate) navigator.vibrate(30);
}

noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNo();
});

// --- YES button ---
yesBtn.addEventListener("click", () => {
  main.style.display = "none";
  result.style.display = "block";

  if (navigator.vibrate) navigator.vibrate([50, 30, 50]);

  for (let i = 0; i < 25; i++) {
    const g = document.createElement("div");
    g.className = "graffiti";
    g.innerText = ["🔥", "💘", "🎉", "💖"][Math.floor(Math.random() * 4)];
    g.style.left = Math.random() * 100 + "vw";
    g.style.top = Math.random() * 100 + "vh";
    document.body.appendChild(g);
  }
});
