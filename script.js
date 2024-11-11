// script.js

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function () {
      // Remove active class from all items
      document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
      // Add active class to clicked item
      item.classList.add('active');
    });
  });

  const contactForm = document.getElementById('contact--form'),
  contactMessage = document.getElementById('contact-nessage');

const sendEmail = (e) => {
e.preventDefault();

//serviceID - templateID - #form - publicKey
emailjs.sendForm('service_y87inu4', 'template_xtsphwf', '#contact--form', 'rTop80i5ZnsymhYH-')
.then(() => {
    // Show success message
    contactMessage.textContent = 'Message sent successfully!';

    // Remove after a few seconds
    setTimeout(() => {
        contactMessage.textContent = '';  // Clear the message
    }, 5000);  // Timeout after 5 seconds

    // Clear input fields
    contactForm.reset();
}, () => {
    // Error message in case of failure
    contactMessage.textContent = 'Message not sent!';
});
};

// Add event listener to the form
contactForm.addEventListener('submit', sendEmail);

let currentImageIndex = 0;
let projectImages = [];

function openLightbox(button) {
    // Get all images in the current project
    projectImages = Array.from(button.parentElement.querySelectorAll('.project-image-slider img'));
    currentImageIndex = 0; // Start from the first image
    
    // Display the lightbox and update the first image
    document.getElementById('lightbox').style.display = 'flex';
    updateLightboxImage();
}

function updateLightboxImage() {
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = projectImages[currentImageIndex].src;
}

function changeImage(direction) {
    // Update the current image index based on the direction (-1 for prev, +1 for next)
    currentImageIndex = (currentImageIndex + direction + projectImages.length) % projectImages.length;
    updateLightboxImage();
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}


document.getElementById('dark-mode-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});
