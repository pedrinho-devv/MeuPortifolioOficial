// Seleciona os elementos
const bntIcon = document.getElementById("bnt-icon");
const menu = document.getElementById("menu");

// Função para alternar visibilidade
function eventBnt() {
  menu.classList.toggle("hidden");
}

// Adiciona o evento de clique ao ícone
bntIcon.addEventListener("click", eventBnt);
