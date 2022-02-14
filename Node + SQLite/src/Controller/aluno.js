import { openDb } from "../configDB.js";

export async function createTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Aluno (matricula INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT,cpf INTEGER UNIQUE, email TEXT)');
    })

}