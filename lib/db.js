var mysql = require('mysql');
var conn = mysql.createConnection({
    host: "localhost",   
    user: "root",    
    password: "Server01.",  //root
    database: "cafeteria2"  //cafeteria (before push)
  });

  conn.connect((err)=> {
    if(!err)
        console.log('Connected to database Successfully');
    else
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
    });
    
module.exports = conn;