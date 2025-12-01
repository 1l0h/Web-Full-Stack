// backend/server.js
//1º DAM JRM (c) 2025/2026
const http = require('http');
const port = 3000;
//Abre tu navegador en http://localhost:3000.
const requestHandler = (request, response) => {
  response.end('Este es mi backend en el puerto 3000, es un archivo .js, y Sandoval es un tocacojones');
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('Algo salió mal', err);
  }
  console.log(`Servidor Node.js escuchando en el puerto ${port}`);
});