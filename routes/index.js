var express = require('express');
var router = express.Router();
var conn = require('../lib/db')

/* GET home page. */
router.get('/', (req, res) => {
  conn.query('Select * FROM lunchtbl', (err, results) => {
    if (err) {
      res.render('index', { title: 'Lunch Ordered', orders: '' }); 
    }else {
      res.render('index', { title: 'Lunch Ordered', orders: results});
    }
  });
});

module.exports = router;
