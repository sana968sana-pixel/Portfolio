// THEME TOGGLE
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

function setTheme(theme) {
  if (theme === "light") {
    body.classList.add("light");
    themeIcon.textContent = "🌙";
  } else {
    body.classList.remove("light");
    themeIcon.textContent = "☀️";
  }
  localStorage.setItem("theme", theme);
}

const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme || "dark");

themeToggle.addEventListener("click", () => {
  const isLight = body.classList.contains("light");
  setTheme(isLight ? "dark" : "light");
});

// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});

// ACTIVE NAV LINK
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "hero";

  sections.forEach((section) => {
    const top = section.offsetTop - 140;
    const height = section.offsetHeight;

    if (window.scrollY >= top && window.scrollY < top + height) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// SECTION ENTRY ANIMATIONS
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".section").forEach((section) => {
  observer.observe(section);
});

// HERO TYPING ANIMATION
const typingText = document.getElementById("typingText");
const words = [
  "Computer Science Student",
  "Python Learner",
  "AI Enthusiast",
  "Web Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!deleting) {
    typingText.textContent = currentWord.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      deleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    typingText.textContent = currentWord.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, deleting ? 55 : 95);
}

typeEffect();

// AI CHATBOT
const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

function addMessage(message, sender) {
  const div = document.createElement("div");
  div.className = `message ${sender}`;
  div.textContent = message;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  const text = input.toLowerCase().trim();

  if (text.includes("skill") || text.includes("technologies")) {
    return "Sana works with Python, JavaScript, HTML, CSS, SQL, MySQL, MongoDB, NumPy, Pandas, WordPress, GitHub, and VS Code.";
  }

  if (text.includes("project") || text.includes("work")) {
    return "Her main projects include a Python data analysis project using Pandas and NumPy, and responsive WordPress website projects focused on layout and user experience.";
  }

  if (text.includes("education") || text.includes("study") || text.includes("degree")) {
    return "She is a Computer Science student and is currently building her skills in AI, data analysis, databases, and web development.";
  }

  if (text.includes("ai") || text.includes("artificial intelligence")) {
    return "Sana is currently learning Artificial Intelligence and exploring how AI can be used in practical and real-world solutions.";
  }

  if (text.includes("python")) {
    return "Python is one of Sana’s core skills. She uses it for learning programming fundamentals, problem solving, and data analysis projects.";
  }

  if (text.includes("contact") || text.includes("email") || text.includes("reach")) {
    return "You can contact Sana at sana968sana@gmail.com and also connect through GitHub and LinkedIn from the portfolio.";
  }

  if (text.includes("github")) {
    return "Sana’s GitHub is linked in the portfolio. You can use it to see her coding profile and future uploaded projects.";
  }

  if (text.includes("linkedin")) {
    return "Her LinkedIn is also linked in the portfolio so recruiters and connections can view her profile professionally.";
  }

  if (text.includes("location") || text.includes("where")) {
    return "Sana is based in Muridke, Pakistan.";
  }

  if (text.includes("hello") || text.includes("hi")) {
    return "Hi! You can ask me about Sana’s skills, projects, education, AI learning, or contact details.";
  }

  return "I can help with Sana’s skills, projects, education, AI learning, GitHub, LinkedIn, and contact details. Try asking something about those.";
}

function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  addMessage(text, "user");
  userInput.value = "";

  setTimeout(() => {
    const reply = getBotResponse(text);
    addMessage(reply, "bot");
  }, 500);
}

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});

// SCROLL PROGRESS BAR
const scrollProgress = document.getElementById("scrollProgress");

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  scrollProgress.style.width = `${progress}%`;
});

// CUSTOM CURSOR
const cursorDot = document.getElementById("cursorDot");
const cursorOutline = document.getElementById("cursorOutline");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  cursorDot.style.left = `${x}px`;
  cursorDot.style.top = `${y}px`;

  cursorOutline.style.left = `${x}px`;
  cursorOutline.style.top = `${y}px`;
});

document.querySelectorAll("a, button, input").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursorOutline.style.width = "48px";
    cursorOutline.style.height = "48px";
  });

  el.addEventListener("mouseleave", () => {
    cursorOutline.style.width = "34px";
    cursorOutline.style.height = "34px";
  });
});