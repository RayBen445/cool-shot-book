// === Cool Shot Dreaming Logic v3.1 ===

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

// 🌗 Theme toggle on button press
function toggleTheme() {
  const body = document.body;
  const btn = document.getElementById("theme-label");
  body.classList.toggle("light-mode");
  const isLight = body.classList.contains("light-mode");
  if (btn) {
    btn.textContent = isLight
      ? "🌙 Switch to Dark Thinking Mode"
      : "☀️ Switch to Light Dream Mode";
  }
  localStorage.setItem("themeMode", isLight ? "light" : "dark");
}

// ⌨️ Keyboard theme toggle ("T")
document.addEventListener("keydown", function (e) {
  const key = e.key.toLowerCase();
  if (key === "t") toggleTheme();
  if (key === "s") openSidebar();
  if (key === "escape") closeSidebar();
});

// 💫 Scene title + echo fade-in
window.addEventListener("DOMContentLoaded", () => {
  const scenes = document.querySelectorAll(".scene-title");
  scenes.forEach((scene, index) => {
    scene.style.opacity = 0;
    setTimeout(() => {
      scene.style.transition = "opacity 1.2s ease-in-out";
      scene.style.opacity = 1;
    }, 500 + index * 300);
  });

  const echoes = document.querySelectorAll(".echo-line");
  echoes.forEach((el, index) => {
    el.style.opacity = 0;
    setTimeout(() => {
      el.style.transition = "opacity 1s ease-in-out";
      el.style.opacity = 1;
    }, 1000 + index * 400);
  });

  const saved = localStorage.getItem("themeMode");
  if (saved === "light") {
    document.body.classList.add("light-mode");
    const btn = document.getElementById("theme-label");
    if (btn) btn.textContent = "🌙 Switch to Dark Thinking Mode";
  }

  if (document.querySelectorAll(".page").length > 0) {
    showPage(currentPage);
  }
});

// 📘 Sidebar controls
function openSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  if (sidebar) sidebar.classList.add("open"), sidebar.classList.remove("closed");
  if (overlay) overlay.classList.add("active");
}
function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  if (sidebar) sidebar.classList.remove("open"), sidebar.classList.add("closed");
  if (overlay) overlay.classList.remove("active");
}

// 📖 Page flipping logic
let currentPage = 1;

function showPage(index) {
  const pages = document.querySelectorAll(".page");
  pages.forEach(p => p.classList.remove("active"));
  if (pages[index - 1]) pages[index - 1].classList.add("active");
}

function flip(step) {
  const pages = document.querySelectorAll(".page");
  currentPage += step;
  if (currentPage < 1) currentPage = 1;
  if (currentPage > pages.length) currentPage = pages.length;
  showPage(currentPage);
}

// 🧠 Optional page indicator
function updatePageCounter(id) {
  const counter = document.getElementById(id);
  const total = document.querySelectorAll(".page").length;
  if (counter) counter.textContent = `Scene ${currentPage} of ${total}`;
    }
