const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite seu nome: ", (nome) => {
  rl.question("Digite seu peso (kg): ", (pesoStr) => {
    rl.question("Digite sua altura (m): ", (alturaStr) => {
      const peso = parseFloat(pesoStr.replace(",", "."));
      const altura = parseFloat(alturaStr.replace(",", "."));
      const imc = peso / (altura * altura);

      function classificarIMC(imc) {
        if (imc < 18.5) return "Abaixo do peso";
        else if (imc < 25.0) return "Peso normal";
        else if (imc < 30.0) return "Sobrepeso";
        else if (imc < 35.0) return "Obesidade Grau I";
        else if (imc < 40.0) return "Obesidade Grau II";
        else return "Obesidade Grau III (Mórbida)";
      }

      console.log("\n========================================");
      console.log("       RESULTADO DA AVALIAÇÃO DE IMC    ");
      console.log("========================================");
      console.log(`Nome:           ${nome}`);
      console.log(`Peso:           ${peso} kg`);
      console.log(`Altura:         ${altura} m`);
      console.log(`IMC:            ${imc.toFixed(2)}`);
      console.log(`Classificação:  ${classificarIMC(imc)}`);
      console.log("========================================");

      rl.close();
    });
  });
});