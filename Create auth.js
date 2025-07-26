// Fake user data
const fakeUser = {
  email: "student@axyeschool.com",
  password: "mypassword123"
};

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting normally

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (email === fakeUser.email && password === fakeUser.password) {
    // Save login to localStorage (optional)
    localStorage.setItem("isLoggedIn", "true");
    // Redirect to dashboard
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").style.display = "block";
  }
});