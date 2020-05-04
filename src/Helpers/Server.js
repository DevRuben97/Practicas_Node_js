import http from 'http';

import fs from 'fs';

import {Connection} from '../Persistence/dbConnection';

const file=  '././src/Views/index.html'


//Crear un servidor:
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
        //Initialize the databse:
        Connection.sync();

    })

    server.on('error',onError)
}