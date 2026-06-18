// compra com desconto, frete e forma de pagamento.

let valorCompra = 180;
let temCupom = true;
let ehAlunoSENAI = false;
let formaPagamento = "pix"; // "pix", credito, boleto
let desconto = valorCompra * 0.10;

const DESCONTO_PIX = 0.05
const DESCONTO_BOLETO = 0.02
const FRETE = 20

switch (formaPagamento) {
    case "pix":
        desconto += valorCompra * DESCONTO_PIX
        break;
    case "boleto":
        desconto += valorCompra * DESCONTO_BOLETO

        break

    case "credito":
        break

    default:
        console.log("forma de pagamento invalida");
        break

}

if (valorCompra < 200) {
    valorCompra += FRETE;
}





if (temCupom || ehAlunoSENAI == true) {
    console.log("tem desconto de:R$ " + desconto)
}

let totalpagar = valorCompra - desconto + FRETE

// saida

console.log("valor original:R$ " + valorCompra.toFixed(2));
console.log("desconto aplicado de:R$ " + desconto.toFixed(2))
console.log("frete de:R$ " +   FRETE.toFixed(2))
console.log("total a pagar:R$ " + totalpagar.toFixed(2))