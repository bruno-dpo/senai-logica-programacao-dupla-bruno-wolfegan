// Sistema de Evento
let idade = 18;
let temIngresso = true;
let ehAlunoSENAI = true;
let horaChegada = 20;
let vagasDisponiveis = 10;
let codigoIngresso = "PADRAO"; // VIP, PADRAO, CONVIDADO


if (vagasDisponiveis == 0) {
    console.log("evento lotado")
} else if (horaChegada > 20) {
    console.log("entrada foi encerrada.")
}

else if (temIngresso == false) {
    console.log("Você não possui um ingresso, precisa comprar.")
}
else if (idade < 14) {
    console.log("entrada negada")


}
else { console.log("Entrada Liberada!") }

switch (codigoIngresso) {
    case "VIP":
        break

    case "PADRAO":
        break

    case "CONVIDADO":
        break

    default:
        console.log("invalido")
}

if (ehAlunoSENAI == true && codigoIngresso == "PADRAO") {
    console.log("Você tem direito a um desconto")
}

console.log(idade, codigoIngresso)


