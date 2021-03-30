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
    bancoDados.pets.forEach((pet) => {
        let {nome, idade, tipo, raca, vacinado} = pet; //Desconstruir array usa [] e objeto {}
        
        console.log(`\n${nome}, ${idade}, ${tipo}, ${raca},`);
        (vacinado) ? console.log("vacinado.") : console.log("não vacinado.");
       
        pet.servicos.forEach((servico) => {
            console.log(`${servico.data} : ${servico.tipoServ}`);
        })
    })
}

const adicionarPet = (...novosPets) => {
    novosPets.forEach((novoPet) => {
        bancoDados.pets.push(novoPet);
    })

    atualizarBanco();
    novosPets.forEach((novoPet) => {
        console.log(`${novoPet.nome} foi adicionado com sucesso!`); //TA DANDO UNDEFINED!
    })
}

const buscarPet = (nomepet) => {
    let petEncontrado = bancoDados.pets.find((pet) => {
        return pet.nome == nomepet;
    });
    return petEncontrado ? petEncontrado : `Não tem pet com o nome ${pet} no sistema`;
}

const filtrarTipoPet = (tipoPet) => {
    let petsEncontrados = bancoDados.pets.filter((pet) => {
        return pet.tipo == tipoPet;
    });
    return petsEncontrados;
}

const darBanho = (pet) => {
    pet.servicos.push({ 
        tipoServ: 'banho',
        data: moment().format('DD-MM-YYYY')
    });
    
    atualizarBanco();
    console.log(`${pet.servicos.data} : dando banho no pet...`);
}

const tosarPet = (pet) => {
    pet.servicos.push({ 
        tipoServ: 'tosar',
        data: moment().format('DD-MM-YYYY')
    });
     
    atualizarBanco();
    console.log(`${pet.servicos.data} : ${pet.nome} está com o cabelinho na régua!`);
}

const apararUnhasPet = (pet) => {
    let dataHoje = moment().format('DD-MM-YYYY');
    pet.servicos.push({ 
        tipoServ: 'corte de unhas',
        data: dataHoje    
    });
    atualizarBanco();  
    console.log(`${dataHoje} : ${pet.nome} está de unhas aparadas!`);
}

const atenderCliente = (pet, funcao) => {
    console.log(`\nAtendendo ${pet.nome}`)
    funcao(pet);
    console.log("Fim do atendimento");
}

const clientePremium = (pet) => {
    let {nome} = pet;
    let nServ = pet.servicos.length;

    if(nServ > 3)
        console.log(`Olá, ${nome}! Você ganhou um descontão!`);
    else
        console.log(`Olá, ${nome}, você ainda não tem descontos disponíveis!`);
}

const contatoTutor = (pet) => {
    let {nome, tutor, contato} = pet;

    return `Tutor: ${tutor}
            Contato: ${contato}
            Pet: ${nome}`;
}

const filtrarTutor = (nomeTutor) => {
    let petsTutor = bancoDados.pets.filter((pet) => {
        return pet.tutor == nomeTutor;
    });
    console.log(`Pets do Tutor ${nomeTutor}:`)
    petsTutor.forEach((pet) => {
        console.log(`${pet.nome} - ${pet.tipo}`);
    })
}

const vacinarPets = (pet) => {
    
        if(!pet.vacinado)
        {
            pet.vacinado = true;
            atualizarBanco();
            console.log(`\n${pet.nome} foi vacinado com sucesso!`);
        }
        else
            console.log(`\nOpa, ${pet.nome} já foi Vacinado`);
}

const campanhaVacina = () => {
    console.log("Campanha de vacina 2021");
    console.log("vacinando...");

    let i = 0;
    bancoDados.pets = bancoDados.pets.map((pet) => {
    
        if(!pet.vacinado) 
        {
            vacinarPets(pet);
           i++;         
        }
        return pet;
    });
    atualizarBanco();
    console.log(`\n${i} pets foram vacinados nessa campanha!`);
}

adicionarPet([{
    "nome": "Bolinha",
    "tipo": "gato",
    "idade": 1,
    "raca": "vira-lata",
    "peso": 3,
    "tutor": "Tom",
    "contato": "(81) 9374-7109",
    "vacinado": true,
    "servicos": []    
},
{
    "nome": "Bidu",
    "tipo": "cachorro",
    "idade": 10,
    "raca": "schnauzer",
    "peso": 5,
    "tutor": "Monica",
    "contato": "(81) 8888-8989",
    "vacinado": true,
    "servicos": []     
}]);
//atenderCliente(bancoDados.pets[4], apararUnhasPet);
//console.log(bancoDados.pets[4].servicos);
//vacinarPets(bancoDados.pets[2]);
//listarPets(); // LISTANDO BONITINHO
//campanhaVacina();
//console.log(buscarPet('Orion'));
//console.log(filtrarTipoPet('cachorro'));
//clientePremium(bancoDados.pets[4]);
//console.log(contatoTutor(bancoDados.pets[0]));
//filtrarTutor('Tom');



// const darBanhoPet = (pet) => {
//     pet.servicos.push('banho');
//     console.log(`\n${pet.nome} está de banho tomado!`);
// }

// darBanhoPet(bancoDados.pets[3]);

//FUNCAO DE PESQUISA
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

//Mostrar como seria em JSON:
//let testeJson = JSON.stringify(pets);
//console.log(testeJson);
//console.log(bancoDados.pets[1]);
