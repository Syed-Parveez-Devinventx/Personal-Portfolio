/*================================= toggle icon navber =====================================*/

let menuIcon = document.querySelector('#menu-icon');
let nevbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark')
    nevbar.classList.toggle('active')
}

/*================================= scroll seection active link =====================================*/

let seection = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    seection.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(iinks => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*================================= sticky navbar =====================================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY >= 100);

    /*================================= romove toggle icon and navbar =====================================*/
    menuIcon = classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*================================= scroll revale =====================================*/

ScrollReveal({
    distance: '80px',
    duration: 2000,
    reset: 200,
});

ScrollReveal().reveal('.home-content, heading',{origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container,portfokio-box, contact form',{origin: 'button'});

ScrollReveal().reveal('.home-contact h1, .about-img',{origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin: 'right'});

/*================================= type js =====================================*/

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer', 'Student :)'],
    typeSpeed: 70,
    backSpeed: 70,
    loop: true,
    backDelay: 1000,
});