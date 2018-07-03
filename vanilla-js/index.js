//using a callback here with arrow function as no this is required

playSound = e => {
  let audio = window.document.querySelector(`audio[data-key="${e.keyCode}"]`)
  let key = window.document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (audio === null) {
    return
  }

  audio.currentTime = 0
  audio.play()
  key.classList.add('playing')
}

//this is not available in a arraow function

function removeKeyTransition(e) {
  this.classList.remove('playing')
}

window.addEventListener('keydown', playSound)

const keys = window.document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeKeyTransition))
