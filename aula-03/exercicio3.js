// Crie um sistema simples para classificar chamados de suporte.
let prioridade = 3; // 1 baixa, 2 média, 3 alta
let sistemaForaDoAr = true;
let tempoEsperaMin = 10;
let categoria = "login"; // login, internet, computador, outro


if (prioridade == 3 || sistemaForaDoAr === true) {
    console.log("Classificação CRITICA")
}
else if (prioridade == 1) {
    console.log("Classificação Normal")
}
else if (tempoEsperaMin >= 30 && prioridade == 2) {
    console.log("Classificação ALTA")
}

else (console.log("EM ANALISE"))


switch (categoria) {
    case "login":
        console.log("redefinir senha e validar usuario")
        break
    case "internet":
        console.log("verificar cabo, WI-FI e roteador")
        break

    case "computador":
        console.log("Reeniciar a máquina e verificar atualizações")
        break

    case "outro":
        console.log("coletar mais informações")
        break

    default:
        console.log("categoria invalida")
}