
/**Banner - Presentación */

/**Linea de Teimpo Experiencia */


let leerMas_btns = document.querySelectorAll('.leerMas_btn');

leerMas_btns.forEach(function(leerMas_btn) {
  leerMas_btn.addEventListener('click', toggleText);
});

function toggleText(event) {
  let hideText = document.getElementById(`hideText_${event.target.id.split('_')[2]}`);
  hideText.classList.toggle('showText');
  
  if (hideText.classList.contains('showText')) {
    event.target.innerHTML = 'Leer menos';
  } else {
    event.target.innerHTML = 'Leer más';
  }
}


/**Script para precarga eskeleton 

let cardContent=document.querySelector('.card-content');
let cardLoading=document.querySelector('.card-loading');

function insertText(){

cardLoading.forEach{
  contenedorAvatar =>{
    contenedorAvatar.innerHTML=cardContent.innerHTML;
  }
}
}

setTimeout(insertText, 3000);
*/

/*let leerMas_btn=document.getElementById('leerMas_btn');
let hideText=document.getElementById('hideText');

leerMas_btn.addEventListener('click', toggleText);

function toggleText() {
    hideText.classList.toggle('showText');
    if(hideText.classList.contains('showText')) {
        leerMas_btn.innerHTML = 'Leer menos'
      }
      else {
        leerMas_btn.innerHTML = 'Leer más'
      }
}*/