// Garante que o código só rode após o HTML estar pronto
document.addEventListener('DOMContentLoaded', () => {
  
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

  // Verifica se todos os elementos existem na página antes de continuar
  if (!visionSelect || !snellenBoard || !infoTitle || !infoDesc) {
    console.error("Erro: Um ou mais elementos HTML não foram encontrados. Verifique os IDs.");
    return;
  }

  // Evento de alteração no select
  visionSelect.addEventListener('change', (e) => {
    const selectedMode = e.target.value;
    
    // Proteção caso o valor selecionado não exista no dicionário
    if (!visionDetails[selectedMode]) return;

    // Reseta para a classe base limpa
    snellenBoard.className = 'snellen-board';
    
    // Aplica a nova classe correspondente
    snellenBoard.classList.add(`mode-${selectedMode}`);

    // Atualiza as informações do painel
    infoTitle.textContent = visionDetails[selectedMode].title;
    infoDesc.textContent = visionDetails[selectedMode].desc;
  });

});
