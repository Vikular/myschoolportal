// Login form logic
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const resetForm = document.getElementById("resetForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (username === "student" && password === "password") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid credentials");
      }
    });
  }

  if (resetForm) {
    resetForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      document.getElementById("resetMessage").textContent =
        "A reset link has been sent to " + email;
    });
  }
});