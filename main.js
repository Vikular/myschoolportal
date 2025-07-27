// Staff Modal Logic
function openStaffModal(name, title) {
  document.getElementById('staffModal').style.display = 'block';
  document.getElementById('modalName').textContent = name;
  document.getElementById('modalTitle').textContent = title;
}

function closeModal() {
  document.getElementById('staffModal').style.display = 'none';
}

// Newsletter feedback
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('newsletterMessage').textContent = 'Thank you for subscribing!';
  this.reset();
});

// Search functionality (sample)
document.getElementById('searchBar')?.addEventListener('input', function () {
  console.log("Searching for:", this.value);
});