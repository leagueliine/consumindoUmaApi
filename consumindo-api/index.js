async function api (){
  const url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=3"
  let resposta = await fetch(url);
  return resposta.json();
};

async function retirarDuasCartasDoBaralho(deck_id){
const url = `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`;
  let resposta = await fetch(url);
  let resJson = await resposta.json();
  let carta = await resJson.cards;
  document.getElementById('cartaRetirada').src = carta[0].image;
};

async function duasCartas() {
 let baralho = await api();
 let baralhoId = await baralho.deck_id;
 retirarDuasCartasDoBaralho(baralhoId);
};

document.getElementById('botaoRC').addEventListener('click', () => {
duasCartas();
})

duasCartas();

