function showAlert(message) {
  alert(message || 'Default message');
}
// This is the same
// var showAlert = function(message) {
//   alert(message);
// }

// Add event listener to button

var actionAlert = function() {
  var input = document.getElementById('alertText');
  showAlert(input.value);
}

document.addEventListener("DOMContentLoaded", function(event) {
  var button = document.getElementById('showAlert');
  button.addEventListener('click', actionAlert);
});
