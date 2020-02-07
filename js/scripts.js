// Navbar script
/*
let mainNav = document.getElementById('navMenu');
let navBarToggle = document.getElementById('navToggle');

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});
*/

// Script to change title on main screen
let devArray = ['Front End Developer', 'Developer', 'Web Developer', 'Programmer'];

const myDev = setInterval(devRandom, 1500);

function devRandom() {
    document.getElementById("dev").innerHTML = devArray[Math.floor(Math.random() * devArray.length)];
};

const myMobDev = setInterval(mobRandom, 1800);

function mobRandom() {
    document.getElementById("mobDev").innerHTML = devArray[Math.floor(Math.random() * devArray.length)];
}

// Change tab title
window.onblur = function () {
    document.title = 'Come back soon!';
}
window.onfocus = function () {
    document.title = 'Adrian Grimm';
}