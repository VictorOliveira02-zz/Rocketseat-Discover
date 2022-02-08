const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("./views/pages/index");
})

app.get("/sobre", (req, res) => {
    res.render("./views/pages/about");
})


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})