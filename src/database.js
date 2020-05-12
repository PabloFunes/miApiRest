const mysql = require('mysql');

const mysqlConnectionn = mysql.createConnection({
    host: 'sql3.freemysqlhosting.net',
    user: 'sql3339744',
    password: 'SXBR6lQwcV',
    database: 'sql3339744'
})

mysqlConnectionn.connect(function (err){
    if(err){
        console.log(err);
        return;
    } else {
        console.log('Base de datos conectada');
    }
})

module.exports = mysqlConnectionn;