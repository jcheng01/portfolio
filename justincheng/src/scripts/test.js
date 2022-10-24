function scrollAbout() {
    let e = document.getElementById("aboutSection");
    // This ends the block to the window 
    // bottom and also aligns the view to the center 
    e.scrollIntoView({
      block: 'end',
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
      inline: 'center'
    });
}
function scrollProjects() {
    let e = document.getElementById("projectsSection");
    // This ends the block to the window 
    // bottom and also aligns the view to the center 
    e.scrollIntoView({
      block: 'end',
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

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }