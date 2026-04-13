import '../style.css';

// ── Dados ─────────────────────────────────────────────────────────────────────

const palavras: string[] = [
  'Dado', 'Baixo', 'Como', 'Bola', 'Hoje', 'Amanhã', 'Procurar', 'Cativeiro',
  'Você', 'Bombeiros', 'Crescente', 'Tesouro', 'Porque', 'Social', 'Matemática',
  'Milho', 'Ontem', 'Trinta', 'Música', 'Atoa', 'Pato', 'Vida', 'Morte',
  'Gato', 'Brilha', 'Fruta', 'Pena', 'Mesmo', 'Talvez', 'Coisa', 'Eita',
  'Seria', 'Quem', 'Sim', 'Vez', 'Não', 'Poxa', 'Qual', 'Que', 'Isso',
  'Eu', 'Tenha', 'Faz', 'Fez', 'Para', 'Por', 'Vish', 'Tipo', 'Dose',
  'Uma', 'Fugir', 'Pneus', 'Orquestra', 'Cultura', 'Bazuca', 'Humano',
  'Pacotes', 'Carta', 'Triplo', 'Link', 'Desligar', 'Apertado', 'Escolta',
  'Traseiro', 'Tornado', 'Laranja', 'Cenoura', 'Dividir', 'Anedota', 'Carro',
  'Ecologista', 'Aventura', 'Debate', 'Agudo', 'Equipamento', 'Utilidade',
  'Outro', 'Está', 'Girassol', 'Consoantes', 'Leite', 'Montanha', 'Triste',
  'Feliz', 'Dez', 'Derrama', 'Praga', 'Senta', 'Girafa', '42', 'Carteira',
  'Resumo', 'Peso', 'Manutenção', 'Grupo', 'Patamar', 'Cerveja', 'Mar',
  'Skate', 'Borboleta', 'Barraco', 'Tijolo', 'Coração', 'Eclipse', 'Sorrir',
  'Virada', 'Igual', 'Torneio', 'Tomou', 'Ocupado', 'Visita', 'Olho',
  'Lagoa', 'Bengala', 'Cubo', 'Corre', 'Ilha', 'Quebra', 'Banco', 'Malote',
  'Briga', 'Matuê', 'Irmão', 'Rum', 'Lancha', 'Bem', 'Mal', 'Filme',
  'Da', 'Do', 'E', 'A', 'É',
];

const emojis: string[] = [
  '🤔', '🎲', '🌀', '💥', '🎯', '🔥', '⚡', '🌊', '🎪', '🦄',
  '🌈', '🎭', '🍀', '💫', '🎸', '🚀', '👾', '🎮', '🌵', '🍕',
  '🦋', '🌺', '⭐', '🎩', '🧲', '🪄', '🦅', '🎊', '🌙', '🍄',
  '🐸', '🦊', '🤡', '👻', '🧨', '🫧', '🪩', '🦩', '🌋', '🐙',
];

const fontes: string[] = [
  "'Nunito', sans-serif",
  "'Fredoka One', cursive",
  "Georgia, serif",
  "'Courier New', monospace",
  "Impact, fantasy",
  "'Arial Black', sans-serif",
];

// ── DOM ───────────────────────────────────────────────────────────────────────

const maquina = document.getElementById('maquina') as HTMLImageElement;
const resultado = document.getElementById('resultado') as HTMLElement;
const contadorEl = document.querySelector('.contador') as HTMLElement;
const root = document.documentElement;

// ── Estado ────────────────────────────────────────────────────────────────────

let cliques = 0;

// ── Evento principal ──────────────────────────────────────────────────────────

maquina.addEventListener('click', acionar);

function acionar(): void {
  cliques++;
  contadorEl.textContent = `${cliques} ${cliques === 1 ? 'clique' : 'cliques'}`;

  animarMaquina();
  gerarFrase();
  trocarImagem();
  trocarBackground();
  efeitoEspecial();
}

// ── Funções principais ────────────────────────────────────────────────────────

function animarMaquina(): void {
  maquina.classList.remove('sacudir');
  void maquina.offsetWidth; // força reflow para reiniciar a animação
  maquina.classList.add('sacudir');
}

function gerarFrase(): void {
  const qtd = Math.floor(Math.random() * 4) + 4; // 4 a 7 palavras
  const selecionadas = Array.from(
    { length: qtd },
    () => palavras[Math.floor(Math.random() * palavras.length)]
  );

  // 50% de chance de emojis flanqueando a frase
  const comEmoji = Math.random() > 0.5;
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  resultado.textContent = comEmoji
    ? `${emoji} ${selecionadas.join(' ')} ${emoji}`
    : selecionadas.join(' ');

  // Fonte aleatória
  resultado.style.fontFamily = fontes[Math.floor(Math.random() * fontes.length)];

  // Tamanho, espaçamento e peso aleatórios
  resultado.style.fontSize = (Math.random() * 1.8 + 1.0).toFixed(2) + 'rem';
  resultado.style.letterSpacing = Math.floor(Math.random() * 8) + 'px';
  resultado.style.fontWeight = Math.random() > 0.4 ? '800' : '400';

  // Sombra colorida aleatória (40% de chance)
  if (Math.random() > 0.6) {
    const h = Math.floor(Math.random() * 360);
    const offset = Math.floor(Math.random() * 4) + 1;
    resultado.style.textShadow = `${offset}px ${offset}px 0 hsl(${h}, 90%, 35%)`;
  } else {
    resultado.style.textShadow = '';
  }

  resultado.classList.remove('fade-in', 'arcoiris');
  void resultado.offsetWidth;
  resultado.classList.add('fade-in');
}

function trocarImagem(): void {
  const especial = Math.random() < 0.1; // 10% de chance do GIF especial
  if (especial) {
    maquina.src = '/img/maqui10.gif';
    document.body.style.color = '#000';
  } else {
    const num = Math.floor(Math.random() * 9) + 1; // 1 a 9
    maquina.src = `/img/maqui${num}.png`;
    document.body.style.color = '';
  }

  aplicarFiltroMaquina();
}

function trocarBackground(): void {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 30 + 65); // 65–95%
  const l = Math.floor(Math.random() * 25 + 55); // 55–80%

  // 30% de chance de gradiente em vez de cor sólida
  if (Math.random() < 0.3) {
    const h2 = (h + Math.floor(Math.random() * 100 + 40)) % 360;
    const angulo = Math.floor(Math.random() * 360);
    document.body.style.background =
      `linear-gradient(${angulo}deg, hsl(${h}, ${s}%, ${l}%), hsl(${h2}, ${s}%, ${l}%))`;
  } else {
    document.body.style.background = `hsl(${h}, ${s}%, ${l}%)`;
  }
}

// ── Filtro da máquina ─────────────────────────────────────────────────────────

function aplicarFiltroMaquina(): void {
  const base = 'drop-shadow(0 6px 12px rgba(0,0,0,0.2))';
  const extras = [
    '', // sem filtro extra
    `hue-rotate(${Math.floor(Math.random() * 360)}deg)`,
    `sepia(0.6) hue-rotate(${Math.floor(Math.random() * 360)}deg)`,
    `contrast(1.4) brightness(1.1)`,
    `saturate(3)`,
    `brightness(0.85) contrast(1.3)`,
  ];
  const extra = extras[Math.floor(Math.random() * extras.length)];
  root.style.setProperty('--filtro-maquina', extra ? `${base} ${extra}` : base);
}

function aplicarNeonMaquina(): void {
  const h = Math.floor(Math.random() * 360);
  root.style.setProperty(
    '--filtro-maquina',
    `drop-shadow(0 0 18px hsl(${h}, 100%, 60%)) drop-shadow(0 0 40px hsl(${h}, 100%, 50%))`
  );
  setTimeout(aplicarFiltroMaquina, 1200);
}

// ── Efeitos especiais raros ───────────────────────────────────────────────────

function efeitoEspecial(): void {
  const chance = Math.random();

  if (chance < 0.07) {
    // Inversão total de cores por 700ms (7%)
    document.body.style.filter = 'invert(1)';
    setTimeout(() => { document.body.style.filter = ''; }, 700);

  } else if (chance < 0.14) {
    // Terremoto na página (7%)
    document.body.classList.add('terremoto');
    setTimeout(() => document.body.classList.remove('terremoto'), 600);

  } else if (chance < 0.19) {
    // Texto arco-íris animado por 2.5s (5%)
    resultado.style.textShadow = '';
    resultado.classList.add('arcoiris');
    setTimeout(() => resultado.classList.remove('arcoiris'), 2500);

  } else if (chance < 0.23) {
    // Flash colorido rápido 5x (4%)
    let flashes = 0;
    const blink = setInterval(() => {
      const h = Math.floor(Math.random() * 360);
      document.body.style.background = `hsl(${h}, 90%, 65%)`;
      if (++flashes >= 5) clearInterval(blink);
    }, 120);

  } else if (chance < 0.27) {
    // Brilho neon na máquina (4%)
    aplicarNeonMaquina();
  }
}
