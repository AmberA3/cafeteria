var express = require('express');
var router = express.Router();
var conn = require('../lib/db')

/* GET home page. */
router.get('/', (req, res) => {
  res.render('login', { title: 'Lunch Ordered'});
});

// Auth
router.post('/authlogin', function(req, res, next) {
       
  var email = req.body.email;
  var password = req.body.password;
 
  conn.query('SELECT * FROM cafeteria.trainees_table WHERE email = ? AND BINARY password = ?', [email, password], function(err, results, fields) {
       
    // if login is incorrect or not found
    // console.log(results.length);
    if (results.length <= 0) {
        req.flash('error', 'Invalid credentials Please try again!')
        res.redirect('/login')
    }
    else { // if login found
        //Assign session variables based on login credentials                
        req.session.loggedin = true;
        req.session.tid = results[0].id,
        req.session.first_name = results[0].first_nm;
        req.session.last_name = results[0].last_nm;
        req.session.user_type = results[0].user_type;
        res.redirect('/meals');
        console.log(req.session.uid)
    }            
  })
})

// Logout user
router.get('/logout', function (req, res) {
  req.session.destroy();
  req.flash('success', 'Enter Your Login Credentials');
  res.redirect('/login/login');
});

module.exports = router;