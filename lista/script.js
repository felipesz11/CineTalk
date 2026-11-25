const botaoEsquerda = document.querySelector('.botao1');
const botaoDireita = document.querySelector('.botao2');

// Seleciona apenas os cards de cima 
const cardsListas = document.querySelectorAll('.listas > div');

// Seleciona apenas os pôsteres de recomendações 
const cardsRecomendacao = document.querySelectorAll('.recomendacao > div');

// Função dos botão
function trocarListas(direcao) {
    cardsListas.forEach(card => {
        card.classList.toggle('oculto');
        card.classList.remove('animar-direita', 'animar-esquerda');

        if (!card.classList.contains('oculto')) {
            void card.offsetWidth;
            const classeAnimacao = direcao === 'direita' ? 'animar-direita' : 'animar-esquerda';
            card.classList.add(classeAnimacao);

            // Remove a classe de animação pro hover funcionar
            setTimeout(() => {
                card.classList.remove(classeAnimacao);
            }, 400);
        }
    });
}


// Função das recomendações de baixo
function trocarRecomendacoesAutomatico() {
    cardsRecomendacao.forEach(item => {
        item.classList.toggle('oculto');
        item.classList.remove('animar-direita');

        if (!item.classList.contains('oculto')) {
            void item.offsetWidth;
            item.classList.add('animar-direita');
        }
    });
}

// Trocar as lista
botaoDireita.addEventListener('click', () => trocarListas('direita'));
botaoEsquerda.addEventListener('click', () => trocarListas('esquerda'));

// Girar as ft
setInterval(trocarRecomendacoesAutomatico, 15000);