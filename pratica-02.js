const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a nota: ", (resposta) => {
    const nota = Number(resposta);

    if (isNaN(nota)) {
        console.log("Digite uma nota válida.");
    } else if (nota >= 6) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }

    rl.close();
});