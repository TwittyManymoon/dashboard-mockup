const users = [
  { username: "admin", password: "admin123" },
  { username: "user1", password: "pass1234" },
  { username: "demo", password: "demo123" }
];

const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginError = document.getElementById("loginError");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  const matchedUser = users.find(function (user) {
    return user.username === username && user.password === password;
  });

  if (matchedUser) {
    window.location.href = "dashboard.html";
    return;
  }

  loginError.textContent = "Invalid username or password.";
});