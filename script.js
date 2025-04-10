// Configurações personalizáveis
const CONFIG = {
    // Coloque as URLs das fotos aqui (podem ser locais ou da web)
    fotos: [
        'img/IMG_20240919_193140.jpg',
        'img/IMG_20241011_194120.jpg',
        'img/IMG_20250204_182105.jpg',
        'img/IMG-20241225-WA0030.jpg',
        'img/IMG-20241225-WA0031.jpg',
        'img/IMG-20250112-WA0004.jpg',
        'img/IMG-20250112-WA0013.jpg',
        'img/A_gente_corre_o_risco_de_chorar_um_pouco_quando_se_deixa_cativar...___Antoine_de_Saint-Exupery_JPG.jpg',
        'img/A_gente_corre_o_risco_de_chorar_um_pouco_quando_se_deixa_cativar...___Antoine_de_Saint-Exupery_JPG_2.jpg'
    ],
    // Coloque sua mensagem personalizada aqui
    mensagem: ` Feliz pascoa amor, que deus abençoe sempre sua vida e sua família e para comemorar esse dia que ainda não chego... 
              Diga a senha para liberar seu presente: ("to com fome") `,
    // Tempo de transição entre slides (em milissegundos)
    tempoSlide: 3000
};

// Elementos do DOM
const botaoSurpresa = document.getElementById('botao-surpresa');
const telaInicial = document.querySelector('.inicio');
const telaMensagem = document.querySelector('.mensagem-pascoa');
const slideshowContainer = document.querySelector('.slideshow-container');
const ovoContainer = document.querySelector('.ovo-container');
const mensagemSecreta = document.getElementById('mensagem-secreta');
const botaoMusica = document.getElementById('botao-musica');
const audioMusica = document.getElementById('musica');

// Inicializar a página
document.addEventListener('DOMContentLoaded', function() {
    inicializarSlideshow();
    inicializarMensagemSecreta();
    configurarEventos();
});

// Configurar slideshow
function inicializarSlideshow() {
    // Criar elementos de slideshow
    CONFIG.fotos.forEach((foto, index) => {
        const slide = document.createElement('img');
        slide.src = foto;
        slide.alt = `Foto ${index + 1}`;
        slide.className = 'slide';
        
        // Tornar o primeiro slide ativo
        if (index === 0) {
            slide.classList.add('ativa');
        }
        
        slideshowContainer.appendChild(slide);
    });
}

// Configurar a função de troca de slides
function iniciarSlideshow() {
    let slideAtual = 0;
    const slides = document.querySelectorAll('.slide');
    
    // Se não houver slides, não fazer nada
    if (slides.length === 0) return;
    
    setInterval(() => {
        // Remover classe ativa do slide atual
        slides[slideAtual].classList.remove('ativa');
        
        // Avançar para o próximo slide
        slideAtual = (slideAtual + 1) % slides.length;
        
        // Adicionar classe ativa ao novo slide atual
        slides[slideAtual].classList.add('ativa');
    }, CONFIG.tempoSlide);
}

// Configurar a mensagem secreta
function inicializarMensagemSecreta() {
    // Criar elemento de parágrafo para a mensagem
    const mensagemParagrafo = document.createElement('p');
    mensagemParagrafo.textContent = CONFIG.mensagem;
    
    // Adicionar a mensagem ao container
    mensagemSecreta.appendChild(mensagemParagrafo);
}

// Configurar eventos
function configurarEventos() {
    // Evento de clique no botão de surpresa
    botaoSurpresa.addEventListener('click', () => {
        telaInicial.style.display = 'none';
        telaMensagem.style.display = 'block';
        iniciarSlideshow();
    });
    
    // Evento de clique no ovo de Páscoa
    ovoContainer.addEventListener('click', () => {
        if (mensagemSecreta.style.display === 'block') {
            mensagemSecreta.style.display = 'none';
        } else {
            mensagemSecreta.style.display = 'block';
        }
    });
    
    // Evento de clique no botão de música
    botaoMusica.addEventListener('click', () => {
        if (audioMusica.paused) {
            audioMusica.play();
            botaoMusica.innerHTML = '<i class="fas fa-pause"></i> <span>Pausar música</span>';
        } else {
            audioMusica.pause();
            botaoMusica.innerHTML = '<i class="fas fa-play"></i> <span>Tocar nossa música</span>';
        }
    });
}

// Função para adicionar confetes quando clicar no botão
function mostrarConfetes() {
    // Criar container de confetes se não existir
    if (!document.querySelector('.confete-container')) {
        const confeteContainer = document.createElement('div');
        confeteContainer.className = 'confete-container';
        document.body.appendChild(confeteContainer);
        
        // Adicionar 50 confetes
        for (let i = 0; i < 50; i++) {
            const confete = document.createElement('div');
            confete.className = 'confete';
            confete.style.left = `${Math.random() * 100}%`;
            confete.style.animationDelay = `${Math.random() * 5}s`;
            confete.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
            confeteContainer.appendChild(confete);
        }
    }
    
    // Mostrar os confetes
    document.querySelector('.confete-container').style.display = 'block';
    
    // Ocultar após 5 segundos
    setTimeout(() => {
        document.querySelector('.confete-container').style.display = 'none';
    }, 5000);
}

// Adicionar confetes ao clicar no botão de surpresa
botaoSurpresa.addEventListener('click', mostrarConfetes); 