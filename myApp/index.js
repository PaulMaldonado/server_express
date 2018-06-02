let express = require('express');
let app = express();

app.get('/', function(req, res) {
  res.send('Hello world express');
});

app.get('/hello', function(req, res) {
  res.send('Hola desde otro metodo http');
});

app.get('/user/sign_in', function(req, res) {
  res.send('Iniciar sesion');
});

app.get('/user/sign_up', function(req, res) {
  res.send('Crear cuenta');
});

app.listen(3000, function() {
  console.log("Servidor funcionando correctamente en el puerto 3000!");
});