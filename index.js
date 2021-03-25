const nomePetshp = 'Petshop Avanade';

let pets = [
    {
        nome: 'Orion',
        tipo: 'cachorro',
        idade: 5,
        raca: 'Pastor Australiano',
        peso: 10,
        tutor: 'Tom',
        contato: '(81) 98746-0809',
        vacinado: true,
        servicos: ['banho', 'tosa']    
    },
    {
        nome: 'Scooby-Doo',
        tipo: 'cachorro',
        idade: 3,
        raca: 'Dogue Alemão',
        peso: 50,
        tutor: 'Salsicha',
        contato: '(11) 95670-1029',
        vacinado: false,
        servicos: ['banho']    
    },
    {
        nome: 'Salem',
        tipo: 'gato',
        idade: 10,
        raca: 'Vira-Lata',
        peso: 2.5,
        tutor: 'Sabrina',
        contato: '(81) 97597-5257',
        vacinado: false,
        servicos: ['banho', 'corte de unhas']    
    }
];

//Usando Arrow Functions:

// const listarPets = () => {
//     for(let pet of pets){
//         //console.log(pets[i].nome);
//         console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca};`); //lembrar da crase
//     }
// }

// listarPets();

const vacinarPets = (pet) => {
    
        if(pet.vacinado == false)
        {
            pet.vacinado = true;
            console.log(`\n${pet.nome} foi vacinado com sucesso!\n`);
        }
        else
            console.log(`\nOpa, ${pet.nome} foi Vacinado`);
}

vacinarPets(pets[2]);

const campanhaVacina = () => {
   
    let i=0;
    for(let pet of pets)
    {
        if(pet.vacinado == false)
        {
            pet.vacinado = true;
            i++;         
        }
    }
    
    console.log(`\n${i} pets foram vacinados nessa campanha!`);
}

campanhaVacina();

