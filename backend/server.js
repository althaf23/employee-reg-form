const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'bmta2t1ieiiel3fofk52-mysql.services.clever-cloud.com',
  user: 'ukpotpfdbflzojyk',
  password: 'fva4QIzM68gegPKSfQF6',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

function createTables(){
  const quer = "use bmta2t1ieiiel3fofk52";
  connection.query(quer,(err,results)=>{
    if(err){
      console.log(err);
    }else{
      const quer2="USE bmta2t1ieiiel3fofk52";
      connection.query(quer2,(err,results)=>{
        if(err){
          console.log(err);
        }else{
          const table_quer=`
          CREATE TABLE IF NOT EXISTS employees (
            id INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            phone VARCHAR(20) NOT NULL,
            dob VARCHAR(100) NOT NULL,
            employee_id VARCHAR(255) NOT NULL,
            address TEXT NOT NULL,
            designation VARCHAR(255) NOT NULL,
            salary VARCHAR(255) NOT NULL,
            experience TEXT NOT NULL
          )`;
          connection.query(table_quer,(err,results)=>{
            if(err){
              console.log(err);
            }else{
              console.log('Table EMPLOYEES created successfully');
            }
          });
        }
      });
    }
  });
}

createTables();

app.post('/api/create_employees', (req, res) => {
  const { name, email, phone,dob,employee_id,address,designation,salary,experience} = req.body;
  const INSERT_EMPLOYEE_QUERY = `INSERT INTO employees (name, email, phone,dob,employee_id,address,designation,salary,experience) VALUES (?, ?, ?,?,?,?,?,?,?)`;
  connection.query(INSERT_EMPLOYEE_QUERY, [name, email, phone,dob,employee_id,address,designation,salary,experience], (err, results) => {
    if (err) throw err;
    res.status(200).send('Employee added successfully');
  });
});

app.get('/',(req,res)=>{
  query = "select * from employees";
  connection.query(query,(err,results)=>{
    if(err){
      res.status(500).send(`Internal Sever Error: ${err}`);
    }else{
      res.status(200).json(results);
    }
  })
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
