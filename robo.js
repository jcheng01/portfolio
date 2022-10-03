function changeColor(){
    let color = document.getElementById('colorInputColor').value;
    document.getElementById('headColor').style.backgroundColor = color;
    document.getElementById('rightArmColor').style.backgroundColor = color;
    document.getElementById('leftArmColor').style.backgroundColor = color;
    document.getElementById('torsoColor').style.backgroundColor = color;
    document.getElementById('llegColor').style.backgroundColor = color;
    document.getElementById('rlegColor').style.backgroundColor = color;
    document.getElementById('colorInputText').value = color;
}
function dance(){
    const element = document.querySelector('.robots');
    element.classList.add('animate__animated', 'animate__tada');
}
function stretch(){
    const element = document.querySelector('.robots');
    element.classList.add('animate__animated', 'animate__rubberBand');
}
function stop(){
    const element = document.querySelector('.robots');
    element.classList.add('animate__animated', 'animate__fadeIn', 'animate__repeat-1');
}



function darkMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "dark-mode"; "dark-footer";
    content.innerText = "Dark Mode is ON";
  }
  function lightMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Dark Mode is OFF";
  }