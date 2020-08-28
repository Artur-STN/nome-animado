function pegar_dados() {
    
    let nome = document.querySelector('.nome-nome-animado')
    let ocupacao = document.querySelector('.ocupacao-nome-animado')

    let i_nome = document.getElementById('i_nome')
    let i_ocupacao = document.getElementById('i_ocupacao')

    nome.innerHTML = i_nome.value
    ocupacao.innerHTML = i_ocupacao.value
}