const params = new URLSearchParams(window.location.search);
const selectedSlug = params.get("project") || "urban";

const projectPage = document.querySelector(".project-page");
const gallery = document.querySelector("#projectGallery");
const liveLink = document.querySelector("#detailLiveLink");

function setProjectStatus(message, type = "loading") {
  if (!projectPage) return;
  let status = document.querySelector(".project-state");
  if (!status) {
    status = document.createElement("section");
    status.className = "project-state section-shell";
    projectPage.prepend(status);
  }
  status.className = `project-state project-state-${type} section-shell`;
  status.textContent = message;
}

function clearProjectStatus() {
  document.querySelector(".project-state")?.remove();
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value || "";
}

function setProjectContent(project) {
  document.title = `${project.title} | Naz Graphic`;
  setText("#projectKicker", project.type || "Case Study");
  setText("#detailTitle", project.title);
  setText("#detailLead", project.lead || project.shortDescription);
  setText("#detailClient", project.client);
  setText("#detailYear", project.year);
  setText("#detailRole", project.type);
  setText("#detailIdea", project.idea);
  setText("#detailProcess", project.process);
  setText("#detailResult", project.result);

  const cover = document.querySelector("#coverImage");
  if (cover && project.coverImage) {
    cover.src = project.coverImage;
    cover.alt = project.title;
  }

  if (liveLink) {
    if (project.liveUrl) {
      liveLink.hidden = false;
      liveLink.href = project.liveUrl;
    } else {
      liveLink.hidden = true;
      liveLink.removeAttribute("href");
    }
  }
}

function renderGallery(project) {
  if (!gallery) return;
  const images = Array.isArray(project.galleryImages) ? project.galleryImages : [];
  gallery.className = `project-gallery gallery-${project.galleryLayout || "grid"}`;

  if (!images.length) {
    gallery.innerHTML = `<p class="project-state project-state-empty">لا توجد صور منشورة لهذا المشروع حاليًا.</p>`;
    return;
  }

  gallery.innerHTML = images
    .map(
      (image, index) => `
        <figure class="gallery-item reveal magnetic gallery-size-${image.size || "medium"}" style="--gallery-order:${index + 1}">
          <img src="${image.url}" alt="${image.alt || `${project.title} - صورة ${index + 1}`}" loading="${index > 1 ? "lazy" : "eager"}" />
        </figure>
      `
    )
    .join("");

  gallery.querySelectorAll(".reveal").forEach((item) => window.revealObserver?.observe(item));
  if (typeof window.bindMagneticTargets === "function") window.bindMagneticTargets(gallery);
}

async function initProjectPage() {
  if (!projectPage) return;
  setProjectStatus("جاري تحميل المشروع...", "loading");

  const { project, error } = await window.NazCMS.fetchPortfolioProject(selectedSlug);

  if (!project) {
    setProjectStatus("المشروع غير موجود.", "empty");
    document.querySelector(".project-hero")?.remove();
    document.querySelector(".project-cover")?.remove();
    document.querySelector(".project-story")?.remove();
    document.querySelector(".gallery-section")?.remove();
    return;
  }

  if (error) {
    setProjectStatus("تعذر تحميل المشروع من Sanity، يتم عرض نسخة محفوظة مؤقتًا.", "error");
    window.setTimeout(clearProjectStatus, 1800);
  } else {
    clearProjectStatus();
  }

  setProjectContent(project);
  renderGallery(project);
}

initProjectPage();
