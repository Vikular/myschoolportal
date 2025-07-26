/* Reset and base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Segoe UI', sans-serif;
  line-height: 1.6;
  background-color: #f4f4f4;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #003366;
  padding: 15px 30px;
}
.logo {
  display: flex;
  align-items: center;
  color: white;
  font-size: 22px;
  text-decoration: none;
}
.logo img {
  height: 40px;
  margin-right: 10px;
}
.menu-icon {
  display: none;
  font-size: 26px;
  color: white;
  cursor: pointer;
}
.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}
.nav-links li a,
.logout-btn {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  padding: 6px 12px;
  transition: background 0.3s ease;
}
.nav-links li a:hover,
.logout-btn:hover {
  background-color: #0059b3;
  border-radius: 5px;
}
.login-btn {
  background-color: #00b894;
  font-weight: bold;
  border-radius: 5px;
}
.logout-btn {
  background-color: crimson;
  border: none;
  cursor: pointer;
}

/* Hero Section */
.hero {
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(to right, #e0f7fa, #ffffff);
}
.hero h1 {
  color: #003366;
  font-size: 36px;
  margin-bottom: 10px;
}
.hero p {
  color: #333;
  font-size: 18px;
  margin-bottom: 30px;
}
.btn {
  padding: 12px 24px;
  background-color: #003366;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
}
.btn:hover {
  background-color: #0059b3;
}

/* Login Page */
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
.login-container {
  background: white;
  padding: 40px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  border-radius: 10px;
}
.login-logo {
  height: 60px;
  margin-bottom: 20px;
}
.login-container input {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.login-container button {
  width: 100%;
}

/* Footer */
.footer {
  text-align: center;
  background: #003366;
  color: white;
  padding: 20px;
  margin-top: 50px;
}

/* Responsive */
@media (max-width: 768px) {
  .menu-icon {
    display: block;
  }

  .nav-links {
    flex-direction: column;
    display: none;
    background: #003366;
    position: absolute;
    top: 70px;
    right: 0;
    width: 100%;
    text-align: center;
  }

  #menu-toggle:checked + .menu-icon + nav .nav-links {
    display: flex;
  }
}