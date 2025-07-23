/* === Cool Shot Dreaming Logic === */

// Typewriter Effect
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

// Mood Glow Pulse
function pulseGlow(targetId) {
  const el = document.getElementById(targetId);
  el.style.transition = "box-shadow 0.5s ease-in-out";
  el.style.boxShadow = "0 0 25px #ffcc00";
  setTimeout(() => {
    el.style.boxShadow = "none";
  }, 1000);
}

// Theme Toggle (press "T")
document.addEventListener("keydown", function (e) {
  if (e.key.toLowerCase() === "t") {
    document.body.classList.toggle("dark-mode");
  }
});

// Optional: Dark mode styles
const style = document.createElement("style");
style.innerHTML = `
  .dark-mode {
    background-color: #0f0f23;
    color: #e0f7fa;
  }
`;
document.head.appendChild(style);
