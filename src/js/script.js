const meubnt = document.getElementById('menu-icon');
const navBar = document.getElementById('nav-bar');


function handleClick() {
    navBar.classList.remove("hidden");
    /**
     * > Substituindo .remove('display') para .remove('hidden')
     * 
     * A ideia seria exibir o navbar quando em telas de smartphone
     * e exibir o conteúdo com os links. No formato anterior a class 'display' 
     * não era encontrada no elemento <nav> 
    */
}


meubnt.addEventListener("click", handleClick);