const maqui = document.querySelector('img');
maqui.addEventListener('click', total);
total();
function total() {
  function numeroradom() {
    return Math.floor(Math.random() * 29);
  }
  const n1 = numeroradom();

  function numeroradom() {
    return Math.floor(Math.random() * 29);
  }
  const n2 = numeroradom();

  function numeroradom() {
    return Math.floor(Math.random() * 29);
  }
  const n3 = numeroradom();

  function numeroradom() {
    return Math.floor(Math.random() * 29);
  }
  const n4 = numeroradom();

  function numeroradom() {
    return Math.floor(Math.random() * 29);
  }
  const n5 = numeroradom();

  function numeroradom() {
    return Math.floor(Math.random() * 29);
  }
  const n6 = numeroradom();

  const f1 = [
    ' Dado',
    ' Baixo',
    ' Como',
    ' Bola',
    ' Hoje',
    ' Amanha',
    ' Procurar',
    ' Cativeiro',
    ' Você',
    ' Bombeiros',
    ' Crescente',
    ' Tesouro',
    ' Porque',
    ' Social  ',
    ' Matemática',
    ' Milho',
    ' Ontem',
    ' Trinta',
    ' Musica',
    ' Atoa',
    ' Pato',
    ' Vida',
    ' Morte',
    ' Pato',
    ' Gato',
    ' Bosolanro',
    ' Fruta',
    ' Pena',
    ' Mesmo',
    ' Talvez',
  ];
  const f2 = [
    ' é',
    ' ,',
    ' eita',
    ' seria',
    ' quem',
    ' da',
    ' do',
    ' sim',
    ' vez',
    ' não',
    ' e',
    ' a',
    ' poxa',
    ' qual',
    ' que',
    ' isso',
    ' Pato',
    ' eu',
    ' tenha',
    ' faz',
    ' fez',
    ' para',
    ' por',
    ' vish',
    ' eita',
    ' tipo',
    ' dose',
    ' uma',
    ' mesmo',
    ' talvez',
  ];
  const f3 = [
    ' fugir',
    ' pneus',
    ' orquestra',
    ' cultura',
    ' bazuca',
    ' humano',
    ' quem',
    ' pacotes',
    ' carta',
    ' triplo',
    ' link',
    ' desligar',
    ' apertado',
    ' escolta',
    ' traseiro',
    ' tornado',
    ' laranja',
    ' cinquenta',
    ' Lula',
    ' cenoura',
    ' dividir',
    ' anedota',
    ' carro',
    ' ecologista',
    ' Pato',
    ' aventura',
    ' debate',
    ' agudo',
    ' equipamento',
    ' utilidade',
  ];
  const f4 = [
    ' é',
    ' ,',
    ' eita',
    ' seria',
    ' quem',
    ' da',
    ' do',
    ' sim',
    ' vez',
    ' não',
    ' e',
    ' a',
    ' poxa',
    ' qual',
    ' que',
    ' iss',
    ' talvez',
    ' eu',
    ' tenha',
    ' faz',
    ' fez',
    ' para',
    ' por',
    ' vish',
    ' eita',
    ' outro',
    ' dose',
    ' uma',
    ' mesmo',
    ' Pato',
  ];
  const f5 = [
    ' girassol',
    ' consoantes',
    ' leite',
    ' montanha',
    ' triste',
    ' feliz',
    ' dez',
    ' derrama',
    ' praga',
    ' senta',
    ' girafa',
    ' ,',
    ' carteira',
    ' resumo',
    ' Pato',
    ' peso',
    ' manunteção',
    ' grupo',
    ' patamar',
    ' cerveja',
    ' mar',
    ' skate',
    ' boboleta',
    ' barraco',
    ' tijolo',
    ' coração',
    ' eclipse',
    ' sorrir',
    ' vera',
    ' virada',
  ];
  const f6 = [
    ' ?',
    ' !',
    ' torneio.',
    ' tomou.',
    ' Pato.',
    ' ocupado.',
    ' visita.',
    ' olho.',
    ' lagoa.',
    ' bengala.',
    ' baixo.',
    ' cubo.',
    ' corre.',
    ' cubo.',
    '?',
    '.',
    '!!',
    '...',
    ' quebra.',
    ' ei!',
    ' banco.',
    ' malote.',
    ' briga.',
    ' Matuê.',
    ' irmão.',
    ' rum.',
    ' lancha.',
    ' bem.',
    ' mal.',
    ' filme.',
  ];
  const fra = f1[n1];
  const fre = f2[n2];
  const fri = f3[n3];
  const fro = f4[n4];
  const fru = f5[n5];
  const frao = f6[n6];

  const far = document.querySelector('img');

  far.addEventListener('click', semnome);
  function semnome() {
    const fa = document.querySelector('.sub-titulo');
    fa.innerHTML = fra + fre + fri + fro + fru + frao;
  }

  far.addEventListener('click', numeroimg);

  function numeroimg() {
    return Math.floor(Math.random() * 9);
  }
  const ni = numeroimg();

  far.addEventListener('click', troca);
  function troca() {
    const imagen = (document.querySelector('img').src =
      'img/maqui' + ni + '.png');
  }
}
