const express = require('express');

const app = express();

app.use(middleware1);
app.use(middleware2);


function middleware1 (req, res, next) {
  console.log('middleware1');
  next(); 
}

function middleware2 (req, res, next) {
  console.log('middleware2');
  next();
}

app.get('/', (request, response) => {
  console.log('I am the standard express function');
  response.send("<h1>Hello world</h1>");
});

app.listen(3000, () => {
  console.log("The server is running on port 3000");
});