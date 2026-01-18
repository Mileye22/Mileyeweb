/* =====================
   Blog Page JavaScript
   Image modal functionality
   ===================== */

const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const modalClose = document.querySelector('.modal-close');
const clickableImages = document.querySelectorAll('.clickable-image');

// Open modal when image is clicked
clickableImages.forEach(img => {
    img.addEventListener('click', function() {
        modal.classList.add('active');
        modalImage.src = this.src;
        modalCaption.textContent = this.dataset.caption;
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
});

// Close modal when X is clicked
modalClose.addEventListener('click', function() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close modal when clicking outside the image
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
});
