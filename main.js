// main.js

document.addEventListener("DOMContentLoaded", function () {
  // Close announcement banner
  const closeBanner = document.querySelector(".alert-banner .close-btn");
  if (closeBanner) {
    closeBanner.addEventListener("click", () => {
      document.querySelector(".alert-banner").style.display = "none";
    });
  }

  // Newsletter signup confirmation
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("✅ Thank you for subscribing to our newsletter!");
      newsletterForm.reset();
    });
  }

  // Modal for staff bios
  const modal = document.getElementById("staffModal");
  const modalContent = document.getElementById("modalContent");
  const modalClose = document.getElementById("modalClose");

  const staffCards = document.querySelectorAll(".staff-card");
  staffCards.forEach((card) => {
    card.addEventListener("click", () => {
      const name = card.getAttribute("data-name");
      const bio = card.getAttribute("data-bio");
      modalContent.innerHTML = `<h3>${name}</h3><p>${bio}</p>`;
      modal.style.display = "block";
    });
  });

  if (modalClose) {
    modalClose.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });

  // Live Chat Button
  const chatBtn = document.getElementById("chatButton");
  if (chatBtn) {
    chatBtn.addEventListener("click", () => {
      alert("💬 Live chat support is coming soon. Stay tuned!");
    });
  }

  // Language Selector
  const langSelector = document.getElementById("language");
  if (langSelector) {
    langSelector.addEventListener("change", function () {
      alert(`🌐 Language changed to: ${this.value}`);
      // Language switching logic to be implemented (i18n)
    });
  }

  // Smooth scrolling (for anchor links if used)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Search Functionality (basic)
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  if (searchInput && searchBtn) {
    searchBtn.addEventListener("click", function () {
      const query = searchInput.value.trim();
      if (query) {
        alert(`🔍 You searched for: "${query}".\n(Smart search will be implemented.)`);
      }
    });
  }
});