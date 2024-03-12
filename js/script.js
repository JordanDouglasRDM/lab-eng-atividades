feather.replace();

let temaSalvo = localStorage.getItem('temaSelecionado');
if (temaSalvo) {
    alterarTema(temaSalvo);
}

let meuButtonHome = document.querySelector('.meuButtonHome');
let dropdownItems = document.querySelectorAll('.dropdown-item');
let meuDropDown = document.querySelector('.meuDropDown');
let currentUrl = window.location.href;
let currentDirectoryArray = currentUrl.split('/');
let positionArray = currentDirectoryArray.length - 2;
let currentDirectory = currentDirectoryArray[positionArray];

if (currentDirectory === 'lab-eng-atividades') {
    meuButtonHome.classList.add('active');
} else {
    let ultimaPosicaoDiretorio = currentDirectory.length - 1
    let valorACompararDir = currentDirectory[ultimaPosicaoDiretorio];

    meuDropDown.classList.add('active')
    dropdownItems.forEach((li) => {
        let ultimaPosicaoLi = li.textContent.length - 1
        let valorAComparar = li.textContent[ultimaPosicaoLi];
        if (valorACompararDir === valorAComparar) {
            li.classList.add('active')
        }
    });
}
function alterarTema(tema) {
    localStorage.setItem('temaSelecionado', tema);
    let meuBody = document.querySelectorAll('.meuBody');
    meuBody.forEach((body) => {
        body.setAttribute('data-bs-theme', tema);
    });
}