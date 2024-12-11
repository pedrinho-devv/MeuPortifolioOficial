const meubnt = document.getElementById('menu-icon');
const navBar = document.getElementById('nav-bar');


function handleClick() {
    navBar.classList.remove("hidden"); 
}


meubnt.addEventListener("click", handleClick);