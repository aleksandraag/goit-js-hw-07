import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

for (let item of galleryItems) {
  let newItem = document.createElement("div");
  newItem.classList.add("gallery__item");
  let newLink = document.createElement("a");
  newLink.href = item.original;
  newLink.classList.add("gallery__link");

  let newImage = document.createElement("img");
  newImage.classList.add("gallery__image");
  newImage.src = item.preview;
  newImage.alt = item.description;
  newImage.setAttribute("data-source", item.original);

  newItem.append(newLink);
  newLink.append(newImage);
  gallery.append(newItem);
}

let instance;

gallery.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const content = document.createElement("div");
  const newImage = document.createElement("img");
  newImage.src = e.target.getAttribute("data-source");
  content.appendChild(newImage);

  instance = basicLightbox.create(content);
  instance.show();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    instance.close();
  }
});
