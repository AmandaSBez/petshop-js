const moment = require('moment'); // require

const fs = require('fs');
let bancoDados = fs.readFileSync('./dadosPet.json');
bancoDados = JSON.parse(bancoDados);

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

// let adicionarPet = () => {
//     let pet =
//         {
//             nome: 'Perna-longa',
//             tipo: 'coelho',
//             idade: 2,
//             raca: 'Mini Holandês',
//             peso: 2,
//             tutor: 'Maria',
//             contato: '(81) 99685-8709',
//             vacinado: false,
//             servicos: [
//                 {tipoServ:'corte de unhas', data:'3-10-2021'}
//             ]    
//         };
    //BASICAMENTE VOCE TA ADD UM OBJETO NO ARQUIVO JSON, O QUE EH O CORRETO
    //PORQUE ARQUIVOS JSON SAO ARQUIVOS QUE LISTAM OBJETOS, ENTAO NAO PRECISA DO STRINGFY

    // bancoDados.pets.push(pet);
    //console.log(pets); //LISTANDO ESTILO JSON
//}
//adicionarPet();

const atualizarBanco = () => {
    //conversao de objeto javascript para JSON
    let petsAtualizado = JSON.stringify(bancoDados);
    //atualização do arquivo dadosPet.json
    fs.writeFileSync('dadosPet.json', petsAtualizado, 'utf-8');
}

const listarPets = () => {
    for(let pet of bancoDados.pets){
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca},`); //lembrar da crase
        
        // for(const servico of pet.servicos){
        //     console.log(`${servico.data} - ${servico.tipoServ}`);
        // }

        (pet.vacinado) ? console.log("vacinado;\n") : console.log("não vacinado;\n");
    }
}

listarPets(); // LISTANDO BONITINHO

const adicionarPet = novoPet => {
    bancoDados.pets.push(novoPet);
    atualizarBanco();
    console.log(`${novoPet.nome} foi adicionado com sucesso!`);
}

adicionarPet({
    "nome": "Miau",
    "tipo": "gato",
    "idade": 1,
    "raca": "Siamês",
    "peso": 2,
    "tutor": "Magali",
    "contato": "(81) 9374-7109",
    "vacinado": true,
    "servicos": []    
});

const darBanho = (pet) => {
    let servico = { 
        tipoServ: 'Banho',
        data: moment().format('DD-MM-YYYY')
    };
    pet.servicos.push(servico);
    console.log(`${servico.data} : dando banho no pet...`);
}

const tosarPet = (pet) => {
    let servico = { 
        tipoServ: 'tosar',
        data: moment().format('DD-MM-YYYY')
    };
    pet.servicos.push(servico); 

    console.log(`${servico.data} : ${pet.nome} está com o cabelinho na régua!`);
}

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

const atenderCliente = (pet, funcao) => {
    console.log(`\nAtendendo ${pet.nome}`)
    funcao(pet);
    console.log("Fim do atendimento");
}

//atenderCliente(bancoDados.pets[1], darBanho);
//console.log(bancoDados.pets[1].servicos);

// const vacinarPets = (pet) => {
    
//         if(pet.vacinado == false)
//         {
//             pet.vacinado = true;
//             console.log(`\n${pet.nome} foi vacinado com sucesso!`);
//         }
//         else
//             console.log(`\nOpa, ${pet.nome} foi Vacinado`);
// }

// vacinarPets(bancoDados.pets[2]);

// const campanhaVacina = () => {
   
//     let i=0;
//     for(let pet of bancoDados.pets)
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

// darBanhoPet(bancoDados.pets[3]);


// for(let pet of bancoDados.pets)
// {
//     console.log(pet.servicos);
// }


//FUNCAO DE PESQUISA DE ANGELO!
// const vacinarPet = (petNome) => {
//     let pet = bancoDados.pets.find(findPet => findPet.nome == petNome); // Function para pesquisar pelo nome do pet no array.
//     if(pet.vacinado == false){
//         pet.vacinado = true;
//         console.log(`\n\n${pet.nome} foi vacinado com sucesso!`);
//     }
//     else{
//          console.log(`\n\nOps, ${pet.nome} já está vacinado!`);
//     };
// };

// vacinarPet(petNome = 'Orion');

//Mostrar com seria em JSON:

//let testeJson = JSON.stringify(pets);
//console.log(testeJson);
//console.log(bancoDados.pets[1]);
