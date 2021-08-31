const express = require("express");
const initDB = require("./config/db");
const middlewears = require("./app/middlewears/middlewears");
const app = express();
const port = 3001;

/** Middlewears **/
app.use(express.json());
app.use(express.urlencoded({ extended:true}))
app.use(middlewears);




app.listen(port, () =>{
    console.log("La app esta corriendo!");
});

initDB();