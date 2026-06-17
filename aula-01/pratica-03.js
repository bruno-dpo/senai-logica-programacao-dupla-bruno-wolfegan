const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número: ", (resposta) => {
    const numero = Number(resposta);

    if (isNaN(numero)) {
        console.log("Por favor, digite um número válido.");
    } else if (numero % 2 === 0) {
        console.log("O número é par");
    } else {
        console.log("O número é ímpar");
    }

    rl.close();
});