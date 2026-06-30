class Carro {
    marca: string ;
    modelo: string;
    ano: number;

    constructor (marca: string , modelo:string , ano: number){

        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    ExibirDetalhes() : void {
        console.log(`${this.marca} ${this.modelo} - ${this.ano}`);
    }
}

let carros = new Carro ("BYD" , "Dolphin" , 2021);
carros.ExibirDetalhes();