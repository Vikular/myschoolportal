// Mock data
const courses = {
  1: { title: "Physics BSc", desc: "Study matter & energy in depth." },
  2: { title: "Graphic Design BA", desc: "Visual creativity, digital tools & UX." },
  3: { title: "Business Admin", desc: "Leadership, marketing & finance essentials." }
};
const userSchedule = [
  { time: "09:00 AM", course: "Physics BSc", room: "R101" },
  { time: "11:00 AM", course: "Business Admin", room: "R202" }
];

// Page ready
window.addEventListener('load', () => {
  document.getElementById('preloader')?.remove();
  renderSchedule();
});

// Login modal behavior
const loginBtn = document.getElementById('loginBtn'),
      loginModal = document.getElementById('loginModal'),
      userBadge = document.getElementById('userBadge'),
      loginForm = document.getElementById('loginForm');
loginBtn.onclick = () => loginModal.classList.remove('hidden');
loginModal.querySelector('.close').onclick = () => loginModal.classList.add('hidden');
loginForm.onsubmit = () => {
  const user = document.getElementById('username').value || "Student";
  document.getElementById('userName').textContent = user;
  userBadge.classList.remove('hidden');
  loginBtn.classList.add('hidden');
  loginModal.classList.add('hidden');
};

// Course details modal
const courseModal = document.getElementById('courseModal');
courseModal.querySelector('.close').onclick = () => courseModal.classList.add('hidden');
document.querySelectorAll('.course-card').forEach(card => {
  card.onclick = () => {
    const info = courses[card.dataset.id];
    document.getElementById('courseTitle').textContent = info.title;
    document.getElementById('courseDesc').textContent = info.desc;
    courseModal.classList.remove('hidden');
  };
});

// Render schedule table
function renderSchedule() {
  const tbody = document.getElementById('scheduleBody');
  tbody.innerHTML = userSchedule.map(x =>
    `<tr><td>${x.time}</td><td>${x.course}</td><td>${x.room}</td></tr>`
  ).join('');
}

// Search autocomplete
const searchInput = document.getElementById('searchInput'),
      acList = document.getElementById('autocompleteList');
searchInput.addEventListener('input', () => {
  const val = searchInput.value.toLowerCase();
  acList.innerHTML = '';
  const matches = Object.values(courses).filter(c => c.title.toLowerCase().includes(val));
  if (!val || matches.length === 0) return acList.classList.add('hidden');
  matches.forEach(c => {
    const li = document.createElement('li');
    li.textContent = c.title;
    li.onclick = () => {
      searchInput.value = c.title;
      acList.classList.add('hidden');
    };
    acList.appendChild(li);
  });
  acList.classList.remove('hidden');
});
searchInput.addEventListener('blur', () => setTimeout(() => acList.classList.add('hidden'), 150));

// Chat toggle
document.getElementById('chatToggle').onclick = () =>
  document.getElementById('chatBox').classList.toggle('hidden');

// Mobile nav toggle
document.getElementById('menuToggle').onclick = () =>
  document.getElementById('mainNav').classList.toggle('open');