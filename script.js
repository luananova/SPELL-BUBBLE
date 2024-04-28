let panelsData = [];
let currentPanel = 0;

// Função para carregar os dados
function loadData() {
  Promise.all([
    fetch("/TEXTOS E IMAGENS/descricao_paineis_pagina_final.json").then(
      (response) => response.json()
    ),
    fetch("/TEXTOS E IMAGENS/imagens_base64.json").then((response) =>
      response.json()
    ),
  ])
    .then(([textos, imagens]) => {
      for (let i = 1; i <= 7; i++) {
        // Assumindo que você tem 7 painéis
        panelsData.push({
          description: textos[`painel${i}`],
          image_base64: imagens[`painel${i}`],
          audio_src: `/AUDIOS/panel_${i}_final.mp3`,
        });
      }
      updatePanel(0); // Atualiza para o primeiro painel
    })
    .catch((error) => console.error("Erro ao carregar dados:", error));
}

function updatePanel(index) {
  const panelData = panelsData[index];

  // Atualiza a imagem
  const imageBase64WithPrefix = `data:image/png;base64,${panelData.image_base64}`;
  document.getElementById("comicPanel").src = imageBase64WithPrefix;

  // Atualiza a descrição
  document.getElementById("panelDescription").innerText = panelData.description;

  // Atualiza e toca o áudio
  const audioElement = document.getElementById("panelAudio");
  audioElement.src = panelData.audio_src;
  audioElement.autoplay = true;

  // Atualiza o título
  document.getElementById("panelTitle").innerText = `Panel ${index + 1}`;

  // Esconde/Mostra botões conforme necessário
  document.getElementById("prevButton").style.display =
    index === 0 ? "none" : "inline-block";
  document.getElementById("nextButton").style.display =
    index === panelsData.length - 1 ? "none" : "inline-block";
}

// Função para navegar entre os painéis
function changePanel(offset) {
  currentPanel += offset;
  if (currentPanel < 0) {
    currentPanel = 0;
  } else if (currentPanel >= panelsData.length) {
    currentPanel = panelsData.length - 1;
  }
  updatePanel(currentPanel);
}

// Event listeners para os botões de navegação
document
  .getElementById("prevButton")
  .addEventListener("click", () => changePanel(-1));
document
  .getElementById("nextButton")
  .addEventListener("click", () => changePanel(1));

// Event listener para o botão de reprodução de áudio
document.getElementById('playButton').addEventListener('click', function() {
  const audioElement = document.getElementById('panelAudio');
  if (audioElement.paused) {
      audioElement.play();
  } else {
      audioElement.pause();
  }
});

// Chamar loadData no final do script
document.addEventListener("DOMContentLoaded", loadData);
