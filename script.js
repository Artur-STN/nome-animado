function pegar_dados() {

    let nome = document.querySelector('.nome-nome-animado')
    let ocupacao = document.querySelector('.ocupacao-nome-animado')

    let i_nome = document.getElementById('i_nome')
    let i_ocupacao = document.getElementById('i_ocupacao')

    let botao = document.getElementById('botao_pegar')    
    
    nome.innerHTML = i_nome.value
    ocupacao.innerHTML = i_ocupacao.value

    botao.style.background = 'rgb(0, 36, 70)';

}

function limpar_dados() {

    let nome = document.querySelector('.nome-nome-animado')
    let ocupacao = document.querySelector('.ocupacao-nome-animado')

    let botao = document.getElementById('botao_pegar')    
    
    nome.innerHTML = ''
    ocupacao.innerHTML = ''

    botao.style.background = 'rgb(0, 36, 70)';

}

function voltar_bg() {
    
    let botao = document.getElementById('botao_pegar')

    botao.style.background = 'rgb(0, 183, 255)'

}

function hover() {
    
    let botao = document.getElementById('botao_pegar')

    botao.style.background = 'rgb(0, 131, 253)'

}

function rodar_animacao() {

    let caixa = document.querySelector('.nome-animado')
    let img = document.querySelector('.imagem-nome-animado')
    let nome = document.querySelector('.nome-nome-animado')
    let ocupacao = document.querySelector('.ocupacao-nome-animado')

    caixa.style.visibility = ''
    caixa.style.visibility = 'visible'

    img.style.animation = 'anima 1.5s'
    nome.style.animation = 'anima 0.5s'
    ocupacao.style.animation = 'anima 1s'
    
}

function fechar_animacao() {

    let img = document.querySelector('.imagem-nome-animado')
    let nome = document.querySelector('.nome-nome-animado')
    let ocupacao = document.querySelector('.ocupacao-nome-animado')

    img.style.animation = 'fechar 120s'
    nome.style.animation = 'fechar 120s'
    ocupacao.style.animation = 'fechar 120s'

}