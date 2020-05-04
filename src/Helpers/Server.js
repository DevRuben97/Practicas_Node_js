import http from 'http';

import fs from 'fs';
const file=  '././src/Views/index.html'


export  function createServer(onError){
    const server= http.createServer((request, response)=> {
        response.writeHead(200, {'Content-Type': 'text/html; chartset=UTF-8'})


        fs.readFile(file, (error, content)=> {
            if (error){
               return console.log('Ha ocurrido un error al leer la pagina de inicio',error);
            }
            response.write(content);
            response.end();
        })
    })

    server.listen(3000, "localhost", (error)=> {
        if (error){
            return console.log('Ha ocurrido un error al iniciar el servidor', error);
        }
    
        console.log('Servidor Iniciado correctamente')
    })

    server.on('error',onError)
}