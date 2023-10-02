//pop-up

const projectCards = document.querySelectorAll('.project__card');
const modal1 = document.getElementById('myModal1');
const modalImage = document.querySelector('.modal-image');
const modalTitle = document.querySelector('.modal-title');
const modalDescription = document.querySelector('.modal-description');
const modalButton = document.querySelector('.modal-button');
const closeButton = document.querySelector('.close');

projectCards.forEach((card) => {
    card.addEventListener('click', () => {
        // Get the image, title, description, and bullet points from the clicked project card
        const imageSrc = card.dataset.image;
        const title = card.querySelector('.project__title123').textContent;
        const description = card.dataset.description;
        const sentences = description.split('. ');
        const sourceCodeURL = card.dataset.sourceCode;
        
        // Set the content of the modal pop-up
        modalImage.src = imageSrc;
        modalTitle.textContent = title;
        modalDescription.innerHTML = ' ';

        sentences.forEach((sentence) => {
            const p = document.createElement('p');
            p.textContent = sentence;
            modalDescription.appendChild(p);
        });


        modalButton.href = sourceCodeURL;
        
        // Display the modal
        modal1.style.display = 'block';
    });
});

// Close the modal when the close button is clicked
closeButton.addEventListener('click', () => {
    modal1.style.display = 'none';
});

// Close the modal when the user clicks anywhere outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal1) {
        modal1.style.display = 'none';
    }
});

