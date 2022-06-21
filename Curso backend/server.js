const http = require('http');

function responderPeticion(request,response){
    response.end('hola pinchi mundo culero');
}

let server = http.createServer(responderPeticion);


server.listen(3000);