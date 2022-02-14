import { createTable } from './src/Controller/aluno.js';

import express from "express";
const app = express();
app.use(express.json());

createTable();

app.get('/', (req, res) => {

});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})