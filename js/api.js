function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario) {
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdId.innerHTML = usuario.id
    tdNome.innerHTML = usuario.nome

    linha.appendChild(tdId);
    linha.appendChild(tdNome);

    return linha

}

function main() {

    let data = fazGet("https://randomapi.com/api/?key=0SYP-D8QR-FTVU-JBI8&ref=jd6lvltc")
    console.log(fazGet("https://randomapi.com/api/?key=0SYP-D8QR-FTVU-JBI8&ref=jd6lvltc"))
    let usuario = JSON.parse(data);
    let tabela = document.getElementById("tabela")
    usuarios.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}

main()