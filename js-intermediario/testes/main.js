//  const arrei = [1, 2, 3, 4, 5, 6]

//  arrei.forEach((item) => console.log(item *2 ))

//  var divisao = arrei.forEach((item) => console.log(item / 7) )


let input = document.getElementById('input-item');
let items = document.getElementById('itens-inseridos')

function adicionarItem () {
  let textoDigitado = input.value;
console.log(textoDigitado)
  items.innerHTML += `<p>${textoDigitado}</p>`
};