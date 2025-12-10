const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Enter your Details</h1>");
    res.write("<form action='/submit-details' method='POST'>"); // Form starts here
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
    return res.end();
  } else if (req.url === "/submit-details" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk); // Logs the raw buffer data
      body.push(chunk);
    });
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString(); // Converts the buffer to string
      console.log(fullBody); // Logs the complete form data as a string
    });
    fs.writeFileSync("user.txt", "reload done"); // Writing static data to user.txt file
  }
  {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 302;
    res.setHeader("Location", "/"); // Redirecting to home page after form submission
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
