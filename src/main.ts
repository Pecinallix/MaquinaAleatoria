import '../style.css';

// ── Dados ────────────────────────────────────────────────────────────────────

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

// ── Elementos DOM ─────────────────────────────────────────────────────────────

const maquina = document.getElementById('maquina') as HTMLImageElement;
const resultado = document.getElementById('resultado') as HTMLElement;
const contadorEl = document.querySelector('.contador') as HTMLElement;

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
}

// ── Funções ───────────────────────────────────────────────────────────────────

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

  resultado.textContent = selecionadas.join(' ');
  resultado.style.fontSize = (Math.random() * 1.6 + 1.1).toFixed(2) + 'rem';
  resultado.style.letterSpacing = Math.floor(Math.random() * 7) + 'px';
  resultado.style.fontWeight = Math.random() > 0.4 ? '800' : '400';

  resultado.classList.remove('fade-in');
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
}

function trocarBackground(): void {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 30 + 65); // 65–95%
  const l = Math.floor(Math.random() * 25 + 55); // 55–80%
  document.body.style.background = `hsl(${h}, ${s}%, ${l}%)`;
}
