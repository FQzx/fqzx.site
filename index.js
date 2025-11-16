document.getElementById('viewbutton').innerHTML = '<h3>View All Projects</h3>';

// Smooth Scroll Animation On Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Bisa di-unobserve untuk performa lebih baik
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe semua elemen dengan class animasi
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .scale-in, .container, .boxskills, .landingelement h1, .aboutelement h3, .aboutflex, .flexbox');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});
