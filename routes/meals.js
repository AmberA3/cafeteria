var express = require('express');
const { route } = require('.');
var router = express.Router();
var conn = require('../lib/db')

/* GET home page. */
router.get('/', (req, res) => {
    // CHECK LOGIN
    if(req.session.loggedin === true){
        conn.query('SELECT * FROM meal_opttble', (err, rows) => {
            if (err){
                res.render('meals', { title: 'Menu', meals: '', id: ''});
            }else{
                res.render('meals', { title: 'Menu', meals: rows, id: req.session.tid});
            }
        });
    }else {
            res.redirect('/login');
        }
});

router.post('/add', (req, res) => {
    const data = {

    }
});

module.exports = router;