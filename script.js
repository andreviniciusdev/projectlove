// Lista de imagens para o carrossel
let imagens = [
    "assets/WhatsApp Image 2025-02-22 at 12.21.01.jpeg",
    "assets/WhatsApp Image 2025-02-22 at 12.21.01 (1).jpeg",
    "assets/WhatsApp Image 2025-02-22 at 12.21.01 (2).jpeg"
];

let indexAtual = 0;

function mudarImagem(direcao) {
    indexAtual += direcao;

    if (indexAtual < 0) {
        indexAtual = imagens.length - 1;
    } else if (indexAtual >= imagens.length) {
        indexAtual = 0;
    }

    document.getElementById("imagem").src = imagens[indexAtual];
}

// ========================== CONTADOR DE TEMPO JUNTOS ==========================

const dataInicio = new Date(2024, 11, 19, 17, 0, 0); 

function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataInicio;
    
    const segundos = Math.floor((diferenca / 1000) % 60);
    const minutos = Math.floor((diferenca / 1000 / 60) % 60);
    const horas = Math.floor((diferenca / 1000 / 60 / 60) % 24);
    const dias = Math.floor(diferenca / 1000 / 60 / 60 / 24);
    const meses = Math.floor(dias / 30); 

    document.getElementById("contador").innerHTML =
        `Tempo juntos: ${meses} meses, ${dias % 30} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

setInterval(atualizarContador, 1000);

atualizarContador();

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("musica");
    audio.volume = 0.5;

    document.body.addEventListener("click", () => {
        audio.play();
    }, { once: true });
});
