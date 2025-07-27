// Theme toggle
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Live chat toggle
document.getElementById('chatToggle').addEventListener('click', () => {
  document.getElementById('chatBox').classList.toggle('hidden');
});

// Newsletter feedback
document.getElementById('newsletterForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const feedback = document.getElementById('newsletterFeedback');
  feedback.textContent = '✅ Thank you for subscribing!';
});

// Preloader
window.addEventListener('load', () => {
  document.getElementById('preloader').style.display = 'none';
});