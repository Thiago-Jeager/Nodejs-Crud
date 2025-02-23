//Usar MySQL
const mysql = require('mysql');
//usar Cors

const pool = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "empleados_crud",
    //port: "5432",
  });
  
  pool.on("connect", () => {
    console.log("Connected to the MySQL database");
  });
  
  //export default pool;
  module.exports = pool;