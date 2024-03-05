const dados = [];

function adicionarValor() {
    event.preventDefault();
    const valor = document.getElementById("valor");
    const novoValor = valor.value;

    if (novoValor !== "") {
        dados.push(Number(novoValor));
        dados.sort((a, b) => a - b);

        atualizarLista();

        valor.value = "";
    }
}

function atualizarLista() {
    const lista = document.getElementById("lista-dados");
    lista.innerHTML = "";

    dados.forEach(function(item) {
        const itemDiv = document.createElement("li");
        itemDiv.className = "list-group-item"
        itemDiv.textContent = item;
        lista.appendChild(itemDiv);
    });
}