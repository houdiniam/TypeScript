//string
let nome: string = 'joão'
console.log(nome)
// nome = 28
//compilador entende o tipo na atribuição da variavel

//numbers
let idade: number = 27
// idade = 'aan'
idade = 27.5
//js não diferencia inteiros ou flutuantes
console.log(idade)

// boolean
let possuiHobbies: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies)

//tipos explicidos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
// minhaIdade = 'idade é 27' 
// console.log(typeof minhaIdade)

//arrys e tipos
let hobbies: any[] = [ "Cozinhar", "Praticar esportes" ]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200]
console.log(hobbies)

//tuplas em ts é um array de uma quantidade predefinida de tipos
let endereco: [string, number, string] = ["Av Principal", 99, '']
console.log(endereco)
endereco = ["Rua importante", 1260, '']
console.log(endereco)

//enums - enumerações, estruturas com valores pré definidos
enum Cor {
    Cinza,//0
    Verde = 100,//1
    Azul = 10, //2
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)

//any
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019}
console.log(carro)