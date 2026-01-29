console.log("Script loaded successfully.");

const searchInput = document.querySelector(".search-input");
const boxes = document.querySelectorAll(".box");

searchInput.addEventListener("keyup", () => {
  const value = searchInput.value.toLowerCase();

  boxes.forEach(box => {
    const title = box.querySelector("h2").innerText.toLowerCase();
    box.style.display = title.includes(value) ? "block" : "none";
  });
});

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        alert(`You clicked on ${box.querySelector('h2').innerText}`);
    });
});

document.querySelector('.foot-panel1').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });        
});

// const heroSection = document.querySelector('.hero-section');
// const heroImages = [
//     'images/box1_image.jpg',
//     'images/box2_image.jpg',
//     'images/box3_image.jpg',
//     'images/box4_image.jpg'
// ];

// let currentImageIndex = 0;

// setInterval(() => {
//     currentImageIndex = (currentImageIndex + 1) % heroImages.length;
//     heroSection.style.backgroundImage = `url(${heroImages[currentImageIndex]})`;
// } , 3000);

// Cart functionality
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        cartCount++;
        cartCountElement.innerText = cartCount;
    }); 
});

// Smooth scroll for footer panel 2
document.querySelector('.foot-panel2').addEventListener('click', () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });        
});


// Dark mode toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

