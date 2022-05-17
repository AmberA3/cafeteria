var express = require('express');
var router = express.Router();
var conn = require('../lib/db')

/* GET home page. */
router.get('/', (req, res) => {
    conn.query('SELECT * FROM lunchtbl', (err, results) => {
        if (err) {
            res.render('admin/index', { title: 'Lunch Ordered', orders: ''});
        }else {
            res.render('admin/index', { title: 'Lunch Ordered', orders: results});
        }
    });

});

// GET TRAINEES TABLE
router.get('/trainees', (req, res) => {
    conn.query('SELECT * FROM trainees_table', (err, results) => {
        if (err) {
            res.render('admin/trainees', { title: 'Trainees', trainees: ''});
        }else {
            res.render('admin/trainees', { title: 'Lunch Ordered', trainees: results});
        }
    });
});

module.exports = router;