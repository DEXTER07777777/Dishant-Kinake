document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Interaction button functionality
    const interactionButton = document.getElementById('interactionButton');
    const interactionMessage = document.getElementById('interactionMessage');

    interactionButton.addEventListener('click', () => {
        if (interactionMessage.style.display === 'none') {
            interactionMessage.style.display = 'block';
        } else {
            interactionMessage.style.display = 'none';
        }
    });

    // Form validation
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            e.preventDefault();
            alert('Please fill in all fields');
        } else {
            alert('Thank you for your message!');
        }
    });
});
