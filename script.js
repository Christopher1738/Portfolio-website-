// Set active navigation link
function setActiveLink() {
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Initialize
window.addEventListener('scroll', setActiveLink);
setActiveLink();

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle (optional)
const mobileMenuToggle = document.createElement('button');
mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
mobileMenuToggle.classList.add('mobile-menu-toggle');
document.querySelector('header .container').appendChild(mobileMenuToggle);

mobileMenuToggle.addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('active');
});