/* ==========================================================
   DATA
   ========================================================== */
const ROLES = [
  "Software Developer",
  "Mobile Developer",
  "Machine Learning Enthusiast",
  "UI/UX Enthusiast",
];

const SKILL_GROUPS = [
  {
    title: "Programming",
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    items: [
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "PHP", level: 75 },
      { name: "Laravel", level: 75 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "Mobile",
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="7" y="2" width="10" height="20" rx="2"/><line x1="11" y1="18" x2="13" y2="18"/></svg>',
    items: [{ name: "Flutter", level: 80 }],
  },
  {
    title: "Database",
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>',
    items: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 70 },
      { name: "ERD", level: 80 },
    ],
  },
  {
    title: "Machine Learning",
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/></svg>',
    items: [
      { name: "CNN", level: 70 },
      { name: "OpenCV", level: 70 },
    ],
  },
  {
    title: "Networking",
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="14" width="6" height="6"/><rect x="9" y="4" width="6" height="6"/><rect x="16" y="14" width="6" height="6"/><path d="M12 10v4M5 14v-2h14v2"/></svg>',
    items: [
      { name: "Mikrotik", level: 80 },
      { name: "TCP/IP", level: 75 },
      { name: "Cisco Packet Tracer", level: 75 },
    ],
  },
  {
    title: "Tools",
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    items: [
      { name: "Git", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 75 },
      { name: "Arduino IDE", level: 65 },
    ],
  },
];

const PROJECTS = [
  {
    title: "Face Recognition Attendance System",
    desc: "Real-time attendance system menggunakan Face Recognition berbasis CNN dan OpenCV.",
    tech: ["Python", "CNN", "OpenCV"],
    link: "https://github.com/kyor76/absen-deteksi-wajah",
    tag: "Development",
  },
  {
    title: "Mobile To-Do List",
    desc: "Aplikasi Flutter untuk manajemen tugas dengan fitur tambah, edit, hapus, dan pelacakan status tugas.",
    tech: ["Flutter"],
    link: "https://github.com/kyor76/tugas-aplikasi-todolist",
    tag: "Development",
  },
  {
    title: "StarCoffee UI/UX Design",
    desc: "Perancangan UI/UX aplikasi mobile pemesanan kopi mencakup wireframe, prototype, dan user flow.",
    tech: ["Figma", "UI/UX"],
    link: null,
    tag: "UI/UX Design",
  },
  {
    title: "Mikrotik Hotspot Configuration",
    desc: "Implementasi pembatasan akses WiFi menggunakan Mikrotik Hotspot dan User Manager dengan sistem voucher berbasis waktu.",
    tech: ["Mikrotik"],
    link: null,
    tag: "Networking",
  },
  {
    title: "Employee Salary Calculator",
    desc: "Aplikasi Python untuk menghitung gaji karyawan menggunakan konsep Object-Oriented Programming (OOP).",
    tech: ["Python", "OOP"],
    link: "https://github.com/kyor76/hitunggaji-karyawan",
    tag: "Development",
  },
];

const CERTIFICATES = [
  { title: "PCAP: Programming Essentials in Python" },
  { title: "Mikrotik MTCNA" },
  { title: "Classical Cryptography for Beginner" },
  { title: "Sistem Basis Data" },
];

const AWARD_ICON =
  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5"/></svg>';

const EXTERNAL_ICON =
  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';

/* ==========================================================
   RENDER: SKILLS
   ========================================================== */
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = SKILL_GROUPS.map(
    (group) => `
    <div class="skill-card reveal">
      <div class="skill-card__head">
        <span class="skill-card__icon">${group.icon}</span>
        <span class="skill-card__title">${group.title}</span>
      </div>
      ${group.items
        .map(
          (skill) => `
        <div class="skill-item">
          <div class="skill-item__top">
            <span class="skill-item__name">${skill.name}</span>
            <span class="skill-item__pct">${skill.level}%</span>
          </div>
          <div class="skill-bar-track">
            <div class="skill-bar-fill" data-level="${skill.level}"></div>
          </div>
        </div>`
        )
        .join("")}
    </div>`
  ).join("");
}

/* ==========================================================
   RENDER: PROJECTS
   ========================================================== */
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = PROJECTS.map(
    (p) => `
    <div class="project-card reveal">
      <div class="project-card__top">
        <span class="project-card__tag">${p.tag}</span>
        ${
          p.link
            ? `<a href="${p.link}" target="_blank" rel="noopener noreferrer" class="project-card__link" aria-label="Buka ${p.title} di GitHub">${EXTERNAL_ICON}</a>`
            : ""
        }
      </div>
      <h3 class="project-card__title">${p.title}</h3>
      <p class="project-card__desc">${p.desc}</p>
      <div class="project-card__tech">
        ${p.tech.map((t) => `<span class="tech-pill">${t}</span>`).join("")}
      </div>
    </div>`
  ).join("");
}

/* ==========================================================
   RENDER: CERTIFICATES
   ========================================================== */
function renderCertificates() {
  const grid = document.getElementById("certificatesGrid");
  grid.innerHTML = CERTIFICATES.map(
    (c) => `
    <div class="certificate-card reveal">
      <div class="certificate-card__icon">${AWARD_ICON}</div>
      <p class="certificate-card__label">Certification</p>
      <h3 class="certificate-card__title">${c.title}</h3>
    </div>`
  ).join("");
}

/* ==========================================================
   TYPING EFFECT
   ========================================================== */
function startTyping() {
  const el = document.getElementById("typedRole");
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const word = ROLES[wordIndex % ROLES.length];

    if (!deleting) {
      charIndex++;
      el.textContent = word.slice(0, charIndex);
      if (charIndex === word.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      charIndex--;
      el.textContent = word.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        wordIndex++;
      }
    }
    setTimeout(tick, deleting ? 40 : 70);
  }
  tick();
}

/* ==========================================================
   SCROLL REVEAL
   ========================================================== */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");

          // animate skill bars inside this card, if any
          entry.target.querySelectorAll(".skill-bar-fill").forEach((bar) => {
            const level = bar.getAttribute("data-level");
            requestAnimationFrame(() => {
              bar.style.width = level + "%";
            });
          });

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((item) => observer.observe(item));
}

/* ==========================================================
   NAVBAR: scroll progress + active link + mobile menu
   ========================================================== */
function initNavbar() {
  const progress = document.getElementById("scrollProgress");
  const burger = document.getElementById("burgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const navLinksDesktop = document.querySelectorAll(".navbar__links .nav-link");

  window.addEventListener(
    "scroll",
    () => {
      const scrollTop = document.documentElement.scrollTop;
      const max =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      progress.style.width = (max > 0 ? (scrollTop / max) * 100 : 0) + "%";
    },
    { passive: true }
  );

  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    mobileMenu.classList.toggle("open");
  });

  mobileMenu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("open");
      mobileMenu.classList.remove("open");
    });
  });

  const sections = document.querySelectorAll("section[id]");
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinksDesktop.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("data-section") === id);
          });
        }
      });
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
  );
  sections.forEach((section) => sectionObserver.observe(section));
}

/* ==========================================================
   INIT
   ========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  renderCertificates();
  startTyping();
  initNavbar();
  initReveal();
});
