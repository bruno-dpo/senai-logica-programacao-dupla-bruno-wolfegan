const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o valor da compra: ", (resposta) => {
    const compra = Number(resposta);

    if (isNaN(compra)) {
        console.log("Digite um valor válido.");
    } else if (compra > 150) {
        console.log("Cliente ganhou frete grátis");
    } else {
        console.log("Cliente não ganhou frete grátis");
    }

    rl.close();
});