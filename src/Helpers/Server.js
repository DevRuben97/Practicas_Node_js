import http from 'http';


export function createServer(){
    const server= http.createServer((request, response)=> {
        response.write("<h1> Hola a todos</h1>");
        response.end();
    })
    
    server.listen(3000, "localhost", (error)=> {
        if (error){
            return console.log('Ha ocurrido un error al iniciar el servidor', error);
        }
    
        console.log('Servidor Iniciado correctamente')
    })
}