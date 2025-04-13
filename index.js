// Get elements
const mainImg = document.querySelector('.main-product-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.getElementById('closeLightbox');
const thumbnails = document.querySelectorAll('.lightbox-thumbnails .thumb');

// Open Lightbox
mainImg.addEventListener('click', () => {
  lightbox.style.display = 'flex';
  lightboxImg.src = mainImg.src;
});

// Close Lightbox
closeLightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Switch Lightbox Image
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const newImgSrc = thumbnail.getAttribute('data-img');
    lightboxImg.src = newImgSrc;
  });
});


let itemCount = 0;
const unitPrice = 125;