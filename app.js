//NavBar Toggle//

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

//Gallery Slide//
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.gallery__slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.gallery__slide').prepend(items[items.length - 1])
})


const artPieces = [
    {
        title: "Calla Lily Dreams",
        description: "Calla lily in watercolors.",
        image: "./images/Calla lily dreams.jpg",
        available: true
    },
    {
        title: "Celestial Slumber",
        description: "Cat sleeping next to a crescent moon in watercolors.",
        image: "./images/Celestial Slumber.jpg",
        available: true
    },
    {
        title: "Colorful Cat",
        description: "Cat outline with watercolor in colorful splashes.",
        image: "./images/Colorful Cat.jpg",
        available: false
    },
    {
        title: "Dripping Face",
        description: "Outline of a woman's face with splashes and splatters of colorful watercolors.",
        image: "./images/Dripping face.jpg",
        available: true
    },
    {
        title: "Peachy Keen Face",
        description: "Feminine face with colorful watercolors.",
        image: "./images/Peachy keen face.jpg",
        available: true
    },
    {
        title: "Pink Drips Bunny",
        description: "Pink splashes of watercolor with a black and white bunny.",
        image: "./images/Pink drips bunny.jpg",
        available: false
    },
    {
        title: "Poppy Splatter",
        description: "Loose red and black watercolor poppy.",
        image: "./images/Poppy Splatter.jpg",
        available: true
    },
    {
        title: "What's in a Rose",
        description: "Pink rose in splashes and drips of watercolor.",
        image: "./images/What's in a Rose.jpg",
        available: true
    }
];

// Function to show the modal with specific art piece information
function showModal(index) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const piece = artPieces[index];
    modalBody.innerHTML = `<h3>${piece.title}</h3><p>${piece.description}</p><p>Available: ${piece.available ? "Yes" : "No"}</p>`;
    modal.style.display = 'block';
}

// Function to hide the modal
function hideModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Function to scroll the gallery to the left
function scrollLeft() {
    const galleryScroller = document.querySelector('.slide');
    galleryScroller.scrollBy({ left: -300, behavior: 'smooth' });
}

// Function to scroll the gallery to the right
function scrollRight() {
    const galleryScroller = document.querySelector('.slide');
    galleryScroller.scrollBy({ left: 300, behavior: 'smooth' });
}

// Calculate and display the number of available art pieces
function displayAvailableCount() {
    const availableCount = artPieces.filter(piece => piece.available).length;
    const availabilityDiv = document.querySelector('.availability');
    availabilityDiv.innerText = `Total Available Art Pieces: ${availableCount}`;
}

document.querySelector('.next').addEventListener('click', scrollRight);
document.querySelector('.prev').addEventListener('click', scrollLeft);

document.querySelector('.close-button').addEventListener('click', hideModal);

window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});


// Display the available art pieces count on page load
window.onload = displayAvailableCount;

