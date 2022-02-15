const Student = require('../../models/student');

async function allStudents(req, res) {
    try {
        const students = await Student.findAll();
        res.json(students);
    } catch (error) {
        console.log(error);
    }
}

async function insertStudent(req, res) {
    try {
        const student = await Student.create(req.body);
        res.json(student);
    } catch (error) {
        console.log(error);
    }
}

async function updateStudent(req, res) {
    try {
        const student = await Student.update(req.body, {
            where: {
                id: req.body.id
            }
        });
        res.json(student);
    } catch (error) {
        console.log(error);
    }
}


async function deleteStudent(req, res) {
    try {
        const student = await Student.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json(student);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    allStudents,
    insertStudent,
    updateStudent,
    deleteStudent
}