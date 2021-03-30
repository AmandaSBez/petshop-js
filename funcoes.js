let bancoDeDados = require("./dadosPet.json");

let pets = bancoDeDados.pets;

const atenderCliente = (pet, servico) => {
    console.log(`Olá, ${pet.nome}`);
    //servico();
    (servico)? servico() : console.log("só vim dar uma olhadinha");
    console.log('Tchau, até mais!');
}

// const darBanho = () => {
//     pet.servicos.push({
//         'tipoServ':'banho',
//         'data':moment().format('DD-MM-YYYY');
//     });   
//     console.log('dando banho no pet...');
// }

const apararUnhasPet = () => {
    console.log('aparando unhas...');
}

// atenderCliente(pets[0], darBanho);
// console.log("---------------");
// atenderCliente(pets[2]);

let pessoa = {
    nome: 'Iago',
    idade: 25,
    profissao: 'dev',
    contato: '(11)9999-9999',
    habilidades: ['node.js', 'mysql','html']
} 

let {nome, contato} = pessoa;

console.log(`${nome} - ${contato}`);