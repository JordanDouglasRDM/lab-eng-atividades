// let nome = prompt('Digite seu nome', "");

// if (confirm("Quer ver seu nome?")) {
//     alert("Seu nome é: "+nome);
// }

// for (i=1; i<=6; i++) {
//     document.write("<h"+i+">Olá sala!</h"+i+">");


// }

function exercicio1() {
    Swal.fire({
        title: "Informe algum valor: ",
        input: "text",
        inputAttributes: {
            autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonColor: "#26ab2c",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Enviar",
        showLoaderOnConfirm: true,
        preConfirm: async (dado) => {
            Swal.fire({
                title: "",
                text: "Deseja verificar o tipo do dado informado?",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#26ab2c",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sim"
            }).then((result) => {
                if (result.isConfirmed) {
                    let tipoDado = verificarTipoDado(dado);
                    Swal.fire({
                        title: "Tipo do dado:",
                        text: tipoDado,
                        icon: "success",
                        confirmButtonColor: "#26ab2c",
                    });
                }
            });
        }
    });
    function verificarTipoDado(dado) {
        if (dado === '') {
            return 'undefined';
        }
        if (typeof dado === 'undefined') {
            return 'undefined';
        }
        if (!isNaN(dado)) {
            if (Number.isInteger(parseFloat(dado))) {
                return 'number e inteiro';
            } else {
                return 'number e float';
            }
        }
        if (dado.toLowerCase() === 'true' || dado.toLowerCase() === 'false') {
            return 'boolean';
        }
        if (typeof dado === 'string') {
            return 'string';
        }
        return 'undefined';
    }

}

function exercicio2() {
    Swal.fire({
        title: "Informe algum valor: ",
        input: "text",
        inputAttributes: {
            autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonColor: "#26ab2c",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Enviar",
        showLoaderOnConfirm: true,
        preConfirm: async (dado) => {
            if (!isNaN(dado)) {
                let result = ePrimo(dado);
                Swal.fire({
                    // title: "Erro",
                    text: "O número informado '" + result + "'.",
                    icon: "info",
                    confirmButtonColor: "#26ab2c",
                });
            } else {
                Swal.fire({
                    title: "Erro",
                    text: "O valor informado não é um número inteiro.",
                    icon: "error",
                    confirmButtonColor: "#26ab2c",
                });
            }
        }
    });

    function ePrimo(num) {
        if (num <= 1) {
            return 'não é primo';
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return 'não é primo';
            }
        }
        return 'é primo';
    }
}

function exercicio3() {
    Swal.fire({
        title: "Informe um número inteiro: ",
        input: "text",
        inputAttributes: {
            autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonColor: "#26ab2c",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Enviar",
        showLoaderOnConfirm: true,
        preConfirm: async (dado) => {
            if (!isNaN(dado)) {
                let result = imparPar(dado);
                Swal.fire({
                    // title: "Erro",
                    text: "O número informado é '" + result + "'.",
                    icon: "info",
                    confirmButtonColor: "#26ab2c",
                });
            } else {
                Swal.fire({
                    title: "Erro",
                    text: "O valor informado não é um número inteiro.",
                    icon: "error",
                    confirmButtonColor: "#26ab2c",
                });
            }
        }
    });

    function imparPar(number) {
        let result = number % 2;
        if (imparPar === 0) {
            return "par";
        } else {
            return "ímpar";
        }
    }
}

function exercicio4() {
    Swal.fire({
        title: "Informe um número inteiro: ",
        input: "text",
        inputAttributes: {
            autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonColor: "#26ab2c",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Enviar",
        showLoaderOnConfirm: true,
        preConfirm: async (dado) => {
            if (!isNaN(dado)) {
                let result = calculaFatorial(dado);
                Swal.fire({
                    // title: "Erro",
                    text: "O fatorial de '" + dado + "' é '" + result + "'.",
                    icon: "info",
                    confirmButtonColor: "#26ab2c",
                });
            } else {
                Swal.fire({
                    title: "Erro",
                    text: "O valor informado não é um número inteiro.",
                    icon: "error",
                    confirmButtonColor: "#26ab2c",
                });
            }
        }
    });

    function calculaFatorial(numero) {
        if (numero === 0 || numero === 1) {
            return 1;
        } else {
            let resultado = 1;
            for (let i = 2; i <= numero; i++) {
                resultado *= i;
            }
            return resultado;
        }
    }
}
