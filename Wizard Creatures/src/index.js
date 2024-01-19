const express = require("express");
const path = require("path");
const { PORT } = require("./constants");
const routes = require("./router")

const app = express();

//Express configurations
app.use(express.static(path.resolve(__dirname, "./public"))); // config static middleware
app.use(express.urlencoded({ extended: false })); // config bodyparser

//Routes
app.get("/", (req, res) => {
    res.send("Home page!");
});

app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))