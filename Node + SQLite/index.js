import { createStudentTable, insertStudent, updateStudent, allStudents, deleteStudent } from './src/Controller/aluno.js';

import express from "express";
const app = express();
app.use(express.json());

createStudentTable();

app.get('/', async (req, res) => {
    let students = await allStudents()
    res.json(students);
});

app.post('/alumni', (req, res) => {
    insertStudent(req.body)
    res.send('Success Insert');
})

app.put('/alumni/update', (req, res) => {
    updateStudent(req.body)
    res.send('Success Update');
})

app.delete('/alumni/delete/:id', (req, res) => {
    deleteStudent(req.params.id)
    res.send('Success Delete');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})