const sum = require("./sum");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
      <head>Calculator</head>
      <body>
        <h1>Welcome to Calculator</h1>
        <a href="/calculator">Go to Calculator</a>
      </body>
      
      </html>`);
    return res.end();
  } else if (req.url === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
      <head>Calculator</head>
      <body>
        <h1>Here is  the Calculator</h1>
        <form action="/result" method="POST">
        <input type= "text" placeholder= "Enter first number" name="num1">
        <input type= "text" placeholder= "Enter scond number" name="num2">
        <input type="submit" value="submit">
        </form>
      </body>
      
      </html>`);
    return res.end();
  } else if (req.url === "/result" && req.method === "POST") {
    return sum(req, res);
    
  }
  res.setHeader("Content-Type", "text/html");
  res.write(`<html>
      <head>Calculator</head>
      <body>
        <h1>Error 404 </h1>
        <a href="/">Go to Home</a>
      </body>
      
      </html>`);
  return res.end();
};
module.exports = requestHandler;
