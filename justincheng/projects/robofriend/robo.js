function changeColor(){
    let color = document.getElementById('colorInputColor').value;
    document.getElementById('headColor').style.backgroundColor = color;
    document.getElementById('rightArmColor').style.backgroundColor = color;
    document.getElementById('leftArmColor').style.backgroundColor = color;
    document.getElementById('torsoColor').style.backgroundColor = color;
    document.getElementById('llegColor').style.backgroundColor = color;
    document.getElementById('rlegColor').style.backgroundColor = color;
    document.getElementById('rlegColor').style.color = color;
    document.getElementById('colorInputText').value = color;
}
function text(){
    document.getElementById("field2").value = document.getElementById("field1").value;
}

function dance(){
   // We create a Promise and return it
   new Promise((resolve) => {
    const animationName = 'animate__jello';
    const node = document.querySelector('.robots');

    node.classList.add('animate__animated', 'animate__jello', 'animate__repeat-1');

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove('animate__animated', 'animate__jello');
      resolve('Animation ended');
    }
    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });
}

function dangle(){
     // We create a Promise and return it
     new Promise((resolve) => {
        const animationName = 'animate__hinge';
        const node = document.querySelector('.robots');
    
        node.classList.add('animate__animated', 'animate__hinge', 'animate__repeat-1');
    
        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
          event.stopPropagation();
          node.classList.remove('animate__animated', 'animate__hinge');
          resolve('Animation ended');
        }
        node.addEventListener('animationend', handleAnimationEnd, {once: true});
      });
}

function flip(){
    // We create a Promise and return it
    new Promise((resolve) => {
       const animationName = 'animate__flip';
       const node = document.querySelector('.robots');
   
       node.classList.add('animate__animated', 'animate__flip', 'animate__repeat-1');
   
       // When the animation ends, we clean the classes and resolve the Promise
       function handleAnimationEnd(event) {
         event.stopPropagation();
         node.classList.remove('animate__animated', 'animate__flip');
         resolve('Animation ended');
       }
       node.addEventListener('animationend', handleAnimationEnd, {once: true});
     });
}





WebFontConfig = {
    google: { families: [ 'Montserrat::latin', 'Raleway::latin', 'Droid+Sans::latin', 'Poiret+One::latin', 'Dosis::latin', 'Oxygen::latin', 'Inconsolata::latin', 'Nunito::latin', 'Muli::latin', 'Cinzel::latin', 'Quicksand::latin', 'Maven+Pro::latin', 'Righteous::latin', 'Russo+One::latin', 'Comfortaa::latin', 'Coming+Soon::latin', 'Fredoka+One::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();


