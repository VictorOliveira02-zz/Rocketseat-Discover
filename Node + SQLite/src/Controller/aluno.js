import { openDb } from "../configDB.js";

export async function createStudentTable() {
    openDb()
        .then(db => {
            db.exec('CREATE TABLE IF NOT EXISTS Alumni (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT,cpf INTEGER UNIQUE, email TEXT)');
        })
}

export async function insertStudent(student) {
    openDb()
        .then(db => {
            db.run('INSERT INTO Alumni (name, cpf, email) VALUES (?, ?, ?)', [student.name, student.cpf, student.email]);
        })
}

export async function updateStudent(student) {
    openDb()
        .then(db => {
            db.run('UPDATE Alumni SET name = ?, cpf = ?, email = ? WHERE id = ?', [student.name, student.cpf, student.email, student.id]);
        })
}

export async function allStudents() {
    return openDb()
        .then(db => {
            return db.all('SELECT * FROM Alumni')
                .then(students => {
                    return students;
                })
        })
}

export async function deleteStudent(id) {
    openDb()
        .then(db => {
            db.run('DELETE FROM Alumni WHERE id = ?', [id]);
        })
}