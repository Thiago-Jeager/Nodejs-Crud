//import app from "./app.js";
const app = require("./app.js");
let PORT = 3001;
app.listen(PORT);
console.log("Servidor ejecutando en el puerto", PORT);

//app.listen(3001, () => { console.log('Server running on port 3001') });  // Forma corta de hacerlo