import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

// console.log(createGalleryMarkup(galleryItems));

function createGalleryMarkup(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href = ${original}>

   <img class="gallery__image" src =${preview} alt=${description} data-source = ${original} />
      </a>
    </div> `;
    })
    .join('');
}

galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(evt) {
  console.dir(evt.target);
  evt.preventDefault();

  if (evt.target.tagName !== 'IMG') {
    return;
  }

  const imgUrl = evt.target.dataset.source;
  showGallery(imgUrl);
}

let instance = null;
function showGallery(payload) {
  instance = basicLightbox.create(`
    
     <img src="${payload}">

    `);
  instance.show();
}

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode == 27 && instance) {
    instance.close();
  }
});
