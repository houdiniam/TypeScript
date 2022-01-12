"use strict";
//string
let nome = 'joão';
console.log(nome);
// nome = 28
//compilador entende o tipo na atribuição da variavel
//numbers
let idade = 27;
// idade = 'aan'
idade = 27.5;
//js não diferencia inteiros ou flutuantes
console.log(idade);
// boolean
let possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
//tipos explicidos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'idade é 27' 
// console.log(typeof minhaIdade)
//arrys e tipos
let hobbies = ["Cozinhar", "Praticar esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200];
console.log(hobbies);
//tuplas em ts é um array de uma quantidade predefinida de tipos
let endereco = ["Av Principal", 99, ''];
console.log(endereco);
endereco = ["Rua importante", 1260, ''];
console.log(endereco);
//enums - enumerações, estruturas com valores pré definidos
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
//any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
