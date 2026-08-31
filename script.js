function showMessage(message) {
  alert(`You clicked on the ${message} button!`);
}

const projects = [
  {
    image: "./src/devcords.png",
    alt: "Development project preview",
  },
  {
    image: "./src/project2.png",
    alt: "Second development project preview",
  },
  {
    image: "./src/project3.png",
    alt: "Third development project preview",
  },
];

let currentProjectIndex = 0;

const projectImage = document.getElementById("projectImage");
const prevBtn = doument.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateProject() {
  const currentProject = projects[currentProjectIndex];

  projectImage.src = currentProject.image;
  projectImage.alt = currentProject.alt;
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
