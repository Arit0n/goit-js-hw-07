import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const array = [];
galleryItems.forEach((elem) => {
  const itemBox = document.createElement("div");
  itemBox.classList.add("gallery__item");

  const linkItem = document.createElement("a");
  linkItem.classList.add("gallery__link");
  linkItem.href = elem.original;

  const imgItem = document.createElement("img");
  imgItem.classList.add("gallery__image");
  imgItem.src = elem.preview;
  imgItem.setAttribute("data-source", elem.original);
  imgItem.alt = elem.description;

  linkItem.append(imgItem);
  itemBox.append(linkItem);
  array.push(itemBox);
});
gallery.append(...array);

document.addEventListener("click", modalOpen);

function modalOpen(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  evt.preventDefault();
  const getAtr = evt.target.getAttribute("data-source");
  const module = basicLightbox.create(
    `<img src="${getAtr}" width="800" height="600">
      `,
    {
      onShow: () => {
        document.addEventListener("keydown", closeModal);
      },
      onClose: () => {
        document.removeEventListener("keydown", closeModal);
      },
    }
  );
  module.show();

  function closeModal(e) {
    if (e.key === "Escape") {
      module.close();
    }
  }
}

// const gallery = document.querySelector(".gallery");
// const cardsCreate = createGalleryGrow(galleryItems);

// gallery.insertAdjacentHTML("beforeend", cardsCreate);
// function createGalleryGrow(photo) {
//   return photo
//     .map(({ preview, original, description }) => {
//       return `<div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>`;
//     })
//     .join("");
// }

// document.addEventListener("click", eventClickModal);

// function eventClickModal(evt) {
//   evt.preventDefault();

//   if (evt.target.nodeName !== "IMG") {
//     return;
//   }
//   const atrTarget = evt.target.getAttribute("data-source");

//   const module = basicLightbox.create(
//     `<img src="${atrTarget} width="800" height="600">
//     `,
//     {
//       onShow: () => {
//         document.addEventListener("keydown", closeModal);
//       },
//       onClose: () => {
//         document.removeEventListener("keydown", closeModal);
//       },
//     }
//   );
//   module.show();
//   function closeModal(e) {
//     if (e.key === "Escape") {
//       module.close();
//     }
//   }
// }
console.log(galleryItems);
