import gallery_items from '../gallery-items.js';

const listEl = document.querySelector('.js-gallery');
const modalEl = document.querySelector('.js-lightbox');
const modalImgEl = modalEl.querySelector('img');

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
}

