var mysql = require('mysql');
var conn = mysql.createConnection({
    host: "localhost",   
    user: "root",    
<<<<<<< HEAD
    password: "root",   
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
    database: "cafeteria"  
=======
    password: "Server01.",   
    database: "cafeteria2"  
>>>>>>> a795eb3cf4a0063e4a3b096a93e547291fac2a7d
  });

  conn.connect((err)=> {
    if(!err)
        console.log('Connected to database Successfully');
    else
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
    });
    
module.exports = conn;