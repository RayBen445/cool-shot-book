/* === Cool Shot Dreaming Logic v3.0 === */

// ⌨️ Typewriter effect
function typeWriter(text, elementId, speed = 50) {
  const element = document.getElementById(elementId);
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

// ✨ Mood glow pulse
function pulseGlow(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.style.transition = "box-shadow 0.5s ease-in-out";
  el.style.boxShadow = "0 0 25px #ffcc00";
  setTimeout(() => {
    el.style.boxShadow = "none";
  }, 1000);
}

// 🌓 Theme toggle on button press
function toggleTheme() {
  document.body.classList.toggle("light-theme");
  const label = document.getElementById("theme-label");
  if (label) {
    label.textContent = document.body.classList.contains("light-theme")
      ? "🌙 Switch to Dark Soul Mode"
      : "☀️ Switch to Light Dream Mode";
  }
}

// ⌨️ Keyboard theme toggle ("T")
document.addEventListener("keydown", function (e) {
  if (e.key.toLowerCase() === "t") {
    toggleTheme();
  }
});

// 💫 Scene title fade-in
window.addEventListener("DOMContentLoaded", () => {
  const scenes = document.querySelectorAll(".scene-title");
  scenes.forEach((scene, index) => {
    scene.style.opacity = 0;
    setTimeout(() => {
      scene.style.transition = "opacity 1.2s ease-in-out";
      scene.style.opacity = 1;
    }, 500 + index * 300);
  });

  // Start book viewer if present
  if (document.querySelectorAll('.page').length > 0) {
    showPage(currentPage);
  }
});

// 🌈 Inject optional light theme (fallback)
const style = document.createElement("style");
style.innerHTML = `
  .light-theme {
    background-color: #fdf6e3;
    color: #1a1a1a;
  }
`;
document.head.appendChild(style);

// 📘 Sidebar controls
function openSidebar() {
  document.getElementById("sidebar")?.classList.add("open");
  document.getElementById("sidebar")?.classList.remove("closed");
  document.getElementById("overlay")?.classList.add("active");
}

function closeSidebar() {
  document.getElementById("sidebar")?.classList.remove("open");
  document.getElementById("sidebar")?.classList.add("closed");
  document.getElementById("overlay")?.classList.remove("active");
}

// 📖 Page flipping controls
let currentPage = 1;

function showPage(index) {
  const pages = document.querySelectorAll('.page');
  if (pages.length === 0) return;
  pages.forEach(p => p.classList.remove('active'));
  if (pages[index - 1]) {
    pages[index - 1].classList.add('active');
  }
}

function flip(step) {
  const pages = document.querySelectorAll('.page');
  currentPage += step;
  if (currentPage < 1) currentPage = 1;
  if (currentPage > pages.length) currentPage = pages.length;
  showPage(currentPage);
}

// 🧠 Optional page indicator (display current scene)
function updatePageCounter(id) {
  const counter = document.getElementById(id);
  if (counter) {
    counter.textContent = `Scene ${currentPage} of ${document.querySelectorAll('.page').length}`;
  }
                        }
