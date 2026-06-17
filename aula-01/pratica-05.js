const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite sua idade: ", (resposta) => {
    const idade = Number(resposta);

    if (isNaN(idade)) {
        console.log("Digite uma idade válida.");
    } else if (idade >= 18) {
        console.log("Maior de idade");
    } else {
        console.log("Menor de idade");
    }

    rl.close();
});