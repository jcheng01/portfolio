


import initTiltEffect from "vanilla-tilt/dist/vanilla-tilt";
import AOS from 'aos';
AOS.init();


const hamburgerItem = document.querySelector('.hamburger-inner');
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
}, false);



const bounce = document.querySelector('.buttonTwo');
function animate () {
  bounce.classList.add('animate__animated', 'animate__bounceOutLeft');
}

