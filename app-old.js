const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'aplication/json' });

    let salida = {
        nombre: 'Mario',
        edad: 38,
        url: req.url
    }
     
    res.write(JSON.stringify( salida ));
    //res.write('Hola Mundo');
    res.end();

})
.listen(8080);

console.log('Escuchando puerto 8080');