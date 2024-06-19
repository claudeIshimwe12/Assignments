"use strict";

const images = [
  {
    url: "https://images.unsplash.com/photo-1717705422478-0b42e89e06b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTR8fHxlbnwwfHx8fHw%3D",
    caption: "The first and the foremost image in this gallery",
  },
  {
    url: "https://images.unsplash.com/photo-1718556256225-82afc1b30580?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D",
    caption: "Mesmerizing Sci-fi looking cube",
  },
  {
    url: "https://images.unsplash.com/photo-1716652894840-ad2be1cefd1e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjF8fHxlbnwwfHx8fHw%3D",
    caption: "Local image",
  },
  {
    url: "https://images.unsplash.com/photo-1718124553687-f875b6bf6baf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5Mnx8fGVufDB8fHx8fA%3D%3D",
    caption: "Mesmerizing Sci-fi looking cube",
  },
  {
    url: "https://images.unsplash.com/photo-1718480419942-a21efc9b5409?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Good looking leaves in the forest",
  },
  {
    url: "https://images.unsplash.com/photo-1717852613749-2104b6bd6b39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTh8fHxlbnwwfHx8fHw%3D",
    caption: "A wonderful work of art",
  },
];

const activeImage = document.querySelector(".active-image");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const captionView = document.querySelector(".caption");
images.forEach((image) => {
  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", image.url);
  imgElement.classList.add("thumbnail");

  document.querySelector(".bottom").append(imgElement);
});

document.querySelector(".bottom").addEventListener("click", function (e) {
  if (!e.target.src) return;

  activeImage.setAttribute("src", `${e.target.src}`);
  images.forEach((image) => {
    if (e.target.src === image.url) captionView.textContent = image.caption;
  });
});

nextBtn.addEventListener("click", function (e) {
  const src = activeImage.src;
  if (prevBtn.classList.contains("hidden")) prevBtn.classList.remove("hidden");
  images.forEach((image, index) => {
    if (src === image.url) {
      if (index === images.length - 2) nextBtn.classList.add("hidden");
      captionView.textContent = image.caption;
      activeImage.setAttribute("src", `${images[index + 1].url}`);
    }
  });
});
prevBtn.addEventListener("click", function (e) {
  const src = activeImage.src;
  if (nextBtn.classList.contains("hidden")) nextBtn.classList.remove("hidden");
  images.forEach((image, index) => {
    if (src === image.url) {
      if (index === 1) {
        prevBtn.classList.add("hidden");
      }
      captionView.textContent = image.caption;
      activeImage.setAttribute("src", `${images[index - 1].url}`);
    }
  });
});
