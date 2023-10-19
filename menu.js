// criando ação de abrir menu mobile ao clicar no menu e fechar do menu mobile ao clicar no overlay e no x 

// Obtém referências aos elementos HTML que você deseja manipular
let botao_abrir_menu = document.getElementById('btn-abrir-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

// Adiciona um evento de clique ao botão para abrir o menu
botao_abrir_menu.addEventListener('click', () => {
  menu.classList.add('abrir-menu'); // Adiciona a classe 'abrir-menu' para mostrar o menu
});

// Adiciona um evento de clique ao menu para fechá-lo
menu.addEventListener('click', () => {
  menu.classList.remove('abrir-menu'); // Remove a classe 'abrir-menu' para ocultar o menu
});

// Adiciona um evento de clique ao overlay (camada de fundo) para fechar o menu
overlay.addEventListener('click', () => {
  menu.classList.remove('abrir-menu'); // Remove a classe 'abrir-menu' para ocultar o menu
});
