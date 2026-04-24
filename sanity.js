// ضع قيم مشروع Sanity هنا بعد إنشاء المشروع من sanity.io/manage.
// projectId: معرف المشروع، dataset: غالبًا "production" إذا لم تغيّره.
window.NAZ_SANITY_CONFIG = {
  projectId: "YOUR_SANITY_PROJECT_ID",
  dataset: "production",
  apiVersion: "2026-04-24",
  useCdn: true,
};

window.NAZ_FALLBACK_PROJECTS = [
  {
    title: "هوية رجل أعمال",
    slug: "urban",
    type: "Brand Identity",
    client: "رجل أعمال",
    year: 2026,
    shortDescription:
      "هوية بصرية جريئة مبنية على حضور شخصي، توازن بين الفخامة والوضوح وتصلح للاستخدام في المنصات والمواد المطبوعة.",
    lead:
      "هوية بصرية جريئة مبنية على حضور شخصي، توازن بين الفخامة والوضوح وتصلح للاستخدام في المنصات والمواد المطبوعة.",
    idea: "بناء حضور بصري قوي وسهل التذكر، مع الحفاظ على بساطة الاستخدام عبر كل نقطة ظهور.",
    process:
      "بدأنا بتحديد النبرة، ثم بنينا نظامًا بصريًا قابلًا للتوسع: صور، تباين، شبكة، وقواعد عرض واضحة.",
    result:
      "مظهر أكثر ثقة، صفحات أكثر ترتيبًا، وملف مشروع يقدر العميل يستخدمه ويتوسع عليه بسهولة.",
    coverImage:
      "https://framerusercontent.com/images/0QA97ljjOh94L1MVp3DrlG8Ymf4.jpg?scale-down-to=2048&width=4500&height=3000",
    liveUrl: "https://naztest.framer.website/project-details/urban-vibe",
    showOnHome: true,
    featured: true,
    galleryLayout: "spotlight",
    galleryImages: [
      {
        url: "https://framerusercontent.com/images/0QA97ljjOh94L1MVp3DrlG8Ymf4.jpg?scale-down-to=1024&width=4500&height=3000",
        alt: "هوية رجل أعمال - صورة 1",
        size: "wide",
        order: 1,
      },
      {
        url: "https://framerusercontent.com/images/pyoFxglcEBXb4CL2At0FNretQ.jpg?scale-down-to=1024&width=6400&height=4800",
        alt: "هوية رجل أعمال - صورة 2",
        size: "medium",
        order: 2,
      },
      {
        url: "https://framerusercontent.com/images/0NJsalJIiuQkxzGt08JVIPf4zBY.jpg?scale-down-to=2048&width=5000&height=3750",
        alt: "هوية رجل أعمال - صورة 3",
        size: "full",
        order: 3,
      },
    ],
  },
  {
    title: "Echoes of Innovation",
    slug: "echoes",
    type: "Digital Product",
    client: "William R.",
    year: 2026,
    shortDescription:
      "تصميم تجربة رقمية يعرض الفكرة كرحلة واضحة، مع صور قوية ومساحات تنفس تجعل المشروع يبدو ناضجًا من أول نظرة.",
    lead:
      "تصميم تجربة رقمية يعرض الفكرة كرحلة واضحة، مع صور قوية ومساحات تنفس تجعل المشروع يبدو ناضجًا من أول نظرة.",
    idea: "تحويل فكرة تقنية إلى تجربة يستطيع الزائر فهمها بسرعة دون أن يخسر الإحساس بالإبداع.",
    process:
      "اعتمدنا على توازن بين صور كبيرة، عناوين مختصرة، وحركة هادئة تربط الأقسام ببعضها.",
    result:
      "واجهة أكثر وضوحًا، ومشروع يظهر كمنتج جاهز للعرض على العملاء والمستثمرين.",
    coverImage:
      "https://framerusercontent.com/images/0NJsalJIiuQkxzGt08JVIPf4zBY.jpg?scale-down-to=2048&width=5000&height=3750",
    liveUrl: "https://naztest.framer.website/project-details/echoes-of-innovation",
    showOnHome: true,
    featured: false,
    galleryLayout: "masonry",
    galleryImages: [
      {
        url: "https://framerusercontent.com/images/0NJsalJIiuQkxzGt08JVIPf4zBY.jpg?scale-down-to=1024&width=5000&height=3750",
        alt: "Echoes of Innovation - صورة 1",
        size: "large",
        order: 1,
      },
      {
        url: "https://framerusercontent.com/images/0QA97ljjOh94L1MVp3DrlG8Ymf4.jpg?scale-down-to=1024&width=4500&height=3000",
        alt: "Echoes of Innovation - صورة 2",
        size: "medium",
        order: 2,
      },
      {
        url: "https://framerusercontent.com/images/pyoFxglcEBXb4CL2At0FNretQ.jpg?scale-down-to=2048&width=6400&height=4800",
        alt: "Echoes of Innovation - صورة 3",
        size: "wide",
        order: 3,
      },
    ],
  },
  {
    title: "Brand Horizon",
    slug: "brand",
    type: "Visual System",
    client: "David Lod",
    year: 2026,
    shortDescription:
      "نظام بصري مرن لعلامة تبحث عن امتداد طويل: صور، إيقاع تايبوغرافي، وطريقة عرض تصلح للحملات والويب.",
    lead:
      "نظام بصري مرن لعلامة تبحث عن امتداد طويل: صور، إيقاع تايبوغرافي، وطريقة عرض تصلح للحملات والويب.",
    idea: "صناعة لغة بصرية قابلة للامتداد بدل تصميم قطعة واحدة فقط.",
    process:
      "بنينا شبكة عرض، طريقة للصور، ومساحات للنصوص تجعل النظام ثابتًا مهما تغيّر المحتوى.",
    result: "ملف بصري متماسك يعطي العلامة حضورًا أوسع على الويب والسوشال والحملات.",
    coverImage:
      "https://framerusercontent.com/images/pyoFxglcEBXb4CL2At0FNretQ.jpg?scale-down-to=2048&width=6400&height=4800",
    liveUrl: "https://naztest.framer.website/project-details/brand-horizon",
    showOnHome: true,
    featured: false,
    galleryLayout: "grid",
    galleryImages: [
      {
        url: "https://framerusercontent.com/images/pyoFxglcEBXb4CL2At0FNretQ.jpg?scale-down-to=1024&width=6400&height=4800",
        alt: "Brand Horizon - صورة 1",
        size: "wide",
        order: 1,
      },
      {
        url: "https://framerusercontent.com/images/0NJsalJIiuQkxzGt08JVIPf4zBY.jpg?scale-down-to=1024&width=5000&height=3750",
        alt: "Brand Horizon - صورة 2",
        size: "medium",
        order: 2,
      },
      {
        url: "https://framerusercontent.com/images/0QA97ljjOh94L1MVp3DrlG8Ymf4.jpg?scale-down-to=2048&width=4500&height=3000",
        alt: "Brand Horizon - صورة 3",
        size: "full",
        order: 3,
      },
    ],
  },
  {
    title: "Elevate",
    slug: "elevate",
    type: "Interface Concept",
    client: "Alex KD",
    year: 2026,
    shortDescription:
      "مفهوم واجهة نظيف يركز على الأفعال الأساسية، ويعطي المحتوى مساحة كافية بدون أن يخسر الشخصية أو الإيقاع.",
    lead:
      "مفهوم واجهة نظيف يركز على الأفعال الأساسية، ويعطي المحتوى مساحة كافية بدون أن يخسر الشخصية أو الإيقاع.",
    idea: "تقليل التشويش وبناء واجهة تجعل القرار التالي واضحًا للمستخدم.",
    process:
      "بدأنا بخريطة استخدام سريعة، ثم صممنا مكونات قابلة للتكرار مع تدرج بصري محسوب.",
    result: "واجهة عملية وسريعة القراءة تصلح كقاعدة لتطبيق كامل أو صفحة منتج.",
    coverImage:
      "https://framerusercontent.com/images/0NJsalJIiuQkxzGt08JVIPf4zBY.jpg?scale-down-to=2048&width=5000&height=3750",
    liveUrl: "https://naztest.framer.website/project-details/elevate",
    showOnHome: true,
    featured: false,
    galleryLayout: "full",
    galleryImages: [
      {
        url: "https://framerusercontent.com/images/0NJsalJIiuQkxzGt08JVIPf4zBY.jpg?scale-down-to=1024&width=5000&height=3750",
        alt: "Elevate - صورة 1",
        size: "full",
        order: 1,
      },
      {
        url: "https://framerusercontent.com/images/pyoFxglcEBXb4CL2At0FNretQ.jpg?scale-down-to=1024&width=6400&height=4800",
        alt: "Elevate - صورة 2",
        size: "full",
        order: 2,
      },
    ],
  },
];

const PROJECTS_QUERY = `*[_type == "project"] | order(featured desc, year desc, title asc) {
  title,
  "slug": slug.current,
  type,
  client,
  year,
  shortDescription,
  lead,
  idea,
  process,
  result,
  "coverImage": coverImage.asset->url,
  liveUrl,
  showOnHome,
  featured,
  galleryLayout,
  galleryImages[] | order(order asc) {
    "url": image.asset->url,
    alt,
    size,
    order
  }
}`;

const PROJECT_BY_SLUG_QUERY = `*[_type == "project" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  type,
  client,
  year,
  shortDescription,
  lead,
  idea,
  process,
  result,
  "coverImage": coverImage.asset->url,
  liveUrl,
  showOnHome,
  featured,
  galleryLayout,
  galleryImages[] | order(order asc) {
    "url": image.asset->url,
    alt,
    size,
    order
  }
}`;

function isSanityConfigured() {
  const config = window.NAZ_SANITY_CONFIG;
  return Boolean(config?.projectId && config.projectId !== "YOUR_SANITY_PROJECT_ID" && config.dataset);
}

function getSanityUrl(query, params = {}) {
  const config = window.NAZ_SANITY_CONFIG;
  const host = config.useCdn ? "apicdn.sanity.io" : "api.sanity.io";
  const base = `https://${config.projectId}.${host}/v${config.apiVersion}/data/query/${config.dataset}`;
  const searchParams = new URLSearchParams({ query });
  Object.entries(params).forEach(([key, value]) => {
    searchParams.set(`$${key}`, JSON.stringify(value));
  });
  return `${base}?${searchParams.toString()}`;
}

async function requestSanity(query, params) {
  if (!isSanityConfigured()) {
    return { data: null, error: null, source: "fallback" };
  }

  try {
    const response = await fetch(getSanityUrl(query, params));
    if (!response.ok) throw new Error(`Sanity request failed: ${response.status}`);
    const payload = await response.json();
    return { data: payload.result, error: null, source: "sanity" };
  } catch (error) {
    console.warn(error);
    return { data: null, error, source: "fallback" };
  }
}

function normalizeProject(project) {
  if (!project) return null;
  const slug = typeof project.slug === "string" ? project.slug : project.slug?.current;
  const galleryImages = Array.isArray(project.galleryImages)
    ? project.galleryImages
        .filter((item) => item?.url || item?.image)
        .map((item, index) => ({
          url: item.url || item.image,
          alt: item.alt || `${project.title || "مشروع"} - صورة ${index + 1}`,
          size: item.size || "medium",
          order: Number.isFinite(item.order) ? item.order : index + 1,
        }))
        .sort((a, b) => a.order - b.order)
    : [];

  return {
    title: project.title || "مشروع بدون عنوان",
    slug: slug || "",
    type: project.type || "Project",
    client: project.client || "غير محدد",
    year: project.year || "",
    shortDescription: project.shortDescription || project.lead || "",
    lead: project.lead || project.shortDescription || "",
    idea: project.idea || "",
    process: project.process || "",
    result: project.result || "",
    coverImage: project.coverImage || galleryImages[0]?.url || "",
    liveUrl: project.liveUrl || "",
    showOnHome: project.showOnHome !== false,
    featured: Boolean(project.featured),
    galleryLayout: project.galleryLayout || "grid",
    galleryImages,
  };
}

async function fetchPortfolioProjects() {
  const response = await requestSanity(PROJECTS_QUERY);
  const rawProjects = response.source === "sanity" && Array.isArray(response.data) ? response.data : window.NAZ_FALLBACK_PROJECTS;
  return {
    projects: rawProjects.map(normalizeProject).filter(Boolean),
    error: response.error,
    source: response.source,
  };
}

async function fetchPortfolioProject(slug) {
  const response = await requestSanity(PROJECT_BY_SLUG_QUERY, { slug });
  const fallbackProject = window.NAZ_FALLBACK_PROJECTS.find((project) => project.slug === slug);
  return {
    project: normalizeProject(response.data || fallbackProject),
    error: response.error,
    source: response.source,
  };
}

window.NazCMS = {
  fetchPortfolioProjects,
  fetchPortfolioProject,
  fallbackProjects: window.NAZ_FALLBACK_PROJECTS.map(normalizeProject),
};
