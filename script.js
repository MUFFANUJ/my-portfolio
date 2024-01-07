/* toggle icon nagbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navBar');

menuIcon.onclick=() => {
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
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']}').classList.add('active');

        
      });
    };
  });

  let header = document.querySelector('header');
  header.classList.toggle('sticky',window.screenY > 100);
  
};

document.querySelector('.close1').onclick = () => {
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
}
document.querySelector('.close2').onclick = () => {
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
}

document.querySelector('.close3').onclick = () => {
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
}

document.querySelector('.close4').onclick = () => {
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
}

document.querySelector('.close5').onclick = () => {
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
}

// scroll reveal js 
let value = '30px';

// if ($(window).width() < 768) {
//   value = '10px';
// } else {
//   value = '80px';
// }

ScrollReveal({ 
  // reset: true ,
  distance: value,
  duration:2000,
  delay:200
});

ScrollReveal().reveal('.home-content, .heading' ,{ origin: 'top' });

ScrollReveal().reveal('.home-img, .about-img,.portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1 ' ,{ origin: 'left' });
ScrollReveal().reveal('.home-content p , .about-content p, #menu-icon' ,{ origin: 'right' });


// typed js 

const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'Designer','Video/Photo Editor'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
})


// circle skills 
const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var perent = Math.floor(dots*marked/100);
  var points = "";
  var rotate = 360/dots;

  for (let i = 0; i< dots ; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg "></div>`
  }
  elem.innerHTML = points;

  const pointsMarked = elem.querySelectorAll('.points');
  for (let i=0 ; i<percent ; i++) {
    pointsMarked[i].classList.add('marked');
  }
})