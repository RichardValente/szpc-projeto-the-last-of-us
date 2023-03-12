// comentario de linha
/* comentario de varias linhas - inicio

comentario de varias linhas - final
*/

// OBJETIVO - quando clicar no botão temos que mostrar a imagem de fundo correspondente

//1 pegar os elementos HTML dos botes

const botoesCarrossel = document.querySelectorAll('.botao'); //pega a lista dos botões e insere na constante

const imagens = document.querySelectorAll('.imagem');

//2 identificar o clique do usuário no botão (evento)
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        //3 desmarcar o botão anterior
        desativaBotaoSelecionado();

        //4 marcar o botão clicado 
        selecionaBotaoCarrossel(botao);

        //5 esconder a imagem anterior

        escondeImagemAtiva();

         //6 fazer a imagem corresnpondente ao botão clicado
        mostrarImagemDeFundo(indice);

    })
})


function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionaBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function escondeImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativaBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

