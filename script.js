// Espera o documento HTML ser completamente carregado antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os elementos que têm a classe 'aluno-card'
    const todosOsCards = document.querySelectorAll('.aluno-card');

    // Itera sobre cada card que foi encontrado
    todosOsCards.forEach(card => {

        // Adiciona um evento de 'click' a cada card
        card.addEventListener('click', () => {
            
            // Pega o valor do atributo 'data-instagram-url' do card que foi clicado
            const urlParaAbrir = card.dataset.instagramUrl;

            // Verifica se a URL existe para evitar abrir abas em branco
            if (urlParaAbrir) {
                // Abre a URL em uma nova aba do navegador ('_blank')
                window.open(urlParaAbrir, '_blank');
            } else {
                console.log('URL não definida para este card.');
            }
        });
    });

});
