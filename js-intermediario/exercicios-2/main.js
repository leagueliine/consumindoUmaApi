let botaoVoltar = document.getElementById('setaVoltar');
let botaoAvancar = document.getElementById('setaAvancar');
let slide = document.getElementsByClassName('slide');
let selecionado = document.querySelector('.selecionado');
//contador
let idx = 0;


botaoAvancar.addEventListener('click', () => {
  if(idx === slide.length -1) return;

  slide[idx].classList.remove('selecionado');
  idx++;
  slide[idx].classList.add('selecionado');
  opacidadeSeta()
  });

botaoVoltar.addEventListener('click', () => {
  if(idx === 0) return;
  
  slide[idx].classList.remove('selecionado');
  idx--;
  slide[idx].classList.add('selecionado');
  opacidadeSeta()
  });


  function opacidadeSeta(){
    const notFirst = idx !== 0;
    if(notFirst){
      botaoVoltar.classList.remove('opacidade');
    }else{
      botaoVoltar.classList.add('opacidade');
    }

    const isLast = idx !== 0 && idx === slide.length -1;

    if(isLast){
      botaoAvancar.classList.add('opacidade');
    }else{
      botaoAvancar.classList.remove('opacidade');
    }
   
  }


