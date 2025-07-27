// ========== Mock User Session ==========
const user = JSON.parse(localStorage.getItem("globalUniUser")) || {
  name: "Jane Doe",
  email: "jane.doe@globaluni.edu",
  avatar: "../assets/img/avatar.png"
};

document.getElementById("studentName").textContent = user.name;
document.getElementById("profileName").textContent = user.name;
document.getElementById("profileEmail").textContent = user.email;
document.getElementById("profileAvatar").src = user.avatar;

// ========== Logout ==========
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("globalUniUser");
  window.location.href = "../index.html";
});

// ========== Mock Data ==========
const scheduleData = [
  { time: "08:00 AM", course: "Physics BSc", room: "Hall A" },
  { time: "10:00 AM", course: "Graphic Design BA", room: "Room 203" },
  { time: "12:00 PM", course: "Business Admin", room: "Lab 1" },
];

const courseData = [
  "Physics BSc",
  "Graphic Design BA",
  "Business Admin",
  "Digital Marketing",
];

const notifications = [
  "Your assignment on Quantum Physics is due tomorrow.",
  "Campus Wi-Fi maintenance tonight at 11 PM.",
  "New internship listings available in Career Center.",
];

// ========== Populate Schedule ==========
const scheduleList = document.getElementById("scheduleList");
scheduleData.forEach(item => {
  const li = document.createElement("li");
  li.textContent = `${item.time} – ${item.course} (${item.room})`;
  scheduleList.appendChild(li);
});

// ========== Populate Enrolled Courses ==========
const courseList = document.getElementById("courseList");
courseData.forEach(course => {
  const li = document.createElement("li");
  li.textContent = course;
  courseList.appendChild(li);
});

// ========== Populate Notifications ==========
const notificationList = document.getElementById("notificationList");
notifications.forEach(note => {
  const li = document.createElement("li");
  li.textContent = note;
  notificationList.appendChild(li);
});