function numeroimg() {
  return Math.floor(Math.random() * 9);
}
const ni = numeroimg();

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
  ' como',
  ' bola',
  ' Hoje',
  ' Amanha',
  ' Quem',
  ' sabe',
  ' Você',
  ' Não',
  ' é',
  ' a',
  ' poxa',
  ' Que',
  '?',
  ',',
  ' Ontem',
  ' Trinta',
  ' Musica',
  ' Atoa',
  ' Pato',
  ' Vida',
  ' Morte',
  ' Cabra',
  ' Gato',
  ' Bosolanro',
  '.',
  ' Uma',
  ' Mesmo',
  ' Talvez',
];
const f2 = [
  ' Dado',
  ' Baixo',
  ' como',
  ' bola',
  ' Hoje',
  ' Amanha',
  ' Quem',
  ' sabe',
  ' Você',
  ' Não',
  ' é',
  ' a',
  ' poxa',
  ' Que',
  '?',
  ',',
  ' Ontem',
  ' Trinta',
  ' Musica',
  ' Atoa',
  ' Pato',
  ' Vida',
  ' Morte',
  ' Cabra',
  ' Gato',
  ' Bosolanro',
  '.',
  ' Uma',
  ' Mesmo',
  ' Talvez',
];
const f3 = [
  ' Dado',
  ' Baixo',
  ' como',
  ' bola',
  ' Hoje',
  ' Amanha',
  ' Quem',
  ' sabe',
  ' Você',
  ' Não',
  ' é',
  ' a',
  ' poxa',
  ' Que',
  '?',
  ',',
  ' Ontem',
  ' Trinta',
  ' Musica',
  ' Atoa',
  ' Pato',
  ' Vida',
  ' Morte',
  ' Cabra',
  ' Gato',
  ' Bosolanro',
  '.',
  ' Uma',
  ' Mesmo',
  ' Talvez',
];
const f4 = [
  ' Dado',
  ' Baixo',
  ' como',
  ' bola',
  ' Hoje',
  ' Amanha',
  ' Quem',
  ' sabe',
  ' Você',
  ' Não',
  ' é',
  ' a',
  ' poxa',
  ' Que',
  '?',
  ',',
  ' Ontem',
  ' Trinta',
  ' Musica',
  ' Atoa',
  ' Pato',
  ' Vida',
  ' Morte',
  ' Cabra',
  ' Gato',
  ' Bosolanro',
  '.',
  ' Uma',
  ' Mesmo',
  ' Talvez',
];
const f5 = [
  ' Dado',
  ' Baixo',
  ' como',
  ' bola',
  ' Hoje',
  ' Amanha',
  ' Quem',
  ' sabe',
  ' Você',
  ' Não',
  ' é',
  ' a',
  ' poxa',
  ' Que',
  '?',
  ',',
  ' Ontem',
  ' Trinta',
  ' Musica',
  ' Atoa',
  ' Pato',
  ' Vida',
  ' Morte',
  ' Cabra',
  ' Gato',
  ' Bosolanro',
  '.',
  ' Uma',
  ' Mesmo',
  ' Talvez',
];
const f6 = [
  ' Dado',
  ' Baixo',
  ' como',
  ' bola',
  ' Hoje',
  ' Amanha',
  ' Quem',
  ' sabe',
  ' Você',
  ' Não',
  ' é',
  ' a',
  ' poxa',
  ' Que',
  '?',
  ',',
  ' Ontem',
  ' Trinta',
  ' Musica',
  ' Atoa',
  ' Pato',
  ' Vida',
  ' Morte',
  ' Cabra',
  ' Gato',
  ' Bosolanro',
  '.',
  ' Uma',
  ' Mesmo',
  ' Talvez',
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
const imagen = document.querySelector('img');
console.log(imagen);
