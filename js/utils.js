//funções

//Mostra se é ou não um número (se for string ou se estiver vazio), função de verificação
export function notANumber(value) {
  return isNaN(value) || value == ""
}

//cálculo do IMC
export function calculateIMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}