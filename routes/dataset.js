var express = require('express');
var router = express.Router();
var dataset = require('../dataset.json');

router.get('/', function (req, res, next) {
    // res.sendDate(dataset);
    res.send(dataset);
});

module.exports = router;