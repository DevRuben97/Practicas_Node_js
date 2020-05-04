import fs from "fs";
import readline from "readline";


const file = process.argv[2];

//Function para leear un atchivo especificado
export function ReadFile() {
    if (file) {
      let lines = 0;
  
      const rl = readline.createInterface({
        input: fs.createReadStream(file),
        crlfDelay: Infinity,
      });
  
      rl.on("line", (line) => {
        lines++;
        console.log(`El total de caracteres en esta linea es: ${line.length}`);
      });
  
      rl.on("close", () => console.log(`El total de lineas son ${lines}`));
    }
    else{
        console.log('Archivo invalido')
    }
  }

  //Crear un menu de opciones para ejecutar las diferentes opciones de lectura de archivos
  export function createOptionsMenu(){

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
    
  }