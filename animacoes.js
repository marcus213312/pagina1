// Espera o documento HTML ser completamente carregado
document.addEventListener('DOMContentLoaded', () => {

    // --- Parte 1: As REGRAS do nosso segurança ---
    const options = {
        root: null, 
        threshold: 0.1 // A "festa" (animação) começa quando 10% do convidado (card) estiver visível
    };

    // --- Parte 2: O que o segurança FAZ quando vê alguém ---
    const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
            // "entry" é o card que o segurança está vendo agora
            
            // Se o card ESTÁ aparecendo na tela...
            if (entry.isIntersecting) {
                // ...ele coloca a "etiqueta" .visible no card.
                entry.target.classList.add('visible'); 
                
                // E depois, ele para de olhar para esse card para não repetir a animação
                observer.unobserve(entry.target);
            }
        });
    };

    // --- Parte 3: Contratando o segurança e dizendo a ele o que fazer ---
    // Cria o segurança (o "IntersectionObserver") com as regras e ações que definimos acima
    const observer = new IntersectionObserver(handleIntersect, options);

    // --- Parte 4: Dizendo ao segurança QUEM ele deve observar ---
    // Encontra todos os cards de estudante na página
    const cards = document.querySelectorAll('.estudante-div'); 
    
    // Manda o segurança observar CADA um dos cards que foram encontrados
    cards.forEach(card => observer.observe(card));

});
