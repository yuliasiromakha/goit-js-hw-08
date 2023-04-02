import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css'
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryRefs = document.querySelector('.gallery');
galleryRefs.style.display = 'flex';
galleryRefs.style.gap = '10px';
galleryRefs.style.flexWrap = 'wrap';
galleryRefs.style.listStyle = 'none';

const imagesRef = galleryItems.map(({ preview, original, description }) => {
    return `
       <li class=“gallery__item”>
       <a class=“gallery__link” href=${original}>
    <img
      class=“gallery__image”
      src=${preview}
      data-source=${original}
      alt=${description}
      width='350';
      height='230'
    />
  </a>
</li>`;
  })
  .join(' ');

galleryRefs.innerHTML = imagesRef;

galleryRefs.addEventListener('click', onGalleryClick)

function onGalleryClick(event) {
    event.preventDefault();

    const currentItem = event.target;
    if (currentItem.nodeName !== 'IMG') {
        return;
    }

    const currentImg = event.target.dataset.source;

    const lightbox = new SimpleLightbox('.gallery a', { 
     captionsData: 'alt',
     captionsPosition: 'bottom',
     captionsDelay: 250,
    
    });

}

console.log(galleryItems);