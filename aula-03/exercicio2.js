// compra com desconto, frete e forma de pagamento.

let valorCompra = 180;
let temCupom = true;
let ehAlunoSENAI = false;
let formaPagamento = "pix"; // "pix", credito, boleto
let desconto = valorCompra * 0.10

const descontoPIX = 0.05
const descontoBOLETO = 0.02
const frete = 20

if(temCupom || ehAlunoSENAI == true)
    console.log("tem desconto de: " + desconto + "R$")

switch(formaPagamento){
case"pix":
    desconto += valorCompra * descontoPIX 
    break;
}