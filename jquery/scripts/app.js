$(document).ready(function() {
  obtenerRadios();
  resetearColorNegro(3);
});

function obtenerRadios() {
  var radios = $('input[type="radio"][name="color"]');
  // Old school
  // for(var i=0; i<radios.length; i++) {
  //   $(radios[i]).click(eventoPaCuandoHagaClick);
  // }

  // New age
    radios.toArray().forEach(function(radio) {
      jQuery(radio).click(eventoPaCuandoHagaClick);
      // $(radio).click(eventoPaCuandoHagaClick);
    });

  // other
  // for(var radio in radios){
  //   $(radios[parseInt(radio)]).click(eventoPaCuandoHagaClick);
  // }
}

function eventoPaCuandoHagaClick(evt) {
  var newColor = $(this).val();
  cambiarColor(newColor);
}

function cambiarColor(nuevoColor) {
  $('body').css('background-color', nuevoColor);
}

function resetearColorNegro(segundos) {
  var body = $('body');
  setInterval(reseteaYa, segundos * 1000);

  function reseteaYa(){
    body.attr('style','');
    body.addClass('whiteBackground');
  }
}
