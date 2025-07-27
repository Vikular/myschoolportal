// Real-time alert banner simulation
document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("alert-banner");

  const alerts = [
    "Admissions for 2025/2026 are now open!",
    "Check your email for exam schedules.",
    "Campus will be closed for maintenance on Friday."
  ];

  if (banner) {
    banner.textContent = alerts[0];
    banner.classList.remove("hidden");

    setInterval(() => {
      const next = alerts[Math.floor(Math.random() * alerts.length)];
      banner.textContent = next;
    }, 10000);
  }

  // Newsletter form
  const form = document.getElementById("newsletter-form");
  const feedback = document.getElementById("newsletter-feedback");

  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      feedback.classList.remove("hidden");
      feedback.textContent = "✅ Thanks for subscribing!";
      feedback.style.color = "green";
      form.reset();
    });
  }
});

// Placeholder live chat function
function openChat() {
  alert("🔔 Live chat coming soon. Please check back later.");
}