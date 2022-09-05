var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.use("/assets", express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html> <html lang="en"> <head> <link rel="stylesheet" href ='/assets/style.css'>
  <title>Document</title> </head> 
  <body> <h1>Hola mundo</h1>
  <p> Este es un parrafo y su contenido debe ser azul</p></body> </html>
  `);
});

app.post("/student", (req, res) => {
  res.send(`First name es: ${req.body.fname}, Last name es: ${req.body.lname}`);
});

app.get("/student", (req, res) => {
  res.render("index");
});

//Ahora se tiene dos rutas student un post y una get. En el post imprimiremos el evento postback indicando que se solicita lo que se escribio en el body en un id especifico y con el get se renderiza la pagina

app.listen(port);
