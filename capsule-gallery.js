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
    tools: "Adobe Illustrator",
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
    mediaType: "video",
    media: "./src/royal-brown-card.mp4",
    link: "https://www.behance.net/gallery/172922813/Royal-Brown-Metal-Card-Prototype",
  },
  {
    title: "QUIRI.IO",
    category: "UX/UI Design | Branding | Front-End Development",
    tools: "Figma | Next.js | Tailwind CSS",
    description:
      "Collaborated with a team of designers on the UX/UI design and visual identity of Quiri.io, a platform built to encourage thoughtful, constructive dialogue. Contributed to the logo design and overall website experience, independently designed the hero section, and took responsibility for translating the web designs into responsive front-end code.",
    mediaType: "gallery",
    media: [
      "./src/quiri-hero.png",
      "./src/quiri-features.png",
      "./src/quiri-community.png",
    ],
    link: "https://www.quiri.io/",
  },
  {
    title: "MOON AND SUN SWITCH",
    category: "UI/UX Design | Interactive Prototype",
    tools: "Figma",
    description:
      "An interactive day-and-night toggle switch concept exploring visual transitions, color, and playful micro-interactions.",
    mediaType: "video",
    media: "./src/moon-and-sun.mp4",
    link: "https://www.behance.net/gallery/172843653/Moon-and-Sun-Switch",
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
    designLink.textContent = project.link.includes("behance.net")
      ? "VIEW ON BEHANCE ↗"
      : "VISIT WEBSITE ↗";

    designLink.target = "_blank";
    designLink.rel = "noopener noreferrer";
    designLink.hidden = false;
  } else {
    designLink.hidden = true;
    designLink.removeAttribute("href");
  }

  // Clear previous media
  designMediaContainer.replaceChildren();

  // Add project media
  if (project.mediaType === "gallery" && project.media?.length) {
    let currentImageIndex = 0;

    const gallery = document.createElement("div");
    gallery.className = "design-project-gallery";

    const image = document.createElement("img");
    image.className = "design-project-gallery-image";
    image.alt = `${project.title} - image 1`;
    image.src = project.media[0];

    const controls = document.createElement("div");
    controls.className = "design-project-gallery-controls";

    const previousButton = document.createElement("button");
    previousButton.type = "button";
    previousButton.textContent = "<";
    previousButton.setAttribute("aria-label", "Previous image");

    const counter = document.createElement("span");
    counter.className = "design-project-gallery-counter";

    const nextButton = document.createElement("button");
    nextButton.type = "button";
    nextButton.textContent = ">";
    nextButton.setAttribute("aria-label", "Next image");

    function updateGallery() {
      image.src = project.media[currentImageIndex];
      image.alt = `${project.title} - image ${currentImageIndex + 1}`;
      counter.textContent = `${currentImageIndex + 1} / ${project.media.length}`;
    }

    previousButton.addEventListener("click", () => {
      currentImageIndex =
        (currentImageIndex - 1 + project.media.length) % project.media.length;
      updateGallery();
    });

    nextButton.addEventListener("click", () => {
      currentImageIndex = (currentImageIndex + 1) % project.media.length;
      updateGallery();
    });

    controls.append(previousButton, counter, nextButton);
    gallery.append(image, controls);
    designMediaContainer.appendChild(gallery);

    updateGallery();
    designOverlay.hidden = false;
  } else if (project.mediaType === "figma" && project.media) {
    const iframe = document.createElement("iframe");

    iframe.className = "design-project-figma";
    iframe.src = project.media;
    iframe.title = `${project.title} interactive prototype`;
    iframe.allowFullscreen = true;
    iframe.setAttribute("allow", "fullscreen");

    designMediaContainer.appendChild(iframe);
    designOverlay.hidden = false;
  } else if (project.mediaType === "video" && project.media) {
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
