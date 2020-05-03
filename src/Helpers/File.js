import fs from "fs";
import readline from "readline";

export function ReadFile(file) {
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