const tabsContainer = document.querySelector(".work-menu");
const projectImage = document.querySelector("#projectImage");
const projectTitle = document.querySelector("#projectTitle");
const projectType = document.querySelector("#projectType");
const projectText = document.querySelector("#projectText");
const projectMedia = document.querySelector("#projectMedia");
const projectLink = document.querySelector("#projectLink");
const themeToggle = document.querySelector(".theme-toggle");
const heroRotator = document.querySelector("#heroRotator");
const allWorkGrid = document.querySelector("#allWorkGrid");

let homeProjects = [];
let activeProjectIndex = 0;
let autoProjectTimer;
let heroStageIndex = 0;
let heroStageTimer;

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

function setupFaqAnimation() {
  document.querySelectorAll(".faq-list details").forEach((details) => {
    const summary = details.querySelector("summary");
    if (!summary || details.dataset.faqBound === "true") return;
    details.dataset.faqBound = "true";
    details.style.overflow = "hidden";

    summary.addEventListener("click", (event) => {
      event.preventDefault();
      if (details.dataset.animating === "true") return;

      const styles = window.getComputedStyle(details);
      const paddingBlock = parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);
      const closedHeight = summary.offsetHeight + paddingBlock;
      const timing = { duration: 360, easing: "cubic-bezier(.2,.8,.2,1)" };

      details.dataset.animating = "true";

      if (!details.open) {
        const startHeight = details.offsetHeight;
        details.open = true;
        const endHeight = details.offsetHeight;
        const animation = details.animate([{ height: `${startHeight}px` }, { height: `${endHeight}px` }], timing);
        animation.onfinish = () => {
          details.style.height = "";
          details.dataset.animating = "false";
        };
        return;
      }

      const startHeight = details.offsetHeight;
      const animation = details.animate([{ height: `${startHeight}px` }, { height: `${closedHeight}px` }], timing);
      animation.onfinish = () => {
        details.open = false;
        details.style.height = "";
        details.dataset.animating = "false";
      };
    });
  });
}

setupFaqAnimation();

const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");
let mouseX = 0;
let mouseY = 0;
let ringX = 0;
let ringY = 0;

function bindMagneticTargets(root = document) {
  root.querySelectorAll("[data-cursor]").forEach((item) => {
    if (item.dataset.cursorBound === "true") return;
    item.dataset.cursorBound = "true";

    item.addEventListener("pointerenter", () => {
      document.body.classList.remove("cursor-tone-yellow", "cursor-tone-blue", "cursor-tone-cyan", "cursor-tone-green");
      document.body.classList.add("cursor-soft", "cursor-hover");
      if (cursorRing) cursorRing.dataset.label = item.dataset.cursor || "ألقِ نظرة";
      if (item.dataset.cursorTone) document.body.classList.add(`cursor-tone-${item.dataset.cursorTone}`);
    });

    item.addEventListener("pointerleave", () => {
      document.body.classList.remove("cursor-hover", "cursor-soft", "cursor-tone-yellow", "cursor-tone-blue", "cursor-tone-cyan", "cursor-tone-green");
      if (cursorRing) cursorRing.dataset.label = "";
    });
  });

  root.querySelectorAll(".primary-action, .secondary-action, .pill-link").forEach((item) => {
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
const heroProjectCards = [...document.querySelectorAll(".hero-stage .project-preview")];
const heroCursorTones = ["green", "blue", "cyan"];
const tabAccentPalette = [
  { bg: "#1267F3", ink: "#F0F4F8" },
  { bg: "#10DCE3", ink: "#080C10" },
  { bg: "#12F082", ink: "#080C10" },
  { bg: "#FF0050", ink: "#F0F4F8" },
  { bg: "#5A008F", ink: "#F0F4F8" },
  { bg: "#FFE766", ink: "#080C10" },
];

function getRandomTabAccent() {
  return tabAccentPalette[Math.floor(Math.random() * tabAccentPalette.length)];
}

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

function renderHeroProjects(startIndex = 0) {
  if (!stage || !heroProjectCards.length || !homeProjects.length) return;

  stage.classList.add("is-changing");
  heroProjectCards.forEach((card, cardIndex) => {
    const project = homeProjects[(startIndex + cardIndex) % homeProjects.length];
    const image = card.querySelector("img");
    const label = card.querySelector("span");

    if (!project || !image || !label) return;
    card.href = getProjectUrl(project);
    card.dataset.cursor = "ألقِ نظرة";
    card.dataset.cursorTone = heroCursorTones[cardIndex % heroCursorTones.length];
    card.setAttribute("aria-label", `فتح صفحة ${project.title}`);
    image.src = project.coverImage || "";
    image.alt = project.title;
    label.textContent = project.title;
  });

  window.setTimeout(() => stage.classList.remove("is-changing"), 360);
  bindMagneticTargets(stage);
}

function restartHeroStageAutoplay() {
  window.clearInterval(heroStageTimer);
  if (!heroProjectCards.length || homeProjects.length < 2) return;

  heroStageTimer = window.setInterval(() => {
    heroStageIndex = (heroStageIndex + 1) % homeProjects.length;
    renderHeroProjects(heroStageIndex);
  }, 5200);
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
        ${(() => {
          const accent = getRandomTabAccent();
          return `<button class="work-tab magnetic${index === 0 ? " is-selected" : ""}" data-project="${project.slug}" style="--tab-accent: ${accent.bg}; --tab-ink: ${accent.ink};" type="button">
          <span>${String(index + 1).padStart(2, "0")}</span>
          ${project.title}
        </button>`;
        })()}
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

function renderAllWorkGrid(projects) {
  if (!allWorkGrid) return;
  const validProjects = projects.filter((project) => project.slug && project.coverImage);

  if (!validProjects.length) {
    allWorkGrid.innerHTML = `<p class="work-state work-state-empty">لا توجد أعمال منشورة حاليًا.</p>`;
    return;
  }

  allWorkGrid.innerHTML = validProjects
    .map((project, index) => {
      const meta = project.year ? `مشروع ${project.year}` : "مشروع بصري";
      return `
        <a class="all-work-card all-work-card-${(index % 6) + 1}" href="${getProjectUrl(project)}" data-cursor="افتح العمل" data-cursor-tone="cyan" aria-label="فتح مشروع ${project.title}">
          <img src="${project.coverImage}" alt="${project.title}" loading="lazy" />
          <span class="all-work-index">${String(index + 1).padStart(2, "0")}</span>
          <div class="all-work-meta">
            <p>${meta}</p>
            <h3>${project.title}</h3>
          </div>
        </a>
      `;
    })
    .join("");

  allWorkGrid.querySelectorAll(".all-work-card").forEach((card) => observer.observe(card));
  bindMagneticTargets(allWorkGrid);
}

async function initHomeProjects() {
  if (!tabsContainer || !projectMedia) return;
  showWorkState("جاري تحميل الأعمال...", "loading");

  const { projects, error } = await window.NazCMS.fetchPortfolioProjects();
  const allProjects = projects.filter((project) => project.slug);
  homeProjects = projects
    .filter((project) => project.showOnHome && project.slug)
    .sort((a, b) => Number(b.featured) - Number(a.featured));

  renderAllWorkGrid(allProjects.length ? allProjects : homeProjects);

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
  renderHeroProjects(0);
  restartHeroStageAutoplay();
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
    document.querySelectorAll(".process-step").forEach((item) => item.classList.remove("is-active"));
    step.classList.add("is-active");
    processPreview.classList.add("is-changing");
    window.setTimeout(() => {
      processPreviewImage.src = step.dataset.processImage;
      processPreviewImage.alt = step.querySelector("h3")?.textContent || "معاينة أسلوب العمل";
      processPreviewCaption.textContent = step.dataset.processCaption || "";
      processPreview.classList.remove("is-changing");
    }, 120);
  });
});

document.querySelector(".process-step[data-process-image]")?.classList.add("is-active");
