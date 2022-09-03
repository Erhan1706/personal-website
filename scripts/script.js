//Scroll Animations
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function revealAbout() {
  var reveals = document.querySelectorAll(".revealAbout");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", revealAbout);

//Navbar scrolling to the right section
const projectsNav = document.getElementById("projects-nav");
projectsNav.addEventListener("click", () => {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

const aboutNav = document.getElementById("about-nav");
aboutNav.addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

const skillsNav = document.getElementById("skills-nav");
skillsNav.addEventListener("click", () => {
  document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
});

const contactsNav = document.getElementById("contacts-nav");
contactsNav.addEventListener("click", () => {
  document.getElementById("contacts").scrollIntoView({ behavior: "smooth" });
});

//Navbar being highlighted when it's in the right section
let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("header nav div div div");

window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav div div div[href*=" + id + "]")
          .classList.add("active");
      });
    }
    let documentHeight = document.body.scrollHeight;
    let currentScroll = window.scrollY + window.innerHeight;
    // When the user is [modifier]px from the bottom, fire the event.
    let modifier = 50;
    if (currentScroll + modifier > documentHeight) {
      skillsNav.classList.remove("active");
      contactsNav.classList.add("active");
    }
  });
};

//Showing the projects learn more popup
const learnButton = document.getElementsByClassName("learn-more-button");
learnButton[0].addEventListener("click", () => {
  document.getElementById("popup-container").classList.add("show");
  document.body.classList.add("modal-open");
});

//Closing the popup

const closeButtons = document.getElementsByClassName("popup-close");
console.log(typeof closeButtons);

Array.prototype.forEach.call(closeButtons, function (closeButtons) {
  closeButtons.addEventListener("click", () => {
    document.getElementById("popup-container").classList.remove("show");
  });
});

console.log(typeof closeButtons);
