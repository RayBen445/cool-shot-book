/* === Cool Shot Dreaming Logic v2.0 === */

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
  if (document.body.classList.contains("light-theme")) {
    label.textContent = "🌙 Switch to Dark Soul Mode";
  } else {
    label.textContent = "☀️ Switch to Light Dream Mode";
  }
}

// ⌨️ Keyboard theme toggle (press "T")
document.addEventListener("keydown", function (e) {
  if (e.key.toLowerCase() === "t") {
    toggleTheme();
  }
});

// 💫 Scene fade-in animation
window.addEventListener("DOMContentLoaded", () => {
  const scenes = document.querySelectorAll(".scene-title");
  scenes.forEach((scene, index) => {
    scene.style.opacity = 0;
    setTimeout(() => {
      scene.style.transition = "opacity 1.2s ease-in-out";
      scene.style.opacity = 1;
    }, 500 + index * 300);
  });
});

// 🌈 Optional: Inject light theme styles (if not preloaded in CSS)
const style = document.createElement("style");
style.innerHTML = `
  .light-theme {
    background-color: #fdf6e3;
    color: #1a1a1a;
  }
`;
document.head.appendChild(style);
