import gallery_items from '../gallery-items.js';

const listEl = document.querySelector('.js-gallery');
const modalEl = document.querySelector('.js-lightbox');
const modalImgEl = modalEl.querySelector('img');
//const btnModalCloseEl = modalEl.querySelector('button[data-action="close-lightbox"]');
//console.log(btnModalCloseEl);

const galleryEls = gallery_items.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
        <a
          class="gallery__link"
          href="${original}"
        >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
    </li>
`;
}).join('');

listEl.insertAdjacentHTML('afterbegin', galleryEls);

listEl.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') return;

    modalEl.classList.add('is-open');
    modalImgEl.src = e.target.dataset.source;
    modalImgEl.alt = e.target.alt;

    //btnModalCloseEl.addEventListener('click', onModalImgClick);
    modalEl.addEventListener('click', onModalImgClick);
    //listEl.removeEventListener('click', onGalleryItemClick);
}

function onModalImgClick(e) {
    
    if (
        e.target.className !== 'lightbox__button'
        &&
        e.target.className !== 'lightbox__overlay'
    ) return;


    modalEl.classList.remove('is-open');
    modalImgEl.src = '';
    modalImgEl.alt = '';

    modalEl.removeEventListener('click', onModalImgClick);
    //btnModalCloseEl.removeEventListener('click', onModalImgClick);
}