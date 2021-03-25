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
        vacinado: true,
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
        vacinado: true,
        servicos: ['banho', 'corte de unhas']    
    }
];

//Usando Arrow Functions:

const listarPets = () => {
    for(let i=0; i < pets.length; i++){
        //console.log(pets[i].nome);
        console.log(`O nome do pet é ${pets[i].nome},`); //lembrar da crase
    }
}

listarPets();

// console.log(pets);