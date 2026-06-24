const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#navMenu');
const navLinks = document.querySelectorAll('.nav-menu a');
const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navMenu.classList.toggle('open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('open');
      document.body.classList.remove('menu-open');
    });
  });
}

const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach((element) => observer.observe(element));

const skillButtons = document.querySelectorAll('.tab-btn');
const skillCards = document.querySelectorAll('.skill-card');

skillButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    skillButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    skillCards.forEach((card) => {
      const categories = card.dataset.category.split(' ');
      const shouldShow = filter === 'all' || categories.includes(filter);
      card.classList.toggle('hide', !shouldShow);
    });
  });
});

const projectButtons = document.querySelectorAll('.project-filter');
const projectCards = document.querySelectorAll('.project-card');

projectButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.project;
    projectButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    projectCards.forEach((card) => {
      const types = card.dataset.type.split(' ');
      const shouldShow = filter === 'all' || types.includes(filter);
      card.classList.toggle('hide', !shouldShow);
    });
  });
});
