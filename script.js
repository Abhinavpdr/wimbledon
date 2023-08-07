/*const navbar = document.querySelector('#NavBar');

let top = navbar.offsetTop;
function stickynavbar() {
  if (window.scrollY >= top) {    
    navbar.classList.add('sticky');
   
  } else {
    navbar.classList.remove('sticky');
  

  }
}
window.addEventListener('scroll', stickynavbar);*/


/*
window.addEventListener('scroll', reveal);
function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i=0; i < reveals.length; i++){
  var windowheight = window.innerHeight;
  var revealtop = reveals[i].getBoundingClientRect().top;
  var revealpoint = 150;

  if(revealtop < windowheight - revealpoint){
    reveal[i].classlist.add('active');
  }else{
    reveals[i].classList.remove('active');
  }
  }
}*/




const animeTitle = (element) => {
	const arrayText = element.innerHTML.split("");
	element.innerHTML = "welcome";
	arrayText.forEach((letter, indice) => {
		
	});

};

const h1 = document.querySelector(".welcome");

animeTitle(h1);

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		entry.isIntersecting
			? entry.target.classList.add("active")
			: entry.target.classList.remove("active");
	});
});

const hiddenElements = document.querySelectorAll(".reveal");

hiddenElements.forEach((el) => observer.observe(el));




