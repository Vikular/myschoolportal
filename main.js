// Load persisted state on load
window.addEventListener('load', () => {
  // Theme
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
  // Language
  const lang = localStorage.getItem('lang') || 'en';
  document.getElementById('languageSelector').value = lang;
  document.querySelectorAll('[data-lang-en]').forEach(el => {
    const txt = el.getAttribute(`data-lang-${lang}`);
    if (txt) el.textContent = txt;
  });
  // Course filter
  const cat = localStorage.getItem('courseFilter');
  if (cat) applyFilter(cat);
});

// Theme toggle with persistence
document.getElementById('themeToggle')?.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Language selector with persistence
document.getElementById('languageSelector')?.addEventListener('change', e => {
  const lang = e.target.value;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-lang-en]').forEach(el => {
    const txt = el.getAttribute(`data-lang-${lang}`);
    if (txt) el.textContent = txt;
  });
});

// Course filter with persistence
function applyFilter(cat) {
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-filter') === cat);
  });
  document.querySelectorAll('.course-card').forEach(card => {
    card.style.display = (cat === 'all' || card.getAttribute('data-category') === cat) ? 'block' : 'none';
  });
}
document.querySelectorAll('.filter-btn').forEach(btn =>
  btn.addEventListener('click', () => {
    const cat = btn.getAttribute('data-filter');
    localStorage.setItem('courseFilter', cat);
    applyFilter(cat);
  })
);

// News auto-scroll, calendar, newsletter, live chat, SW registration remain as-is...
// ...