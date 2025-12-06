const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/home") {
    res.write("<h1>Welcome to home Page</h1>");
    return res.end();
  }
  if (req.url === "/men") {
    res.write("<h1>Welcome to Men Page</h1>");
    return res.end();
  }
  if (req.url === "/women") {
    res.write("<h1>Welcome to women Page</h1>");
    return res.end();
  }
  if (req.url === "/kids") {
    res.write("<h1>Welcome to Kids Page</h1>");
    return res.end();
  }
  if (req.url === "/cart") {
    res.write("<h1>Welcome to Cart Page</h1>");
    return res.end();
  }
  res.write(`
    <html>
    <head>
    <title>Node</title>
  </head>
  <body>
    <head>
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/men">Men</a></li>
          <li><a href="/women">Women</a></li>
          <li><a href="/kids">Kids</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </nav>
    </head>
  </body>
</html>
    `);
  res.end();
});

const PORT = 3002;
server.listen(PORT, () => {
  //This is required to start the server
  console.log(`Server is running at http://localhost:${PORT}`); //This for console output for the localhost link
});
