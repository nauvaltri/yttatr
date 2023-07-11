let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};





let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({ 
    reset: true,
    distance: '90px',
    duration:2000,
    delay:400
});
ScrollReveal().reveal('.home-content,.heading', { origin:'top' });
ScrollReveal().reveal('.home-img,.hobby-box', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1', { origin:'left' });
ScrollReveal().reveal('.home-content p,.about-content,.about-content h4', { origin:'right' });

const typed = new Typed('.multiple-text', {
    strings: ['SAD BOY', 'GOOD BOY', 'SANTUY BOY'],
    typeSpeed: 100,
    backDelay: 1000,
    backSpeed: 100,
    loop: true
});

const readMoreBtn = document.getElementById('read-more-btn');
const aboutParagraph = document.querySelector('.about-content p');

readMoreBtn.addEventListener('click', function() {
  aboutParagraph.classList.toggle('expanded');
  if (aboutParagraph.classList.contains('expanded')) {
    readMoreBtn.textContent = 'Read Less';
  } else {
    readMoreBtn.textContent = 'Read More';
  }
});

