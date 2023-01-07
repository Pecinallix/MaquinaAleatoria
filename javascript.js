const imagens = document.querySelectorAll('img');
console.log(imagens);
numeroradom();
function numeroradom() {
  return Math.floor(Math.random() * 29);
}
const numero = numeroradom();
const frase = [
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
  ' Uva',
  ' Mesmo',
  ' Talvez',
];
console.log(frase[numero]);
