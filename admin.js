// admin.js

// Ensure only admin can access
document.addEventListener("DOMContentLoaded", () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser || currentUser.role !== "admin") {
    alert("Access denied. Admins only.");
    window.location.href = "login.html";
    return;
  }

  loadStudents();
  document.getElementById("logoutBtn").addEventListener("click", logout);
});

// Load all students into admin table
function loadStudents() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const students = users.filter(user => user.role === "student");
  const tbody = document.getElementById("studentList");
  tbody.innerHTML = "";

  students.forEach((student, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${student.name}</td>
      <td>${student.username}</td>
      <td>${student.level || "N/A"}</td>
      <td><button class="btn small" onclick="editStudent('${student.username}')">Edit</button></td>
    `;

    tbody.appendChild(tr);
  });
}

// Placeholder edit function (to be expanded later)
function editStudent(username) {
  alert("Edit profile for student: " + username);
  // Later: open modal or redirect to profile edit page
}

// Logout function
function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}