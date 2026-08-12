// Dicionário com dados sobre cada condição visual
const visionDetails = {
  normal: {
    title: "Visão Normal (100% / 20/20)",
    desc: "A luz focaliza diretamente na retina. A pessoa consegue enxergar claramente todas as linhas de letras da tabela de Snellen sem distorções."
  },
  miopia: {
    title: "Embaçado (Miopia)",
    desc: "A imagem se forma antes de chegar à retina. Objetos e letras distantes parecem embaçados e fora de foco, dificultando a leitura das linhas inferiores."
  },
  astigmatismo: {
    title: "Borrado / Duplicado (Astigmatismo)",
    desc: "Causado por uma curvatura irregular da córnea ou do cristalino. As imagens parecem borradas, esticadas ou com sombras/fantasmas em determinadas direções."
  },
  cegueira: {
    title: "Tudo Preto (Cegueira Total)",
    desc: "Ausência completa de percepção de luz e forma. A informação visual não é processada ou transmitida ao cérebro."
  }
};

// Captura dos elementos do DOM
const visionSelect = document.getElementById('visionLevel');
const snellenBoard = document.getElementById('snellenBoard');
const infoTitle = document.getElementById('infoTitle');
const infoDesc = document.getElementById('infoDesc');

// Evento de alteração no select
visionSelect.addEventListener('change', function(e) {
  const selectedMode = e.target.value;

  // Limpa classes anteriores de efeitos
  snellenBoard.className = 'snellen-board';

  // Aplica a nova classe correspondente
  snellenBoard.classList.add(`mode-${selectedMode}`);

  // Atualiza as informações do README
  infoTitle.textContent = visionDetails[selectedMode].title;
  infoDesc.textContent = visionDetails[selectedMode].desc;
});
