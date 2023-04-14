import { Modal } from "./modal.js";
import { alertError } from "./alert-error.js";
import { calculateIMC, notANumber } from "./utils.js";

// variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

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
