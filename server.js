const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: 'employee_db'
});

connection.connect(err => {
    if (err) throw err;
    console.table('Connection to employee_db successful!');
    console.log(

    );
    console.table('***********************************************')
    console.table('**                                           **')
    console.table('**             Employee Tracker              **')
    console.table('**                by: travis                 **')
    console.table('**                                           **')
    console.table('***********************************************')
});


