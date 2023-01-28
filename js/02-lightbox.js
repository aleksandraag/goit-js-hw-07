import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

for (let item of galleryItems) {
  let newLink = document.createElement("a");
  newLink.href = item.original;
  newLink.classList.add("gallery__link");

  let newImage = document.createElement("img");
  newImage.classList.add("gallery__image");
  newImage.src = item.preview;
  newImage.alt = item.description;

  newLink.append(newImage);
  gallery.append(newLink);
}

gallery.addEventListener("click", (e) => {
  e.preventDefault();
});

let lightboxElement = new SimpleLightbox(".gallery__link", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
