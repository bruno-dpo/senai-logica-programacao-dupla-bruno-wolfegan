


// variaveis 
let NomeAlunos = ["bruno", "pedro", "luisa", "gabriel"]
let notas = [8.0, 10, 0, 5]
let frequencia = [75, 100, 50, 0] 

let somanotas = 0
// variavel soma notas e media turma
for (let i = 0; i < notas.length; i++) {
    somanotas += notas[i]
}
let mediaTurma = somanotas / notas.length
// menu escolha 
let opcao = 4
switch(opcao){
    
    // nome dos alunos,notas e frequência
    case 1:
        for (let i = 0; i < NomeAlunos.length; i++) {
            console.log(`posição: ${i}`)
            console.log(`nome: ${NomeAlunos[i]}`)
            console.log(`nota: ${notas[i]}`)
            console.log(`frequencia: ${frequencia[i]}`)
            console.log("----------------------")
        }
    break
    // media turma
    case 2:
        console.log(`A media da turma é: ${somanotas}`)
    break
    // mostra reprovado, recuperação e aprovado
    case 3:
        for (let i = 0; i < NomeAlunos.length; i++) {
        console.log("------------------------")
        if (notas[i] >= 7 && frequencia[i] >= 75) {
                console.log(`${NomeAlunos[i]} foi aprovado!`)
                console.log("------------------------")
            } else if (notas[i] >= 5 && notas[i] <= 7 && frequencia[i] >= 75) {
                console.log(`${NomeAlunos[i]} esta de recuperação!`)
                console.log("------------------------")
            } else { 
                console.log(`o ${NomeAlunos[i]} foi reprovado!`)
                console.log("------------------------")
            }
        }
    break
    // resumo da turma
    case 4:
        console.log(`A Turma Tem: ${NomeAlunos.length} alunos`)
        console.log(`Média da Turma: ${mediaTurma}`)
    break


}




