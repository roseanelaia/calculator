alert("Olá, iremos fazer contas básicas, preciso que você insira dois números a seguir!")

let numberOne = prompt("Digite o primeiro número:")

let numberTwo = prompt("Digite o segundo número:")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi= numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert(`A soma dos valores é: ${sum}`)
alert(`A subtração dos valores é: ${sub}`)
alert(`A multiplicação dos valores é: ${multi}`)
alert(`A divisão dos valores é: ${div}`)
alert(`A o resto da divisão dos valores é: ${restDiv}`)

if (sum % 2 == 0) {
  alert("A soma dos valores é par")
} else {
  alert("A soma dos valores é impar")
}

if (numberOne == numberTwo) {
  alert("Os números digitados são iguais")
} else {
  alert("Os números digitados são diferentes")
}


