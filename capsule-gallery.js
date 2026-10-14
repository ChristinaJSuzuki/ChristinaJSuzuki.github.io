// DESIGN PAGE — Capsule Machine Interaction

const designButtons = document.querySelectorAll(".design-machine-hitbox");

const designOverlay = document.getElementById("designProjectOverlay");
const designClose = document.getElementById("designProjectClose");
const designTitle = document.getElementById("designProjectTitle");
const designDescription = document.getElementById("designProjectDescription");

let previousFocus = null;

//Test the first capsule
designButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (index !== 0) {
      console.log(`Design project ${index + 1} selected`);
      return;
    }

    previousFocus = document.activeElement;

    designTitle.textContent = "BLUE CAPSULE - PROJECT 1";

    designDescription.textContent =
      "First design project will be revealed here!";

    designOverlay.hidden = false;
    designClose.focus();
  });
});

//Close the panel
function closeDesignProject() {
  designOverlay.hidden = true;
  previousFocus?.focus();
}

designClose.addEventListener("click", closeDesignProject);

//Close when clicking outside the panel
designOverlay.addEventListener("click", (event) => {
  if (event.target === designOverlay) {
    closeDesignProject();
  }
});

//Close with Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !designOverlay.hidden) {
    closeDesignProject();
  }
});

//Keep keyboard focus inside the open panel
document.addEventListener("keydown", (event) => {
  if (event.key !== "Tab" || designOverlay.hidden) return;

  const focusable = [
    ...designOverlay.querySelectorAll(
      "button:not([disabled]), a[href]:not([hidden])",
    ),
  ];

  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});
