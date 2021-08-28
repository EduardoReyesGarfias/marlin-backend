const express = require("express");
const initDB = require("./config/db");
const app = express();
const port = 3001;

/** Middlewears **/
const tagsRoutes = require("./app/routes/tags.route");

app.use(tagsRoutes);

app.listen(port, () =>{
    console.log("La app esta corriendo");
});

initDB();