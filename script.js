const projectList = document.querySelector('.project-list');
projectList.insertAdjacentHTML('beforeend', `
  <article class="project-card"><img src="images/airport-management-dashboard.png" alt="Airport Management System dashboard"><h3>Airport Management System</h3><p>A React airport portal with login, user and ticket CRUD, flight viewing, booking workflows, Context API state, and local storage.</p><a href="https://github.com/MaidaKosser/AirportManagementSystem" target="_blank" rel="noopener noreferrer" class="project-btn">View Repo</a></article>
  <article class="project-card"><img src="images/luxury-car-gallery.webp" alt="Mercedes luxury car from the Image Gallery project"><h3>Luxury Car Image Gallery</h3><p>An interactive Mercedes, BMW, Ferrari, and Tesla gallery with brand filters, carousel navigation, lightbox view, and keyboard controls.</p><a href="https://github.com/MaidaKosser/CodeAlpha_ImageGallery" target="_blank" rel="noopener noreferrer" class="project-btn">View Repo</a></article>
`);

const projectDetails = {
  'Lab Link App': {
    description: 'A React and Firebase platform where users can book lab tests, track their status, and receive reports digitally through real-time updates.'
  },
  'GSG': {
    image: 'images/carousalImage1.jpg',
    alt: 'Government School for Girls campus',
    description: 'A modern React school website with reusable components, student and faculty pages, contact forms, responsive layouts, and local data persistence.'
  },
  'Hospital Management System': {
    image: 'images/healthcenter-hospital.jpg',
    alt: 'HealthCenter Hospital website',
    description: 'A responsive HealthCenter website featuring departments, doctor profiles, appointment booking, maps, modals, and smooth page interactions.'
  },
  'Insight Journal': {
    image: 'images/insight-journal.jpg',
    alt: 'Insight Journal personal blog',
    description: 'A responsive personal blog homepage with category filtering, pagination, blog cards, and a clean reader-first layout.'
  },
  'Mind Pulse': {
    image: 'images/MinPulse.png',
    alt: 'Mind Pulse wellness product landing page',
    description: 'A responsive SaaS landing page with features, testimonials, pricing, smooth animations, and a saved light/dark theme preference.'
  },
};

document.querySelectorAll('.project-card').forEach((card) => {
  const title = card.querySelector('h3')?.textContent.trim();
  const detail = projectDetails[title];
  if (!detail) return;
  const oldVisual = card.querySelector('.project-placeholder');
  if (oldVisual) oldVisual.outerHTML = `<img src="${detail.image}" alt="${detail.alt}">`;
  card.querySelector('p').textContent = detail.description;
});

const posCard = [...document.querySelectorAll('.project-card')].find((card) => card.querySelector('h3')?.textContent.trim() === 'POS');
if (posCard) posCard.querySelector('p').textContent = 'A modern point-of-sale and inventory management system built with PHP/MySQL and also recreated in React for a more dynamic user experience.';

document.head.insertAdjacentHTML('beforeend', `
  <style>
    .project-card p { min-height: 5.8em; }
    @media (max-width: 800px) {
      body.menu-open { overflow: hidden; }
      .header { height: 70px; overflow: visible; z-index: 1001; }
      .navbar { height: 70px; padding: .9rem 1.2rem; }
      .logo { font-size: 1.8rem; }
      .menu-toggle { align-items: center; background: #6d4a40; border: 1px solid #ffffff38; border-radius: 9px; display: flex; height: 40px; justify-content: center; width: 40px; z-index: 1004; }
      .menu { background: linear-gradient(160deg, #5a3e36, #3d2924); bottom: 0; box-shadow: -16px 0 40px #21120ba0; display: flex !important; flex-direction: column; gap: 0 !important; left: auto !important; padding: 5.8rem 1.8rem 2rem !important; position: fixed !important; right: -310px !important; top: 0 !important; transition: right .32s cubic-bezier(.2,.8,.2,1) !important; width: 290px !important; z-index: 1003; }
      .menu::before { color: #ffdd99; content: 'Navigate'; font-family: 'Playfair Display', serif; font-size: 1.65rem; left: 1.8rem; position: absolute; top: 1.55rem; }
      .menu::after { bottom: 2rem; color: #ffdd998c; content: 'Maida Kosser  ·  Portfolio'; font-size: .72rem; left: 1.8rem; letter-spacing: .06em; position: absolute; text-transform: uppercase; }
      .menu.show { right: 0 !important; }
      .menu-link { border-bottom: 1px solid #ffffff20; color: #fffaf4 !important; font-size: 1rem !important; padding: .95rem 0; width: 100%; }
      .menu-link:hover, .menu-link.active-link { color: #ffdd99 !important; padding-left: .35rem; }
      .menu-overlay { background: #21120b9c; inset: 0; opacity: 0; pointer-events: none; position: fixed; transition: opacity .3s; z-index: 999; }
      .menu-overlay.show { opacity: 1; pointer-events: auto; }
    }
  </style>
`);

const overlay = document.createElement('div');
overlay.className = 'menu-overlay';
document.body.appendChild(overlay);

window.addEventListener('load', () => {
  const intro = document.querySelector('#intro');
  setTimeout(() => { intro.classList.add('fade-out'); setTimeout(() => intro.remove(), 700); }, 2000);
});

const links = document.querySelectorAll('.menu-link');
const sections = document.querySelectorAll('section[id]');
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  const y = window.scrollY + header.offsetHeight + 15;
  sections.forEach((section) => document.querySelector(`.menu a[href="#${section.id}"]`)?.classList.toggle('active-link', y >= section.offsetTop && y < section.offsetTop + section.offsetHeight));
});

const toggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('#menu');
const icon = toggle.querySelector('i');
function closeMenu() {
  menu.classList.remove('show'); overlay.classList.remove('show'); document.body.classList.remove('menu-open');
  toggle.setAttribute('aria-expanded', 'false'); icon.className = 'fa-solid fa-bars';
}
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('show');
  overlay.classList.toggle('show', open); document.body.classList.toggle('menu-open', open);
  toggle.setAttribute('aria-expanded', open); icon.className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
});
overlay.addEventListener('click', closeMenu);
links.forEach((link) => link.addEventListener('click', closeMenu));

const bars = document.querySelectorAll('.progress-bar div');
const skills = document.querySelector('#skills');
function progress() { if (skills.getBoundingClientRect().top < innerHeight * .85) bars.forEach((bar) => { bar.style.width = bar.dataset.progress; }); }
addEventListener('scroll', progress); progress();
document.querySelector('#current-year').textContent = new Date().getFullYear();
