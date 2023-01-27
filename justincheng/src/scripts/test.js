function scrollAbout() {
  let e = document.getElementById("aboutSection");
  // This ends the block to the window 
  // bottom and also aligns the view to the center 
  e.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'center'
  });
}
function scrollExperience() {
  let e = document.getElementById("experienceSection");
  // This ends the block to the window 
  // bottom and also aligns the view to the center 
  e.scrollIntoView({
    block: 'end',
    behavior: 'smooth',
    inline: 'nearest'
  });
}
function scrollProjects() {
  let e = document.getElementById("projectsSection");
  // This ends the block to the window 
  // bottom and also aligns the view to the center 
  e.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'center'
  });
}
function scrollContact() {
  let e = document.getElementById("endSection");
  // This ends the block to the window 
  // bottom and also aligns the view to the center 
  e.scrollIntoView({
    block: 'end',
    behavior: 'smooth',
    inline: 'center'
  });
}

window.addEventListener('scroll', function () {
  let navbar = document.querySelector(".navBar");
  navbar.classList.toggle('.sticky', window.scrollY > 0);
})


let tabs = document.querySelectorAll(".tabs h3");
let tabContent = document.querySelectorAll(".tabContent div");
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContent.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContent[index].classList.add("active");
    tabs[index].classList.add("active");
  });
})

const hamburgerItem = document.querySelectorAll('.hamburgerItem');
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobileNav');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  mobileNav.classList.toggle('overlay');
  hamburgerItem.forEach(hamburgerItem => {
    hamburgerItem.classList.toggle('is-active');
  });
}, false);
// hamburgerItem.array.forEach(element => {
//   hamburgerItem.addEventListener('click', () => {
//     hamburger.classList.toggle('is-active');
//   })
// })









