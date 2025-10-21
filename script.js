function showMessage(message) {
  alert(`You clicked on the ${message} button!`);
}

// Simple carousel for Dev page
(() => {
  const img = document.getElementById("projectImage");
  const prev = document.getElementById("prevBtn");
  const next = document.getElementById("nextBtn");
  if (!img || !prev || !next) return;

  const images = [
    "./src/project-1.jpg", // Wires / hardware detail
    "./src/poster-development.jpg", // Vintage computer
    "./src/poster-design.jpg", // Controllers pile
  ];
  let index = 0;

  function show(i) {
    index = (i + images.length) % images.length;
    img.src = images[index];
  }

  prev.addEventListener("click", () => show(index - 1));
  next.addEventListener("click", () => show(index + 1));
})();
