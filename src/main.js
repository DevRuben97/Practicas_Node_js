import readline from 'readline';

import {ReadFile} from './Helpers/File';

const file = process.argv[2];


const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question(`
¿Que quieres hacer?
1- Leer un archivo
`, value=> {

    console.log(`Usted selecciono la opción ${value}`)

    switch (value) {
        case '1':
            ReadFile(file)
            break; 
        default:
            console.log('Opción invalidada')
    }

    rl.close();
})

