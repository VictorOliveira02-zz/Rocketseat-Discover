const express = require('express');
const {
    allStudents,
    insertStudent,
    updateStudent,
    deleteStudent
} = require('./index.js');

const router = express.Router();

router.get('/alumni/all', allStudents)
router.post('/alumni/create', insertStudent)
router.put('/alumni/update', updateStudent)
router.delete('/alumni/delete/:id', deleteStudent)

module.exports = router;