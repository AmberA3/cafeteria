var express = require('express');
var router = express.Router();
var conn = require('../lib/db')

/* GET home page. */
router.get('/', (req, res) => {
  res.render('login', { title: 'Lunch Ordered'});
});

module.exports = router;