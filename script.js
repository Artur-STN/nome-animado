function pegar_dados() {

    let nome = document.querySelector('.nome-nome-animado')
    let ocupacao = document.querySelector('.ocupacao-nome-animado')

    let i_nome = document.getElementById('i_nome')
    let i_ocupacao = document.getElementById('i_ocupacao')

    nome.innerHTML = i_nome.value
    ocupacao.innerHTML = i_ocupacao.value

}

function rodar_animacao() {

    let caixa = document.querySelector('.nome-animado')
    let img = document.querySelector('.imagem-nome-animado')
    let nome = document.querySelector('.nome-nome-animado')
    let ocupacao = document.querySelector('.ocupacao-nome-animado')

    caixa.style.visibility = 'visible'
    img.style.animation = 'anima 1.5s'
    nome.style.animation = 'anima 0.5s'
    ocupacao.style.animation = 'anima 1s'
    
}

function fechar_animacao() {

    let caixa = document.querySelector('.nome-animado')
    let img = document.querySelector('.imagem-nome-animado')
    let nome = document.querySelector('.nome-nome-animado')
    let ocupacao = document.querySelector('.ocupacao-nome-animado')

    img.style.animation = 'fechar 120s'
    nome.style.animation = 'fechar 120s'
    ocupacao.style.animation = 'fechar 120s'
    

}