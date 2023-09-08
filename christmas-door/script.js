const frontDoor = document.getElementById('front-door')
const insideDoor = document.querySelector('.inside-door')
const santaWelcome = document.getElementById('santaWelcome')

let isOpen = true

function onClickDoor(e) {
  const target = e.target
  const itemDoor = insideDoor.querySelector('.item-door')

  if (isOpen) {
    if (target.id === 'doorOpen') {
      document.getElementById(target.id).classList.add('door-open')
      itemDoor.classList.add('diplayNone')
      itemDoor.classList.add('scale-up-left')
      itemDoor.classList.remove('scale-down-left')
      santaWelcome.play()
    }
    isOpen = false
  } else {
    if (target.id === 'doorOpen') {
      document.getElementById(target.id).classList.remove('door-open')
      itemDoor.classList.remove('scale-up-left')
      itemDoor.classList.add('scale-down-left')
      setTimeout(function () {
        itemDoor.classList.remove('diplayNone')
        itemDoor.classList.remove('scale-down-left')
      }, 800)
      santaWelcome.pause()
      santaWelcome.currentTime = 0
    }
    isOpen = true
  }
}

frontDoor.addEventListener('click', onClickDoor)
