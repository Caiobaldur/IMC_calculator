import {modal} from '/js/modal.js'
import {alertError} from '/js/alert-error.js'
import {calculateIMC, notANumber} from '/js/utils.js'

// variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


// const modalWrapper = document.querySelector('.modal-wrapper')
// const modalMessage = document.querySelector('.modal .title span')
// const modalBtnClose = document.querySelector('.modal button.close')



form.onsubmit = event => {
	event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value 

  //variável para mostrar alerta
  const weightOrHeigthIsNotANumber = notANumber(weight) || notANumber(height)

  if(weightOrHeigthIsNotANumber) {
    alertError.open()
    return;
  }

  alertError.close()

  const result = calculateIMC(weight, height)
  // const message = `Seu IMC é de ${result}`

  // Modal.message.innerText = message
  // Modal.open() 
  displayResultMessage(result)
}

//Fechar janela de erro ao digitar
inputWeight.onclick = () => alertError.close()
inputHeight.onclick = () => alertError.close()


function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}
