// Modal

const gallery = document.querySelector('.gallery');

//Create and append modal once -- dialogs are hidden by default
const modal = document.createElement('dialog');
modal.innerHTML = `<img><button class="close-viewer">X</button>`;
document.body.appendChild(modal);
//OR if already add to HTML:
//const modal = document.querySelector('dialog');

const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', showModal);

function showModal(e) {
    
    const img = e.target;

    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    const full = src.split('-')[0] + '-full.jpg';

    modalImage.src = full;
    modalImage.alt = alt;
    modal.showModal();
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});


