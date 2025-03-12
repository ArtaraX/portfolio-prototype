// Parallax effect for desktop (added via JS for smoother control)
window.addEventListener('scroll', function() {
    const parallax = document.getElementById('parallax');
    let scrollPosition = window.pageYOffset;
    
    // Adjust the background position as the user scrolls
    parallax.style.backgroundPosition = 'center ' + (scrollPosition * 0.5) + 'px';
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});