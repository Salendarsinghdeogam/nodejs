const sum = (req,res) => {
  console.log("In Sum Request Handler", req.url);
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
   const params = new URLSearchParams(parsedBody);
   const bodyObj = Object.fromEntries(params);
   const result = Number(bodyObj.num1) + Number(bodyObj.num2);
   console.log("Result is:", result);


   res.setHeader("Content-Type", "text/html");
  res.write(`<html>
      <head>Calculator</head>
      <body>
        <h1>You Sum is ${result} </h1>
      </body>
      
      </html>`);
   res.end();

});

};

module.exports = sum; 