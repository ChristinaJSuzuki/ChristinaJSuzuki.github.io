const designProjects = [
  {
    title: "CHOCOLATI",
    category: "Graphic Design | Marketing",
    tools: "Adobe Illustrator",
    description:
      "A collection of social media advertisements and promotional coupons created for Chocolati, a Seattle-based gourmet chocolate shop.",
    mediaType: "video",
    media: "./src/chocolati-designs.mp4",
    link: "",
  },
  {
    title: "CHOCOLATI - HOT CHOCOLATE LABELS",
    category: "Packaging Design | Graphic Design",
    tools: "Adobe Ilustrator",
    description:
      "Custom product labels designed for Chocolati Café, a Seattle-based chocolatier. Created distinctive packaging for a variety of instant hot chocolates, combining elegant typography, illustrations, and product information to reflect the brand's identity.",
    mediaType: "image",
    media: "./src/chocolati-label-portfolio.png",
    link: "",
  },
  {
    title: "SAAS DASHBOARD",
    category: "UI/UX Design | Dashboard Design",
    tools: "Figma",
    description:
      "A high-contrast SaaS dashboard concept featuring simplified navigation, performance metrics, and data visualizations. Designed to present key information through a clean, accessible interface with a bold visual identity.",
    mediaType: "image",
    media: "./src/saas-dashboard.jpg",
    link: "",
  },
  {
    title: "ROYAL BROWN METAL CARD",
    category: "UI/UX Design | Interactive Prototype",
    tools: "Figma",
    description:
      "An interactive metal card prototype exploring visual presentation, transitions, and user interaction.",
    mediaType: "Figma",
    media: "",
    link: "https://www.behance.net/gallery/172922813/Royal-Brown-Metal-Card-Prototype",
  },
  {
    title: "PROJECT 5",
    category: "Coming Soon",
    tools: "Coming Soon",
    description: "Fifth design project coming soon!",
    mediaType: "image",
    media: "",
    link: "",
  },
  {
    title: "PROJECT 6",
    category: "Coming Soon",
    tools: "Coming Soon",
    description: "Sixth design project coming soon!",
    mediaType: "image",
    media: "",
    link: "",
  },
  {
    title: "PROJECT 7",
    category: "Coming Soon",
    tools: "Coming Soon",
    description: "Seventh design project coming soon!",
    mediaType: "image",
    media: "",
    link: "",
  },
  {
    title: "PROJECT 8",
    category: "Coming Soon",
    tools: "Coming Soon",
    description: "Eighth design project coming soon!",
    mediaType: "image",
    media: "",
    link: "",
  },
];

// DESIGN PAGE — Capsule Machine Interaction

const designButtons = document.querySelectorAll(".design-machine-hitbox");

const designOverlay = document.getElementById("designProjectOverlay");
const designClose = document.getElementById("designProjectClose");

const designTitle = document.getElementById("designProjectTitle");
const designCategory = document.getElementById("designProjectCategory");
const designTools = document.getElementById("designProjectTools");
const designDescription = document.getElementById("designProjectDescription");
const designLink = document.getElementById("designProjectLink");

const designMediaContainer = document.querySelector(".design-project-image");

let previousFocus = null;

// Display the selected project
function openDesignProject(index) {
  const project = designProjects[index];

  if (!project) return;

  previousFocus = document.activeElement;

  // Update project information
  designTitle.textContent = project.title;
  designCategory.textContent = project.category;
  designTools.textContent = project.tools;
  designDescription.textContent = project.description;

  // Update project link
  if (project.link) {
    designLink.href = project.link;
    designLink.hidden = false;
  } else {
    designLink.hidden = true;
    designLink.removeAttribute("href");
  }

  // Clear previous media
  designMediaContainer.replaceChildren();

  // Add project media
  if (project.mediaType === "video" && project.media) {
    const video = document.createElement("video");

    video.className = "design-project-video";
    video.src = project.media;
    video.controls = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "metadata";

    designMediaContainer.appendChild(video);

    designOverlay.hidden = false;

    video.play().catch((error) => {
      console.log("Video autoplay was prevented:", error);
    });
  } else if (project.mediaType === "image" && project.media) {
    const image = document.createElement("img");

    image.src = project.media;
    image.alt = project.title;
    image.className = "design-project-static-image";

    designMediaContainer.appendChild(image);

    designOverlay.hidden = false;
  } else {
    const placeholder = document.createElement("div");

    placeholder.className = "design-project-image-placeholder";
    placeholder.textContent = "PROJECT COMING SOON";

    designMediaContainer.appendChild(placeholder);

    designOverlay.hidden = false;
  }

  designClose.focus();
}

// Connect all eight capsule windows
designButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    openDesignProject(index);
  });
});

// Close the modal
function closeDesignProject() {
  const video = designMediaContainer.querySelector("video");

  if (video) {
    video.pause();
    video.currentTime = 0;
  }

  designOverlay.hidden = true;
  previousFocus?.focus();
}

// Close button
designClose.addEventListener("click", closeDesignProject);

// Close when clicking outside the panel
designOverlay.addEventListener("click", (event) => {
  if (event.target === designOverlay) {
    closeDesignProject();
  }
});

// Close with Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !designOverlay.hidden) {
    closeDesignProject();
  }
});

// Keep keyboard focus inside the open modal
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
