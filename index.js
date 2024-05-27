const http = require('http');

// Define el puerto en el que el servidor escuchará
const PORT = process.env.PORT || 3000;

// Crea el servidor
const server = http.createServer((req, res) => {
  // Establece el encabezado de la respuesta
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Envía la respuesta "Hola Mundo"
  res.end('Hola Mundo\n');
});

// El servidor comienza a escuchar en el puerto especificado
server.listen(PORT, () => {
  console.log(`Servidor está escuchando en http://localhost:${PORT}`);
});