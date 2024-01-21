const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");

const { PORT } = require("./constants");
const routes = require("./router")

const app = express();

//Express configurations
app.use(express.static(path.resolve(__dirname, "./public"))); // config static middleware
app.use(express.urlencoded({ extended: false })); // config bodyparser

//Handlebars configuration
app.engine("hbs", handlebars.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "src/views");

//Routes
app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))