
class aluno {
    nome: string;
    nota1: number;
    nota2: number;

    constructor(nome: string, nota1: number, nota2: number) {
        this.nome = nome,
            this.nota1 = nota1,
            this.nota2 = nota2
    }

    calcularMedia(): number {
        return (this.nota1 + this.nota2) / 2
    }

    verificarSituacao(): string {
        if (this.calcularMedia() >= 6) {
            return "aluno aprovado!"

        }
        else {
            return "aluno reprovado!"
        }
    }

    exibirsituacao(): void {
        console.log("-----------------------------------")
        console.log("nome: " , this.nome)
        console.log("media: ", this.calcularMedia())
        console.log("Situação: ", this.verificarSituacao())
    }
}

let aluno1 = new aluno("breno", 10, 0)
let aluno2 = new aluno("adriana", 10, 6)
let aluno3 = new aluno("luisa", 10, 10)

aluno1.exibirsituacao();

aluno2.exibirsituacao();

aluno3.exibirsituacao();