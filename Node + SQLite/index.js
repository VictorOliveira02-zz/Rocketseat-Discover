const express = require("express");
const database = require('./db.js');

const app = express();

app.use(express.json());
app.use('/api', require('./src/controller/student/routes.js'));

async function main() {
    try {
        await database.sync();
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        })
    } catch (error) {
        console.log(error);
    }
}

main()