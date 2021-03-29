let fs = require('fs');

let bancoDados = fs.readFileSync('dadosPet.json', 'utf-8');

console.log(typeof bancoDados);

bancoDados = JSON.parse(bancoDados);

console.log(typeof bancoDados);

bancoDados.pets.push({
            "nome": "Perna-longa",
            "tipo": "coelho",
            "idade": 2,
            "raca": "Mini Holandês",
            "peso": 2,
            "tutor": "Maria",
            "contato": "(81) 99685-8709",
            "vacinado": false,
            "servicos": []    
        });

        let petsAtualizado = JSON.stringify(bancoDados);
        fs.writeFileSync('dadosPet.json', petsAtualizado, 'utf-8');
        