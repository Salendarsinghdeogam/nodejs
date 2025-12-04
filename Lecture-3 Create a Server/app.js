const http = require ('http');

const server = http.createServer ((req,res) => {
  console.log(req);
});

const PORT = 3002;
server.listen (PORT, () => {
  console.log (`Server iss running http://localhost${PORT}`);
});