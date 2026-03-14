// Smooth Scrolling

document.querySelectorAll('.nav-links a').forEach(anchor => {

anchor.addEventListener('click', function(e){

e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior:'smooth'
});

});

});


// Simple hover animation

const button = document.querySelector(".portfolio-btn");

button.addEventListener("mouseover",()=>{
button.style.transform="scale(1.05)";
})

button.addEventListener("mouseout",()=>{
button.style.transform="scale(1)";
})