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
    "./src/devcords.png",
    "./src/card-technologies.jpg",
    "./src/card-design.jpg",
  ];
  const altText = [
    "Development project preview",
    "Vintage computer technology project",
    "Game controller design project",
  ];
  let index = 0;

  function show(i) {
    index = (i + images.length) % images.length;
    img.src = images[index];
    img.alt = altText[index];
  }

  prev.addEventListener("click", () => show(index - 1));
  next.addEventListener("click", () => show(index + 1));
})();
