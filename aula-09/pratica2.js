let produto = {
    nome: "Mesa" ,
    preco: 140 ,
    quantidade: 1 , 
    
    CalcularTotal: function() {
        return this.preco * this.quantidade
    }
} ; 

console.log(produto.CalcularTotal());



