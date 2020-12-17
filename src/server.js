//importar dependência
const express = require('express');
const path = require('path');

//iniciando o express
const server = express()

//criar uma rota
server.get('/', (request, response) => {
    console.log(path.join(__dirname, 'views'))
    //return response.send('Oi! Direto do Back-end')
})

//ligar o servidor
server.listen(5500)