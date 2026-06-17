let nome_aluno = "tiago padilha"
let nota1 = 0
let nota2 = 10
let frequencia = 80
let atividades_entregues = true
let esta_bloqueado = true

let soma = nota1 + nota2
let media = soma / 2

const aprovado = media >= 6 && frequencia >= 75
const aprovadoDestaque = media >= 9 && frequencia >= 60

console.log("Nome: " + nome_aluno + " sua media é ")
console.log("sua media é: " + media)
console.log("Sua frequencia é: " + frequencia)
console.log(`atividades entregues: ${atividades_entregues ? "Sim" : "Não"}`)

if (esta_bloqueado) {
    console.log("Situação final: Reprovado")
} else if (aprovado) {
    console.log("Situação final: aprovado")
} else
    console.log("Situação final: aprovado por Destaque")
