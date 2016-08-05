var eventoPaCuandoCargue = function () {
  console.log('Ya cargo 1');
  setTimeout(function(){
    console.log('holi, perame que me voy a tardar');
  }, 5000);
  segundoEventoPaCuandoCargue();
}

function segundoEventoPaCuandoCargue() {
  console.log('Ya cargo 2');

}

// Wait for page to load content
$(document).ready(eventoPaCuandoCargue);
