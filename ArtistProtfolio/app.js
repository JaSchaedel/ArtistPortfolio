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
/*function displayAvailableCount() {
    const availableCount = artPieces.filter(piece => piece.available).length;
    const availabilityDiv = document.querySelector('.availability');
    availabilityDiv.innerText = `Total Available Art Pieces: ${availableCount}`;
}*/

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
/*window.onload = displayAvailableCount;*/

//Blog Posts Section//

// Array of blog posts
const blogPosts = [
  {
      title: "Exploring Watercolor Techniques",
      content: `In this post, we delve into various watercolor techniques, from wet-on-wet to dry brush, and how each method can be used to create stunning effects. Watercolor is a versatile medium that allows for a range of artistic expressions. Whether you're a beginner or an experienced artist, experimenting with different techniques can help you discover new ways to bring your visions to life.
      
      Wet-on-wet involves applying wet paint onto a wet surface, creating soft edges and blending colors effortlessly. This technique is perfect for painting skies, water, and abstract backgrounds. On the other hand, dry brush technique uses a brush with very little water to create texture and fine details, ideal for adding highlights and intricate patterns.
      
      Another exciting method is glazing, where you apply a thin, transparent layer of color over a dry area, allowing the underlying colors to show through. This can add depth and richness to your paintings. Experimenting with these and other techniques can help you develop your unique style and enhance your watercolor artwork.`,
      date: "2024-07-10",
      popularity: 10
  },
  {
      title: "The Beauty of Minimalistic Art",
      content: `Minimalistic art is all about simplicity and elegance. By stripping down to the essentials, minimalistic art allows viewers to focus on the composition, color, and form without the distractions of unnecessary details. This art style embraces the idea that less is more, creating powerful visual statements with minimal elements.
      
      One of the key principles of minimalism is the use of negative space, or the empty areas around and between the subjects of an image. This space is as important as the subjects themselves, helping to balance the composition and draw attention to the focal points. Minimalistic art often uses a limited color palette, relying on contrasts and harmonies to create impact.
      
      Minimalistic art can be incredibly versatile, ranging from abstract pieces to realistic depictions with a minimalistic approach. It's a style that encourages contemplation and invites viewers to find meaning in simplicity. By focusing on the essential elements, minimalistic art captures the essence of a subject in a clean, unadorned way.`,
      date: "2024-06-30",
      popularity: 15
  },
  {
      title: "Fantasy Art: Bridging Imagination and Reality",
      content: `Fantasy art lets us explore realms beyond our imagination, bringing mythical creatures, magical landscapes, and epic adventures to life. This genre of art blurs the line between reality and fiction, creating worlds where anything is possible. Whether it's through detailed illustrations, digital paintings, or mixed media, fantasy art allows artists to express their wildest dreams.
      
      One of the hallmarks of fantasy art is the creation of unique characters and settings. Artists often draw inspiration from mythology, folklore, and literature to craft beings and places that captivate the viewer's imagination. From dragons and fairies to enchanted forests and ancient ruins, fantasy art is a celebration of creativity and storytelling.
      
      Techniques in fantasy art can vary widely, from realistic renderings to highly stylized interpretations. Digital tools have expanded the possibilities for fantasy artists, allowing for intricate details and complex compositions that would be challenging to achieve with traditional media. Fantasy art continues to inspire and transport audiences to extraordinary worlds, making it a beloved genre for both artists and fans alike.`,
      date: "2024-07-12",
      popularity: 20
  },
  {
      title: "Tips for Sketching Wildlife",
      content: `Sketching wildlife requires patience and observation. Capturing the essence of animals in their natural habitat can be challenging but rewarding. Here are some tips to help you get started with wildlife sketching:
      
      1. **Study Your Subject**: Before you start sketching, take the time to observe the animal. Note its movements, posture, and unique features. This will help you create more accurate and dynamic sketches.
      
      2. **Use Reference Photos**: If observing live animals is not possible, use reference photos. Look for images that show the animal from different angles and in various poses.
      
      3. **Start with Basic Shapes**: Begin your sketch with basic shapes to establish the overall form and proportions. This makes it easier to refine the details later on.
      
      4. **Capture the Gesture**: Focus on capturing the animal's gesture and movement. Quick, loose sketches can help convey the energy and fluidity of the subject.
      
      5. **Pay Attention to Details**: Once the basic structure is in place, start adding details. Pay attention to the texture of fur, feathers, or scales, and use varied line weights to create depth and interest.
      
      6. **Practice Regularly**: Like any skill, regular practice is key to improvement. Sketch different animals and experiment with various techniques to find what works best for you.
      
      Wildlife sketching can be a fulfilling way to connect with nature and improve your artistic skills. With practice and patience, you'll be able to create compelling sketches that capture the beauty and essence of wildlife.`,
      date: "2024-06-25",
      popularity: 5
  }
];

// Function to find the latest blog post
function getLatestPost(posts) {
  let latestPost = posts[0];
  for (let post of posts) {
      if (new Date(post.date) > new Date(latestPost.date)) {
          latestPost = post;
      }
  }
  return latestPost;
}

// Function to get popular blog posts
function getPopularPosts(posts) {
  // Sort posts by popularity in descending order
  return posts.sort((a, b) => b.popularity - a.popularity).slice(0, 3);
}

// Function to display a blog post
function displayPost(post) {
  document.getElementById('post-content').innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content.replace(/\n/g, '<br>')}</p>
      <p><small>Published on: ${post.date}</small></p>
  `;
}

// Display the latest blog post on page load
const latestPost = getLatestPost(blogPosts);
displayPost(latestPost);

// Display popular blog posts
const popularPosts = getPopularPosts(blogPosts);
const popularPostsList = document.getElementById('popular-posts-list');
popularPosts.forEach((post, index) => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `<a href="#" data-index="${index}">${post.title}</a>`;
  popularPostsList.appendChild(listItem);
});

// Add event listeners to popular post links
document.querySelectorAll('#popular-posts-list a').forEach(link => {
  link.addEventListener('click', function(event) {
      event.preventDefault();
      const postIndex = this.getAttribute('data-index');
      displayPost(popularPosts[postIndex]);
  });
});

//Contact Form Section//

const select = document.getElementById('select-pieces-of-interest');
const piecesContainer = document.getElementById('pieces-container');
let idCounter = 0;
const selectedPieces = [];

// populate interest element
(() => {
    artPieces.forEach((piece) => {
        if (piece.available) {
            const option = document.createElement('option');
            option.value = piece.title;
            option.innerText = piece.title;
            select.appendChild(option);
        } 
       
    });
})();

select.addEventListener('change', e => {
    e.stopPropagation();
    if (selectedPieces.includes(select.value)) {
        return;
    }
    
    selectedPieces.push(select.value);

    loadSelectedChips();

    console.log(selectedPieces); // Not necessary; just to demonstrate; remove later
});

const loadSelectedChips = () => {
    piecesContainer.innerHTML = ''; // remove all currently shown selected pieces chips
    select.selectedIndex = 0; // reset select input to default option
    
    selectedPieces.forEach( value => {
        const selectedChip = document.createElement('div');
        selectedChip.className = 'selected-chip';
        selectedChip.innerText = value;
        selectedChip.id = `selected-piece-${idCounter}`;
    
        const remove = document.createElement('a');
        remove.innerText = 'X';
        remove.href = '#';
        remove.onclick = () => removeChip(value);
    
        selectedChip.appendChild(remove);
    
        piecesContainer.appendChild(selectedChip)
    })
}

const removeChip = (selectedChipValue) => {
    //Get the index in the array for the VALUE of the item.
    const index = selectedPieces.indexOf(selectedChipValue);

    // If the value is not found in the array ( if the index is -1), the splice operation is unnecessary and could throw an error.
    if (index !== -1) { 
        // use array.splice to delete an item;
            // ex: splice(start, deleteCount, replaceWith)
        // In thise case we start at the passed in index, delete 1 item, replace it with nothing
        selectedPieces.splice(index, 1);
    }

    console.log(selectedPieces); // Not necessary; just to demonstrate; remove later

    loadSelectedChips();
}

const createContactObject = () => {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

     return {
         name: nameInput.value,
         email: emailInput.value,
         piecesOfInterest: selectedPieces,
         message: messageInput.value,
     };

};

//Contact Form Submisson//
const endpoint = "http://localhost:8000/contact-requests";
const submitBtn = document.getElementById("send-button");

const modal = document.getElementById("myModal");
const closeButton = document.querySelector(".close");
const form = document.getElementById("contactForm");

//todo 2
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = createContactObject();
    createContactRequest(endpoint, data);
});

const getAllContactRequests = async () => {
    try {
        const response = await fetch('your-endpoint-url');
        const allContactRequests = await response.json();
        console.log(allContactRequests);
    } catch (error) {
        console.log(error)
    }
};

// TODO 1
const createContactRequest = async (url, data = {}) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log("Success:", result);
        modal.innerHTML = `
            <div id="myModalContent">
                <span class="close">&times;</span>
                <p>Thank you for your interest in my artwork. Please allow up to 3 business days for a response to your inquiries.</p>
            </div>
        `;

        // Show the modal (you'll need CSS to style it)
        modal.style.display = "block";

        // Add event listener for the new close button
        document.querySelector(".close").addEventListener("click", closeModal);

    } catch (error) {
        console.log(error);
    }
};

const closeModal = () => {
    modal.style.display = "none";
    form.reset();
};

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}