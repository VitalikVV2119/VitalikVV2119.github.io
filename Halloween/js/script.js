const button = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");
button.onclick = func;

function func(){
	menu.classList.toggle("active-menu");
	menu.classList.toggle("deactive-menu");
}