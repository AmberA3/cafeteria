var express = require('express');
const { route } = require('.');
var router = express.Router();
var conn = require('../lib/db')
var dateTime = require('node-datetime');

/* GET home page. */
router.get('/', (req, res) => {
    // CHECK LOGIN
    if(req.session.loggedin === true){
        // var dateTime = new Date();
        var dt = dateTime.create();
        var formatted = dt.format('Y-m-d H:M:S');
        conn.query('SELECT * FROM meal_opttble', (err, rows) => {
            if (err){
                res.render('meals', { 
                    title: 'Menu', 
                    meals: '', 
                    id: '', 
                    firstNm: '',
                    lastNm: ''
                });
            }else{
                res.render('meals', {
                    title: 'Menu', 
                    meals: rows, 
                    id: req.session.tid,
                    firstNm: req.session.firstNm,
                    lastNm: req.session.lastNm,
                    meal_descrip: req.session.meal_description,
                    date: formatted
                });
            }
        });
    }else {
            res.redirect('/login');
        }
});

router.post('/add', (req, res) => {
    var train = "INSERT INTO cafeteria.lunchtbl (option_name, trainee_id, date) VALUES ('" + req.body.option_name + 
    "', '" + req.body.trainee_id +
    "', '" + req.body.date +
    "')";
    conn.query(train, (err, results) => {
        if (err) throw err
        res.send(results)
    });
});
// router.post('/add', (req, res) => {
//     var train = "INSERT INTO cafeteria.lunchtbl (option_name, trainee_id, date) VALUES (option_name, trainee_id, date)"
//     conn.query(train, (err, results) => {
//         if (err) throw err
//         res.send('Your Lunch has been placed')
//     });
// });

module.exports = router;