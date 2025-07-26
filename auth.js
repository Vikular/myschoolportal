// auth.js

function loginUser(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  // Dummy login (replace with real auth later)
  const validUsers = [
    { username: "student", password: "1234" },
    { username: "admin", password: "admin" }
  ];

  const isValid = validUsers.some(
    (user) => user.username === username && user.password === password
  );

  if (isValid) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", username);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("login-error").style.display = "block";
  }
}

function checkAuth() {
  const loggedIn = localStorage.getItem("loggedIn");
  if (loggedIn !== "true") {
    window.location.href = "login.html";
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("username");
  window.location.href = "login.html";
}