function showMessage(message) {
  alert(`You clicked on the ${message} button!`);
}

const projects = [
  {
    image: "./src/project1.jpg",
    alt: "Credit Card Checker project preview",
    title: "Credit Card Checker",
    description:
      "A JavaScript program that validates credit card numbers using the Luhn algorithm and identifies companies that issued invalid cards.",
    technologies: "JavaScript | Node.js",
    link: "https://github.com/ChristinaJSuzuki/Credit-Card-Checker",
  },
  {
    image: "./src/project2.png",
    alt: "Space Battle project preview",
    title: "Space Battle",
    description:
      "A two-player space battle game where players control opposing spaceships, fire bullets, and battle until one player's health reaches zero.",
    technologies: "Python | Pygame",
    link: "https://github.com/ChristinaJSuzuki/Space-Battle",
  },
  {
    image: "./src/project3.jpg",
    alt: "Fortune Cookie Generator project preview",
    title: "Fortune Cookie Generator",
    description:
      "An interactive JavaScript project that generates randomized fortune messages.",
    technologies: "HTML | CSS | JavaScript",
    link: "https://github.com/ChristinaJSuzuki/Digital-Fortune-Cookie-Generator",
  },
  {
    image: "./src/project4.jpg",
    alt: "Snake Game project preview",
    title: "Snake Game",
    description:
      "A classic Snake game featuring keyboard controls, scoring, collision detection, pausing, and persistent high scores.",
    technologies: "Python | Pygame",
    link: "https://github.com/ChristinaJSuzuki/MySnakeGame",
  },
];

let currentProjectIndex = 0;

const projectImage = document.getElementById("projectImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const projectTitle = document.getElementById("projectTitle");
const projectDescription = document.getElementById("projectDescription");
const projectTechnologies = document.getElementById("projectTechnologies");
const projectLink = document.getElementById("projectLink");

function updateProject() {
  const currentProject = projects[currentProjectIndex];

  projectImage.src = currentProject.image;
  projectImage.alt = currentProject.alt;
  projectTitle.textContent = currentProject.title;
  projectDescription.textContent = currentProject.description;
  projectTechnologies.textContent = currentProject.technologies;
  projectLink.href = currentProject.link;
}

prevBtn.addEventListener("click", () => {
  currentProjectIndex--;

  if (currentProjectIndex < 0) {
    currentProjectIndex = projects.length - 1;
  }

  updateProject();
});

nextBtn.addEventListener("click", () => {
  currentProjectIndex++;

  if (currentProjectIndex >= projects.length) {
    currentProjectIndex = 0;
  }

  updateProject();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    prevBtn.click();
  }

  if (event.key === "ArrowRight") {
    nextBtn.click();
  }
});

updateProject();
