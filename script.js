// Adiciona um pequeno efeito interativo ao clicar na imagem
document.addEventListener('DOMContentLoaded', () => {
    const icon = document.getElementById('techIcon');

    icon.addEventListener('click', () => {
        // Efeito visual rápido de pulso
        icon.style.transform = 'scale(0.9)';
        setTimeout(() => {
            icon.style.transform = 'scale(1)';
        }, 100);
        
        console.log('Fusão entre mente e máquina ativada! 🧠⚡');
    });
});
