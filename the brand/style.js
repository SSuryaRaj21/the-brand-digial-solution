var menuBtn = document.querySelector('.menu-btn');
var navLinkWrapper = document.querySelector('.nav-links')
var navLinks = document.querySelectorAll('.nav-links li a');

menuBtn.addEventListener('click', toggleMenu)

// Function To Toggle Menu Button 
function toggleMenu(){
    menuBtn.classList.toggle('active');
    navLinkWrapper.classList.toggle('active');
}
for(var i=0; i < navLinks.length; i++){
    navLinks[i].addEventListener('click', toggleMenu);
}


// code for testmonials sliders

// code to show / hide menu when scrolling
var homeSection = document.querySelector('.home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
    if(window.scrollY > 120){
        homeSection.classList.add('active')
    }
    else{
        homeSection.classList.remove('active')

    }
}