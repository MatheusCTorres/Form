const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'company'
});

app.post("/create", (req, res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;

    db.query('insert into employee (name, age, country, position, wage) values (?, ?, ?, ?, ?)', [name, age, country, position, wage], (err, result) => {
        if(err)console.log(err);
        res.send("values inserted")
    });
})

app.get("/employees", (req, res) => {
    db.query('select * from employee', (err,result) => {
        if(err)console.log(err);
        res.send(result);
    });
})

app.listen(3001, ()=>{
    console.log("the server is running on port 3001");
});