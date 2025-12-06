const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Enter your Details</h1>");
    res.write("<form action='/submit-details' method='POST'>");
    res.write(
      "<input type+'text' name='username' placeholder='Enter your name'><br>"
    );
    res.write('<label for="male" >Male</label>');
    res.write("<input type='radio'id='male' name='gender' value='male'/>");
    res.write('<label for="female" >Female</label>');
    res.write(
      "<input type='radio' id='female' name='gender' value='female'/><br>"
    );
    res.write("<input type='submit' value- 'submit'/>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else if (req.url === "/product") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Hello from my Product Section</h1></body>");
    res.write("</html>");
    res.end();
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>The End</h1></body>");
    res.write("</html>");
    res.end();
  }
});

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`Server iss running http://localhost:${PORT}`);
});
