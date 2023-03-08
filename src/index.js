require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const  conn = require("express-myconnection");
const route = require('./routes/index');


const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
const PORT = process.env.PORT || 3001;
const dbConfig = {
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "node1"
}


app.use(conn(mysql, dbConfig, "single"))
app.use("/", route);
app.listen(PORT, () =>{
    console.log(`escuchando puerto ${PORT}`);
});
