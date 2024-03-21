const textInput = document.getElementById('textInput')
const btn = document.getElementById('btn')
const charCount = document.getElementById('charCount')
const limit = document.getElementById('limit')

const charLimit = 150
let textAreaLength

function onClikcButton() {
  textAreaLength = textInput.value.length
  let charLeft = charLimit - textAreaLength

  if (textAreaLength > 0) {
    alert('You have written ' + textAreaLength + ' characters, you only have ' + charLeft + ' remaining characters')
    textInput.value = ''
    charCount.textContent = 0
    charCount.style.color = 'black'
    limit.style.color = 'black'
  } else {
    alert('The text area is empty')
  }
}

function onInput() {
  textAreaLength = textInput.value.length
  charCount.textContent = textAreaLength
  if (textAreaLength / 9 >= 15) {
    // if it reached 135 characters turn to yellow
    charCount.style.color = '#F0C904'
    // if it reached over 150 characters turn to crimson
    if (textAreaLength >= charLimit) {
      charCount.style.color = '#c23b22'
    }

    if (textAreaLength >= charLimit) {
      limit.style.color = '#c23b22'
    } else {
      limit.style.color = 'black'
    }
  } else {
    charCount.style.color = 'black'
  }
}
textInput.oninput = onInput
btn.onclick = onClikcButton
