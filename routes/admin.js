var express = require('express');
var router = express.Router();
var conn = require('../lib/db')

/* GET home page. */
router.get('/', (req, res) => {
    conn.query('SELECT * FROM lunchtbl', (err, results) => {
        if (err) {
            res.render('admin/index', { title: 'Landing'});
        }else {
            res.render('admin/index', { title: 'Lading'});
        }
    });

});

// GET TRAINEES TABLE
router.get('/trainees', (req, res) => {
    conn.query('SELECT * FROM trainees_table', (err, results) => {
        if (err) {
            res.render('admin/trainees', { title: 'Trainees', trainees: ''});
        }else {
            res.render('admin/trainees', { title: 'Trainees', trainees: results});
        }
    });
});

// GET LUNCH TABLE
router.get('/lunches', (req, res) => {
    conn.query('SELECT * FROM lunchtbl', (err, results) => {
        if (err) {
            res.render('admin/lunches', { title: 'Lunch Ordered', orders: ''});
        }else {
            res.render('admin/lunches', { title: 'Lunch Ordered', orders: results});
        }
    });
});

module.exports = router;