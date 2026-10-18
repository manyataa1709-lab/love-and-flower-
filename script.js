
const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message");
const emoji = document.getElementById("emoji");
const title = document.getElementById("title");
const result = document.getElementById("result");

let selectedType = "flower";

const surprises = {
  flower: {
    emoji: "💐",
    title: "A bouquet just for you!",
    message: "Sending you roses, sunshine and lots of love. 🌹"
  },

  letter: {
    emoji: "💌",
    title: "A letter from my heart",
    message: "You make my world more beautiful just by being in it. 💗"
  },

  kiss: {
    emoji: "💋",
    title: "Mwah! A kiss for you!",
    message: "Sending you a thousand little kisses. 😘💕"
  },

  hug: {
    emoji: "🫂",
    title: "The warmest hug ever!",
    message: "Imagine a big, warm hug that makes everything better. 🧸💗"
  }
};

function showSurprise(type) {
  selectedType = type;

  const item = surprises[type];
  const name = nameInput.value.trim() || "My Love";
  const customMessage = messageInput.value.trim();

  emoji.textContent = item.emoji;
  title.textContent = `For ${name} 💕`;

  result.textContent =
    item.message +
    (customMessage ? "\n\n" + customMessage : "");

  emoji.style.animation = "none";
  void emoji.offsetWidth;
  emoji.style.animation = "pop 0.8s ease";

  createHearts(item.emoji);
}

document.querySelectorAll("[data-type]").forEach(button => {
  button.addEventListener("click", () => {
    showSurprise(button.dataset.type);
  });
});

function createHearts(symbol) {
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.textContent = Math.random() > 0.5 ? symbol : "💗";
    heart.style.left = Math.random() * 95 + "vw";
    heart.style.fontSize = 20 + Math.random() * 20 + "px";
    heart.style.animationDuration = 3 + Math.random() * 3 + "s";

    document.body.appendChild(heart);

    heart.addEventListener("animationend", () => {
      heart.remove();
    });
  }
}

document.getElementById("share").addEventListener("click", () => {
  const item = surprises[selectedType];
  const name = nameInput.value.trim() || "My Love";
  const customMessage = messageInput.value.trim();

  const text =
    `${item.emoji} A special surprise for ${name}!\n\n` +
    `${item.message}\n\n` +
    (customMessage ? customMessage + "\n\n" : "") +
    "Made with love 💗🌷";

  const url = "https://wa.me/?text=" + encodeURIComponent(text);

  window.open(url, "_blank", "noopener,noreferrer");
});

// Update the preview when the name changes
nameInput.addEventListener("input", () => {
  title.textContent = `For ${nameInput.value.trim() || "My Love"} 💕`;
});

showSurprise("flower");
