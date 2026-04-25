const archiveGrid = document.querySelector("#allWorkArchive");
const worksStatus = document.querySelector("#worksStatus");
const worksCount = document.querySelector("#worksCount");

const archiveObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        archiveObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

function getArchiveProjectUrl(project) {
  return `project.html?project=${encodeURIComponent(project.slug)}`;
}

function setArchiveState(message, type = "loading") {
  if (worksStatus) {
    worksStatus.textContent = message;
    worksStatus.dataset.state = type;
  }

  if (archiveGrid && type !== "ready") {
    archiveGrid.innerHTML = `<p class="work-state work-state-${type}">${message}</p>`;
  }
}

function renderArchive(projects) {
  if (!archiveGrid) return;
  const validProjects = projects.filter((project) => project.slug && project.coverImage);

  if (worksCount) worksCount.textContent = String(validProjects.length).padStart(2, "0");

  if (!validProjects.length) {
    setArchiveState("لا توجد أعمال منشورة حاليًا.", "empty");
    return;
  }

  archiveGrid.innerHTML = validProjects
    .map((project) => {
      const meta = project.type || "مشروع بصري";
      return `
        <a class="project-card all-work-card" href="${getArchiveProjectUrl(project)}" data-cursor="افتح العمل" data-cursor-tone="cyan" aria-label="فتح مشروع ${project.title}">
          <img src="${project.coverImage}" alt="${project.title}" loading="lazy" />
          <div class="project-info all-work-meta">
            <p>${meta}</p>
            <h3>${project.title}</h3>
          </div>
        </a>
      `;
    })
    .join("");

  archiveGrid.querySelectorAll(".project-card").forEach((card) => archiveObserver.observe(card));
  window.bindMagneticTargets?.(archiveGrid);
}

async function initArchive() {
  if (!archiveGrid || !window.NazCMS) return;
  setArchiveState("جاري تحميل كل الأعمال...", "loading");

  const { projects, error } = await window.NazCMS.fetchPortfolioProjects();
  const sortedProjects = projects
    .filter((project) => project.slug)
    .sort((a, b) => Number(b.featured) - Number(a.featured) || Number(b.year || 0) - Number(a.year || 0));

  setArchiveState(error ? "تعذر تحميل المشاريع، يتم عرض نسخة محفوظة مؤقتًا." : "كل المشاريع المنشورة من لوحة التحكم.", error ? "error" : "ready");
  renderArchive(sortedProjects);
}

initArchive();
