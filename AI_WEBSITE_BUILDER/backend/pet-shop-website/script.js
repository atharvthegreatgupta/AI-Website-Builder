// This is a placeholder for your JavaScript code.
// You can add interactivity, form handling, or dynamic content here.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Pet Shop website loaded successfully!');

    // Example: Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
