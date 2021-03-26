const moment = require('moment'); // require
const bancoDados = require('./dadosPet.json');
let pets = bancoDados.pets;

const nomePetshp = 'Petshop Avanade';

// let pets = [
//     {
//         nome: 'Orion',
//         tipo: 'cachorro',
//         idade: 5,
//         raca: 'Pastor Australiano',
//         peso: 10,
//         tutor: 'Tom',
//         contato: '(81) 98746-0809',
//         vacinado: true,
//         servicos: [
//             {tipoServ:'banho', data:'2-22-2021'},
//             {tipoServ:'tosa', data:'1-30-2021'}
//         ]    
//     },
//     {
//         nome: 'Scooby-Doo',
//         tipo: 'cachorro',
//         idade: 3,
//         raca: 'Dogue Alemão',
//         peso: 50,
//         tutor: 'Salsicha',
//         contato: '(11) 95670-1029',
//         vacinado: false,
//         servicos: [
//             {tipoServ:'banho', data: '2-20-2021'}
//         ]    
//     },
//     {
//         nome: 'Salem',
//         tipo: 'gato',
//         idade: 10,
//         raca: 'Vira-Lata',
//         peso: 2.5,
//         tutor: 'Sabrina',
//         contato: '(81) 97597-5257',
//         vacinado: false,
//         servicos: [
//             {tipoServ:'banho', data:'3-20-2021'},
//             {tipoServ: 'corte de unhas', data:'1-20-2021'}
//         ]    
//     }
// ];

//Usando Arrow Functions:

let adicionarPet = () => {
    let pet =
        {
            nome: 'Perna-longa',
            tipo: 'coelho',
            idade: 2,
            raca: 'Mini Holandês',
            peso: 2,
            tutor: 'Maria',
            contato: '(81) 99685-8709',
            vacinado: false,
            servicos: [
                {tipoServ:'corte de unhas', data:'3-10-2021'}
            ]    
        };

    pets.push(bancoDados.pets);
}

adicionarPet();

// const listarPets = () => {
//     for(let pet of pets){
//         //console.log(pets[i].nome);
//         console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca};`); //lembrar da crase
//     }
// }

// listarPets();

// const vacinarPets = (pet) => {
    
//         if(pet.vacinado == false)
//         {
//             pet.vacinado = true;
//             console.log(`\n${pet.nome} foi vacinado com sucesso!`);
//         }
//         else
//             console.log(`\nOpa, ${pet.nome} foi Vacinado`);
// }

// vacinarPets(pets[2]);

// const campanhaVacina = () => {
   
//     let i=0;
//     for(let pet of pets)
//     {
//         if(pet.vacinado == false)
//         {
//             pet.vacinado = true;
//             i++;         
//         }
//     }
    
//     console.log(`\n${i} pets foram vacinados nessa campanha!`);
// }

// campanhaVacina();

// const darBanhoPet = (pet) => {
//     pet.servicos.push('banho');
//     console.log(`\n${pet.nome} está de banho tomado!`);
// }

// darBanhoPet(pets[3]);

// const tosarPet = (pet) => {
//     pet.servicos.push('tosar');
//     console.log(`\n${pet.nome} está com o cabelinho na régua!`);
// }

// tosarPet(pets[1]);

const apararUnhasPet = (pet) => {
    //const now = new Date();
   
    let servico = { 
        tipoServ: 'corte de unhas',
        data: moment().format('DD-MM-YYYY')
     //   data: `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`
       
    };
     pet.servicos.push(servico);  
  // console.log(`\n${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} : ${pet.nome} está de unhas aparadas!`);   
    console.log(`${servico.data} : ${pet.nome} está de unhas aparadas!`);
}

apararUnhasPet(pets[2]);

// for(let pet of pets)
// {
//     console.log(pet.servicos);
// }


//FUNCAO DE PESQUISA DE ANGELO!
const vacinarPet = (petNome) => {
    let pet = pets.find(findPet => findPet.nome == petNome); // Function para pesquisar pelo nome do pet no array.
    if(pet.vacinado == false){
        pet.vacinado = true;
        console.log(`\n\n${pet.nome} foi vacinado com sucesso!`);
    }
    else{
         console.log(`\n\nOps, ${pet.nome} já está vacinado!`);
    };
};

vacinarPet(petNome = 'Orion');

//Mostrar com seria em JSON:

//let testeJson = JSON.stringify(pets);
//console.log(testeJson);
console.log(bancoDados.pets[1]);
