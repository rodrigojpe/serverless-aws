

const mysql = require('mysql')


const configDB = {
    conectionLimit: 10,
    host: 'rds-curso.czu3ispwwrgo.us-east-1.rds.amazonaws.com',
    user: 'curso',
    password: 'serverless',
    port: '3306',
    database: 'RDScurso',
    debug: true
}


let pool = mysql.createPool(configDB);


module.exports = pool;  