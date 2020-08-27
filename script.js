function dados() {

    let nome = document.getElementById('nome')
    let ocupacao = document.getElementById('ocupacao')

    let dado_nome = document.getElementById('i_nome')
    let dado_ocupacao = document.getElementById('i_ocupacao')

    nome.innerHTML = dado_nome.value
    ocupacao.innerHTML = dado_ocupacao.value

}