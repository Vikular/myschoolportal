// Static dataset
const courses = {
 1: { title: "Physics BSc", desc: "Study matter & energy." },
 2: { title: "Graphic Design BA", desc: "Visual creativity & tools." },
 3: { title: "Business Admin", desc: "Leadership, marketing, finance." }
};
const userSchedule = [
  { time: "09:00 AM", course: "Physics BSc", room: "R101" },
  { time: "11:00 AM", course: "Business Admin", room: "R202" }
];

// Preloader hide
window.addEventListener('load', () => {
  const p = document.getElementById('preloader');
  if(p) p.style.display='none';
});

// Login UI
const loginBtn = document.getElementById('loginBtn'),
      loginModal = document.getElementById('loginModal'),
      userBadge = document.getElementById('userBadge');
loginBtn.onclick = () => loginModal.classList.remove('hidden');
loginModal.querySelector('.close').onclick = () => loginModal.classList.add('hidden');
document.getElementById('loginSubmit').onclick = () => {
  const u = document.getElementById('username').value || "Student";
  document.getElementById('userName').textContent = u;
  userBadge.classList.remove('hidden');
  loginBtn.classList.add('hidden');
  loginModal.classList.add('hidden');
};

// Course modal
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

// Render schedule
function renderSchedule() {
  const body = document.getElementById('scheduleBody');
  body.innerHTML = userSchedule.map(i => `<tr><td>${i.time}</td><td>${i.course}</td><td>${i.room}</td></tr>`).join('');
}
renderSchedule();

// Search autocomplete
const searchInput = document.getElementById('searchInput'),
      acList = document.getElementById('autocompleteList');
searchInput.addEventListener('input', () => {
  const v = searchInput.value.toLowerCase(), matches = Object.values(courses).filter(c => c.title.toLowerCase().includes(v));
  acList.innerHTML = '';
  if(!v || !matches.length) return acList.classList.add('hidden');
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
searchInput.addEventListener('blur', () => setTimeout(() => acList.classList.add('hidden'),150));

// Menu toggle mobile
document.getElementById('menuToggle').onclick = () => document.getElementById('mainNav').classList.toggle('open');

// Chat toggle
document.getElementById('chatToggle').onclick = () => document.getElementById('chatBox').classList.toggle('hidden');