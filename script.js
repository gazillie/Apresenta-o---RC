// Espera que todo o HTML esteja pronto antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {

    // Pega os elementos do HTML
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);

    // Verifica se o carrossel existe antes de continuar
    if (track && slides.length > 0) {
        
        let slideIndex = 0;

        // Lógica de autoplay
        const autoPlay = () => {
            // 1. Avança o índice
            // O '%' (módulo) faz com que ele volte a 0 quando chegar ao fim da lista
            slideIndex = (slideIndex + 1) % slides.length;
            
            // 2. Calcula a largura do slide
            // Graças ao novo CSS, a largura do primeiro slide (clientWidth) é a correta
            const amountToMove = slideIndex * slides[0].clientWidth;
            
            // 3. Move o 'track' para a esquerda
            // Esta é a linha que faz a animação acontecer
            track.style.transform = `translateX(-${amountToMove}px)`;
        };

        // Roda a função autoPlay a cada 4 segundos (4000ms)
        setInterval(autoPlay, 4000);
    
    } else {
        console.warn('Carrossel não foi encontrado ou não tem imagens.');
    }
});