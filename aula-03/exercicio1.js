// entrada de uma pessoa em um sistema ou laboratorio

let idade = 11
let temCadastro = false
let temResponsavel = false
let bloqueado = false

if (bloqueado == true) {
    console.log("Acesso negado!: usuario bloqueado")
}
else if (!temCadastro) {
    console.log("Acesso negado!: cadastro necessario")
}
else if (idade >= 18 && temCadastro) {
    console.log("Acesso Liberado!")
}
else if (idade < 18 && temCadastro && temResponsavel) {
    console.log("Acesso liberado com responsavel")
}
else {
    console.log("Acesso negado")
}