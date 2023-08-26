let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');

}

let sections = document.querySelectorAll("section"); 
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
      });
    };
  });
  let header = document.querySelector('header');

  header.classList.toggle('sticky', widow.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

ScrollReveal({ 
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});

const typed = new Typed('.multiple-text', {
  strings: ["Full Stack Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
  smartBackspace: true,
  shuffle: true, // Optional: shuffle the letters during erasing
  onComplete: function() {
    setTimeout(function() {
      typed.reset(); // Reset Typed.js instance
      typed.start(); // Start typing again
    }, 1000); // Delay before starting typing again (in milliseconds)
  }
});

function toggleMoreFrontEndInfo(event) {
  event.preventDefault();
  const infoParagraph = document.querySelector('.more-info-frontend');
  const btn = event.target;

  if (infoParagraph.style.display === 'none') {
    infoParagraph.style.display = 'block';
    btn.textContent = 'Read Less';
  } else {
    infoParagraph.style.display = 'none';
    btn.textContent = 'Read More';
  }
}

function toggleMoreBackendEndInfo(event) {
  event.preventDefault();
  const infoParagraph = document.querySelector('.more-info-backend');
  const btn = event.target;

  if (infoParagraph.style.display === 'none') {
    infoParagraph.style.display = 'block';
    btn.textContent = 'Read Less';
  } else {
    infoParagraph.style.display = 'none';
    btn.textContent = 'Read More';
  }
}

const fullNameInput = document.getElementById('full-name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const textarea = document.getElementById('textarea');
const form = document.getElementById('validationForm');

fullNameInput.addEventListener('input', function() {
  if (/[^a-zA-Z\s]/.test(this.value)) {
    this.style.border = '1px solid red';
  } else {
    this.style.border = 'none';
  }
});

emailInput.addEventListener('input', function() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(this.value)) {
    this.style.border = '1px solid red';
  } else {
    this.style.border = 'none';
  }
});

phoneInput.addEventListener('input', function() {
  const phoneRegex = /^(\d{10}|\d{3}-\d{3}-\d{4}|\(\d{3}\) \d{3}-\d{4}|\d{3} \d{3} \d{4})$/;
  if (!phoneRegex.test(this.value)) {
    this.style.border = '1px solid red';
  } else {
    this.style.border = 'none';
  }
});

form.addEventListener('submit', function(event) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^(\d{10}|\d{3}-\d{3}-\d{4}|\(\d{3}\) \d{3}-\d{4}|\d{3} \d{3} \d{4})$/;
  
  let hasInvalidFields = false; // Track if there are invalid fields

  if (/[^a-zA-Z\s]/.test(fullNameInput.value)) {
    hasInvalidFields = true;
    fullNameInput.style.border = '1px solid red';
  } else {
    fullNameInput.style.border = 'none';
  }

  if (!emailRegex.test(emailInput.value)) {
    hasInvalidFields = true;
    emailInput.style.border = '1px solid red';
  } else {
    emailInput.style.border = 'none';
  }

  if (!phoneRegex.test(phoneInput.value)) {
    hasInvalidFields = true;
    phoneInput.style.border = '1px solid red';
  } else {
    phoneInput.style.border = 'none';
  }

  if (textarea.value.trim() === '') {
    hasInvalidFields = true;
    textarea.style.border = '1px solid red';
  } else {
    textarea.style.border = 'none';
  }

  if (hasInvalidFields) {
    event.preventDefault();
  } else {
    // Show the success message box
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';

    // Close the message box when the "Close" button is clicked
    const closeButton = document.getElementById('close-message');
    closeButton.addEventListener('click', function() {
      successMessage.style.display = 'none';
    });

    // ... (send email using EmailJS) ...
  }
});