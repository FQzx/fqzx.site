document.getElementById('viewbutton').innerHTML = '<h3>View All Projects</h3>';

//lenis 
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

//SLink Fix
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

//aos
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .scale-in, .container, .boxskills, .landingelement h1, .aboutelement h3, #contacts, .aboutflex, .flexbox');
  animatedElements.forEach(el => {
    observer.observe(el);
  });
});


//Nav Bar
const navbar = document.querySelector('.navmenu');
const menulink = document.querySelector('.menu');
const menulist = document.querySelectorAll('.menu a');

navbar.addEventListener('click', () => {
  menulink.classList.toggle('active');
});

menulink.forEach(link => {
  link.addEventListener('click', () => {
    menulist.classList.remove('active');
  });
});


//Load Page (NF)

window.addEventListener('load', function () {
  const loader = document.getElementById('loader');

  loader.style.opacity = '0';

  loader.addEventListener('transitionend', function () {
    loader.remove();
  });
});