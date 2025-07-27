// Preloader
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) preloader.style.display = 'none';
});

// Theme Toggle
document.getElementById('themeToggle')?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle?.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

// Language Selector
const langSel = document.getElementById('languageSelector');
langSel?.addEventListener('change', (e) => {
  const lang = e.target.value;
  document.querySelectorAll('[data-lang-en]').forEach(el => {
    const val = el.getAttribute(`data-lang-${lang}`);
    if (val) el.textContent = val;
  });
});

// Course Filter
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.getAttribute('data-filter');
    document.querySelectorAll('.course-card').forEach(card => {
      card.style.display = (cat === 'all' || card.getAttribute('data-category') === cat) ? 'block' : 'none';
    });
  });
});

// News Feed Auto Scroll
const newsFeed = document.querySelector('.news-feed');
if (newsFeed) {
  let scrollPos = 0;
  setInterval(() => {
    const first = newsFeed.firstElementChild;
    newsFeed.appendChild(first.cloneNode(true));
    newsFeed.removeChild(first);
  }, 3000);
}

// Events Calendar (Simple)
function createCalendar(containerId, events) {
  const cont = document.getElementById(containerId);
  if (!cont) return;
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  const first = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month+1, 0).getDate();
  let html = `<table><tr>`;
  const weekdays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  weekdays.forEach(d => html += `<th>${d}</th>`);
  html += `</tr><tr>`;
  for (let i=0;i<first;i++) html += `<td></td>`;
  for (let day=1; day<=daysInMonth; day++) {
    const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    const hasEvent = events[dateStr];
    html += `<td${hasEvent? ' class="has-event"' : ''} title="${hasEvent||''}">${day}</td>`;
    if ((first+day)%7 === 0 && day !== daysInMonth) html += '</tr><tr>';
  }
  html += `</tr></table>`;
  cont.innerHTML = html;
}
const eventsObj = {
  [`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,'0')}-10`]: 'Convocation',
  [`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,'0')}-05`]: 'Research Summit'
};
createCalendar('calendar', eventsObj);

// Newsletter Subscribe
document.getElementById('newsletterForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.querySelector('input[type="email"]').value;
  const feedback = document.getElementById('newsletterFeedback');
  if (email.includes('@')) {
    feedback.textContent = "✅ You're subscribed!";
    feedback.style.color = 'green';
    e.target.reset();
  } else {
    feedback.textContent = "❗ Please enter a valid email.";
    feedback.style.color = 'red';
  }
});

// Live Chat Toggle
document.getElementById('chatToggle')?.addEventListener('click', () => {
  document.getElementById('chatBox')?.classList.toggle('hidden');
});

// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').catch(err => console.error('SW reg failed', err));
}