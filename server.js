const http = require("node:http");
const fs = require("fs");
const path = require("path");

const hostname = "127.0.0.1";
const port = 3000;

http
  .createServer((req, res) => {
    const filePath = path.resolve(__dirname, "index.html");

    fs.readFile(filePath, (error, data) => {
      if (error) {
        res.statusCode = 404;
        res.end("Resourse not found!");
      } else {
        res.end(data);
      }
    });
  })
  .listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
