import { galleryItems } from "./gallery-items.js";
// Change code below this line
{
  /* <a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>; */
}

const gallery = document.querySelector(".gallery");
let array = [];

galleryItems.forEach((e) => {
  const itemLink = document.createElement("a");
  itemLink.classList.add("gallery__item");
  itemLink.href = e.original;

  const itemImg = document.createElement("img");
  itemImg.classList.add("gallery__image");
  itemImg.setAttribute("title", e.description);
  itemImg.src = e.preview;
  itemImg.alt = e.description;

  itemLink.append(itemImg);
  array.push(itemLink);
});

gallery.append(...array);
new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});

console.log(galleryItems);
