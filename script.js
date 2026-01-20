const themeBtn = document.getElementById("themeBtn");
const cvFrame = document.getElementById("cvFrame");
let cvTimeout;

function toggleTheme() {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "Light" : "Dark";
}

function toggleCV() {
  if (cvFrame.style.display === "block") {
    cvFrame.style.display = "none";
    clearTimeout(cvTimeout);
  } else {
    cvFrame.src = "cv.pdf";
    cvFrame.style.display = "block";

    cvTimeout = setTimeout(() => {
      cvFrame.style.display = "none";
    }, 8000); // CV shows for 8 seconds
  }
}

function validateForm() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let message = document.getElementById("message");

  if (name.value === "" || email.value === "" || message.value === "") {
    alert("All fields required");
    return false;
  }
  alert("Message sent");
  return false;
}

/* Scroll Animation */
const animated = document.querySelectorAll(".animate");
window.addEventListener("scroll", () => {
  animated.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 120) {
      el.classList.add("show");
    }
  });
});

/* HERO INFO MOVING CARDS */
const infoCardEl = document.getElementById("infoCard");
const roles = [
  "Student at UET Abbottabad",
  "Beginner Web Developer",
  "HTML, CSS, JavaScript",
  "Future Software Engineer"
];
let currentRole = 0;

function showRole() {
  infoCardEl.style.opacity = 0;
  setTimeout(() => {
    infoCardEl.textContent = roles[currentRole];
    infoCardEl.style.opacity = 1;
    currentRole = (currentRole + 1) % roles.length;
  }, 400);
}

setInterval(showRole, 3000);
showRole();
