const tabsContainer = document.querySelector(".work-menu");
const projectImage = document.querySelector("#projectImage");
const projectTitle = document.querySelector("#projectTitle");
const projectType = document.querySelector("#projectType");
const projectText = document.querySelector("#projectText");
const projectMedia = document.querySelector("#projectMedia");
const projectLink = document.querySelector("#projectLink");
const themeToggle = document.querySelector(".theme-toggle");
const heroRotator = document.querySelector("#heroRotator");

let homeProjects = [];
let activeProjectIndex = 0;
let autoProjectTimer;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
window.revealObserver = observer;

const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");
let mouseX = 0;
let mouseY = 0;
let ringX = 0;
let ringY = 0;

function bindMagneticTargets(root = document) {
  root.querySelectorAll("a, button, .magnetic").forEach((item) => {
    if (item.dataset.cursorBound === "true") return;
    item.dataset.cursorBound = "true";

    item.addEventListener("pointerenter", () => {
      document.body.classList.remove("cursor-tone-yellow", "cursor-tone-blue", "cursor-tone-cyan", "cursor-tone-green");
      document.body.classList.add("cursor-soft");
      if (item.dataset.cursor) {
        document.body.classList.add("cursor-hover");
        if (cursorRing) cursorRing.dataset.label = item.dataset.cursor;
        if (item.dataset.cursorTone) document.body.classList.add(`cursor-tone-${item.dataset.cursorTone}`);
      }
    });

    item.addEventListener("pointerleave", () => {
      document.body.classList.remove("cursor-hover", "cursor-soft", "cursor-tone-yellow", "cursor-tone-blue", "cursor-tone-cyan", "cursor-tone-green");
      if (cursorRing) cursorRing.dataset.label = "";
    });
  });

  root.querySelectorAll(".magnetic").forEach((item) => {
    if (item.dataset.magneticBound === "true") return;
    item.dataset.magneticBound = "true";

    item.addEventListener("pointermove", (event) => {
      const rect = item.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      item.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
    });

    item.addEventListener("pointerleave", () => {
      item.style.transform = "";
    });
  });
}

window.bindMagneticTargets = bindMagneticTargets;

if (cursorDot && cursorRing && window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("pointermove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    document.body.classList.add("cursor-ready");
    cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  const animateCursor = () => {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    cursorRing.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(animateCursor);
  };

  animateCursor();
  bindMagneticTargets();
}

try {
  localStorage.removeItem("naz-theme");
} catch {}
document.body.removeAttribute("data-theme");
if (themeToggle) themeToggle.hidden = true;

const heroPhrases = [
  { text: "يصنع حضورًا", tone: "pink" },
  { text: "يرتب الفكرة", tone: "blue" },
  { text: "يرفع القيمة", tone: "cyan" },
  { text: "يبني أثرًا", tone: "green" },
];

let heroPhraseIndex = 0;

if (heroRotator) {
  heroRotator.dataset.tone = heroPhrases[0].tone;
  window.setInterval(() => {
    heroPhraseIndex = (heroPhraseIndex + 1) % heroPhrases.length;
    const phrase = heroPhrases[heroPhraseIndex];
    heroRotator.animate([{ opacity: 0, transform: "translateY(12px)" }, { opacity: 1, transform: "translateY(0)" }], {
      duration: 360,
      easing: "ease-out",
    });
    heroRotator.textContent = phrase.text;
    heroRotator.dataset.tone = phrase.tone;
  }, 2600);
}

const stage = document.querySelector(".hero-stage");

if (stage && window.matchMedia("(pointer: fine)").matches) {
  stage.addEventListener("pointermove", (event) => {
    const rect = stage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    stage.style.transform = `rotateY(${x * -7}deg) rotateX(${y * 7}deg)`;
  });

  stage.addEventListener("pointerleave", () => {
    stage.style.transform = "rotateY(0deg) rotateX(0deg)";
  });
}

function getProjectUrl(project) {
  return `project.html?project=${encodeURIComponent(project.slug)}`;
}

function showWorkState(message, type = "loading") {
  if (!tabsContainer) return;
  tabsContainer.innerHTML = `<p class="work-state work-state-${type}">${message}</p>`;
}

function setProject(projectSlug, isAuto = false) {
  const project = homeProjects.find((item) => item.slug === projectSlug);
  if (!project || !projectImage || !projectMedia) return;

  activeProjectIndex = homeProjects.findIndex((item) => item.slug === projectSlug);
  document.querySelectorAll(".work-tab").forEach((item) => {
    item.classList.toggle("is-selected", item.dataset.project === projectSlug);
  });

  projectMedia.classList.add("is-switching");
  window.setTimeout(() => {
    projectImage.src = project.coverImage || "";
    projectImage.alt = project.title;
    if (projectTitle) projectTitle.textContent = project.title;
    if (projectType) projectType.textContent = project.type || "Project";
    if (projectText) projectText.textContent = project.shortDescription || "";
    projectMedia.href = getProjectUrl(project);
    projectMedia.dataset.cursor = "ألقِ نظرة";
    projectMedia.setAttribute("aria-label", `فتح صفحة ${project.title}`);
    if (projectLink) projectLink.href = getProjectUrl(project);
    projectMedia.classList.remove("is-switching");
  }, isAuto ? 260 : 120);
}

function restartProjectAutoplay() {
  window.clearInterval(autoProjectTimer);
  if (homeProjects.length < 2) return;
  autoProjectTimer = window.setInterval(() => {
    const nextIndex = (activeProjectIndex + 1) % homeProjects.length;
    setProject(homeProjects[nextIndex].slug, true);
  }, 6200);
}

function renderWorkTabs(projects) {
  if (!tabsContainer) return;
  tabsContainer.innerHTML = projects
    .map(
      (project, index) => `
        <button class="work-tab magnetic${index === 0 ? " is-selected" : ""}" data-project="${project.slug}" type="button">
          <span>${String(index + 1).padStart(2, "0")}</span>
          ${project.title}
        </button>
      `
    )
    .join("");

  tabsContainer.querySelectorAll(".work-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      setProject(tab.dataset.project);
      restartProjectAutoplay();
    });
  });

  bindMagneticTargets(tabsContainer);
}

async function initHomeProjects() {
  if (!tabsContainer || !projectMedia) return;
  showWorkState("جاري تحميل الأعمال...", "loading");

  const { projects, error } = await window.NazCMS.fetchPortfolioProjects();
  homeProjects = projects
    .filter((project) => project.showOnHome && project.slug)
    .sort((a, b) => Number(b.featured) - Number(a.featured));

  if (!homeProjects.length) {
    showWorkState("لا توجد أعمال منشورة حاليًا.", "empty");
    projectMedia.classList.add("is-disabled");
    return;
  }

  if (error) {
    showWorkState("تعذر تحميل المشاريع، يتم عرض نسخة محفوظة مؤقتًا.", "error");
    window.setTimeout(() => renderWorkTabs(homeProjects), 1400);
  } else {
    renderWorkTabs(homeProjects);
  }

  setProject(homeProjects[0].slug);
  restartProjectAutoplay();
}

initHomeProjects();

const scrollCopy = document.querySelector(".scroll-copy");
const scrollWord = document.querySelector("#scrollWord");
const scrollText = document.querySelector("#scrollText");
const scrollCounter = document.querySelector("#scrollCounter");
const scrollProgressBar = document.querySelector("#scrollProgressBar");
const scrollSteps = [...document.querySelectorAll(".scroll-copy-steps span")];

function updateScrollCopy() {
  if (!scrollCopy || !scrollWord || !scrollSteps.length) return;
  const rect = scrollCopy.getBoundingClientRect();
  const scrollRange = rect.height - window.innerHeight;
  const rawProgress = scrollRange <= 0 ? (rect.top <= 0 ? 0.999 : 0) : -rect.top / scrollRange;
  const progress = Math.min(0.999, Math.max(0, rawProgress));
  const index = Math.min(scrollSteps.length - 1, Math.floor(progress * scrollSteps.length));
  const step = scrollSteps[index];

  if (scrollWord.textContent !== step.dataset.word) {
    scrollWord.animate([{ opacity: 0, transform: "translateY(12px)" }, { opacity: 1, transform: "translateY(0)" }], {
      duration: 320,
      easing: "ease-out",
    });
  }

  scrollWord.textContent = step.dataset.word;
  if (scrollText) scrollText.textContent = step.dataset.text;
  if (scrollCounter) scrollCounter.textContent = String(index + 1).padStart(2, "0");
  if (scrollProgressBar) scrollProgressBar.style.transform = `scaleX(${(index + 1) / scrollSteps.length})`;
  scrollSteps.forEach((item, itemIndex) => {
    item.classList.toggle("is-active", itemIndex === index);
    item.style.opacity = itemIndex === index ? "1" : "0.42";
  });
}

window.addEventListener("scroll", updateScrollCopy, { passive: true });
window.addEventListener("resize", updateScrollCopy);
updateScrollCopy();

const processPreview = document.querySelector(".process-preview");
const processPreviewImage = document.querySelector("#processPreviewImage");
const processPreviewCaption = document.querySelector("#processPreviewCaption");

document.querySelectorAll(".process-step[data-process-image]").forEach((step) => {
  step.addEventListener("pointerenter", () => {
    if (!processPreview || !processPreviewImage || !processPreviewCaption) return;
    processPreview.classList.add("is-changing");
    window.setTimeout(() => {
      processPreviewImage.src = step.dataset.processImage;
      processPreviewImage.alt = step.querySelector("h3")?.textContent || "معاينة أسلوب العمل";
      processPreviewCaption.textContent = step.dataset.processCaption || "";
      processPreview.classList.remove("is-changing");
    }, 120);
  });
});
