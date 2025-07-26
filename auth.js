// ==================== LOGIN HANDLER ====================
function login(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Basic dummy credentials — replace with your own logic or database
  const validUsername = "student";
  const validPassword = "1234";

  if (username === validUsername && password === validPassword) {
    // Save login status in localStorage
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user", username);

    // Redirect to dashboard
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password");
  }
}