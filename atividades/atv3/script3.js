//exercício 1
let minhaData = document.querySelector('.minhaDataFormatada');
const dataAtual = new Date();

const dataFormatada = dataAtual.toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
minhaData.innerHTML = dataFormatada;

//exercício 2
let meuRelogioc = document.querySelector('.meuRelogio');

function horarioAtual() {
    let agora = new Date()
    let hora = agora.toLocaleTimeString();
    setTimeout(horarioAtual, 1000);
    meuRelogioc.innerHTML = ' ' + hora;
}

horarioAtual();

//exercício 3
function verificarPalindromo() {
    event.preventDefault()
    let valor = document.querySelector('.meuValor').value

    valor = valor.replace(/\s/g, '').toLowerCase();
    valorInvertido = valor.split('').reverse().join('');
    if (valor === '') {
        Swal.fire({
            title: "'" + valor + "' não é um valor válido!",
            icon: "error",
            confirmButtonColor: "#26ab2c",
        });
    } else if (valorInvertido === valor) {
        Swal.fire({
            title: "'" + valor + "' é um palíndromo!:",
            icon: "success",
            confirmButtonColor: "#26ab2c",
        });
    } else {
        Swal.fire({
            title: "'" + valor + "' não é um palíndromo!:",
            icon: "error",
            confirmButtonColor: "#26ab2c",
        });
    }
}