const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const {auth} = require("./middlewares/authMiddleware");

const { PORT, DB_URL } = require("./constants");
const routes = require("./router")

//Local variables
const app = express();

//Express configurations
app.use(express.static(path.resolve(__dirname, "./public"))); // config static middleware
app.use(express.urlencoded({ extended: false })); // config bodyparser
app.use(cookieParser());
app.use(auth);

//Handlebars configuration
app.engine("hbs", handlebars.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "src/views");

//Database connection
async function dbConnect() {
    await mongoose.connect(DB_URL);
}

dbConnect()
    .then(() => { console.log("Successfully connected to the DB") })
    .catch((err) => { console.log("Error while connecting") })

//Routes
app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))