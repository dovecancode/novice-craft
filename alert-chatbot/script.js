var chatBtn = document.getElementById('chatBtn')

chatBtn.onclick = chat

function chat() {
  alert('Hello')
  // Ask user for thier name
  var yourName = prompt('What is your name')
  alert('Hello, ' + yourName)

  var food = prompt('what is your favorite food')
  alert('I like ' + food + ' too!')

  var shareFood = confirm('Tara lets it')

  if (shareFood) {
    alert('Thanks')
  } else {
    alert('see you next')
  }
}
