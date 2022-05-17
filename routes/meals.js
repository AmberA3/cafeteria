var express = require('express');
var router = express.Router();
var conn = require('../lib/db')

/* GET home page. */
router.get('/', (req, res) => {
    conn.query('SELECT * FROM meal_opttble', (err, rows) => {
        if (err){
            res.render('meals', { title: 'Lunch Ordered', meals: ''});
        }else{
            res.render('meals', { title: 'Lunch Ordered', meals: rows});
        }

    });
});

module.exports = router;