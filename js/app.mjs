import { PROJECTS } from "./projects.mjs";

const LANG_KEY = "wedo911-lang";

const STRINGS = {
  en: {
    dir: "ltr",
    langToggle: "العربية",
    name: "Waleed Bajaman",
    role: "Open-source tools — privacy, accessibility, and AI integrity",
    intro:
      "Free, open-source tools that respect the people who use them. Almost everything here runs entirely in your browser: no account, no upload, no tracking, no server. Every project is MIT-licensed, and the source is right there to read.",
    startHere: "Start here",
    startHereBody:
      "If you only open one thing, open clearbox — seven everyday privacy and accessibility tools in one place.",
    openLive: "Open live",
    viewSource: "Source",
    liveLabel: "Live",
    categories: {
      toolkit: "Featured toolkit",
      privacy: "Safety & privacy",
      text: "Text & language",
      research: "Research integrity",
      creative: "Creative",
      agents: "Tools for AI agents",
      eval: "AI evaluation integrity",
    },
    groupIncludes: "Includes",
    footer: "All projects are MIT-licensed and open source.",
    githubProfile: "GitHub profile",
  },
  ar: {
    dir: "rtl",
    langToggle: "English",
    name: "وليد باجعمان",
    role: "أدوات مفتوحة المصدر — الخصوصية، وسهولة الوصول، ونزاهة الذكاء الاصطناعي",
    intro:
      "أدوات مجانية ومفتوحة المصدر تحترم من يستخدمها. كل ما هنا تقريبًا يعمل بالكامل داخل متصفحك: بدون حساب، بدون رفع ملفات، بدون تتبع، بدون خادم. كل مشروع مرخّص برخصة MIT، والكود المصدري متاح للقراءة.",
    startHere: "ابدأ من هنا",
    startHereBody:
      "إن كنت ستفتح شيئًا واحدًا فقط، فافتح كلير بوكس — سبع أدوات يومية للخصوصية وسهولة الوصول في مكان واحد.",
    openLive: "افتح النسخة الحية",
    viewSource: "الكود المصدري",
    liveLabel: "حي",
    categories: {
      toolkit: "الحزمة المميزة",
      privacy: "الأمان والخصوصية",
      text: "النصوص واللغة",
      research: "نزاهة البحث العلمي",
      creative: "إبداعي",
      agents: "أدوات لوكلاء الذكاء الاصطناعي",
      eval: "نزاهة تقييم الذكاء الاصطناعي",
    },
    groupIncludes: "تشمل",
    footer: "جميع المشاريع مفتوحة المصدر ومرخّصة برخصة MIT.",
    githubProfile: "حساب GitHub",
  },
};

function getLang() {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "en" || saved === "ar") return saved;
  } catch {
    // localStorage blocked -- fall back to the browser's language.
  }
  return navigator.language?.toLowerCase().startsWith("ar") ? "ar" : "en";
}

const lang = getLang();
const s = STRINGS[lang];

document.documentElement.lang = lang;
document.documentElement.dir = s.dir;
document.title = `${s.name} — ${s.role}`;

document.querySelectorAll("[data-i18n]").forEach((node) => {
  const value = s[node.getAttribute("data-i18n")];
  if (typeof value === "string") node.textContent = value;
});

const toggle = document.getElementById("lang-toggle");
toggle.textContent = s.langToggle;
toggle.addEventListener("click", () => {
  try {
    localStorage.setItem(LANG_KEY, lang === "en" ? "ar" : "en");
  } catch {
    // Non-fatal; the reload below simply keeps the current language.
  }
  window.location.reload();
});

function buildCard(project) {
  const text = project[lang];
  const card = document.createElement("article");
  card.className = project.featured ? "project-card featured" : "project-card";

  const title = document.createElement("h3");
  title.textContent = text.name;
  if (project.live) {
    const badge = document.createElement("span");
    badge.className = "live-badge";
    badge.textContent = s.liveLabel;
    title.append(" ", badge);
  }

  const desc = document.createElement("p");
  desc.className = "project-desc";
  desc.textContent = text.desc;

  card.append(title, desc);

  if (project.members) {
    const members = document.createElement("p");
    members.className = "project-members";
    members.textContent = `${s.groupIncludes}: ${project.members.join(" · ")}`;
    card.append(members);
  }

  const links = document.createElement("div");
  links.className = "project-links";
  if (project.live) {
    const live = document.createElement("a");
    live.className = "btn primary";
    live.href = project.live;
    live.textContent = s.openLive;
    links.append(live);
  }
  const repo = document.createElement("a");
  repo.className = "btn";
  repo.href = project.repo;
  repo.target = "_blank";
  repo.rel = "noopener";
  repo.textContent = s.viewSource;
  links.append(repo);

  card.append(links);
  return card;
}

const main = document.getElementById("projects");
main.replaceChildren();

const byCategory = new Map();
for (const p of PROJECTS) {
  if (!byCategory.has(p.category)) byCategory.set(p.category, []);
  byCategory.get(p.category).push(p);
}

for (const [category, projects] of byCategory) {
  const section = document.createElement("section");
  section.className = "category";

  const heading = document.createElement("h2");
  heading.textContent = s.categories[category] || category;
  section.append(heading);

  const grid = document.createElement("div");
  grid.className = "project-grid";
  for (const project of projects) grid.append(buildCard(project));
  section.append(grid);

  main.append(section);
}
