var express = require('express');
var router = express.Router();
var db = require('../database.js');
var mongoose = require('mongoose')
var testarray = [];

router.get('/', function(req, res, next) {
  res.render('wrong_url', { title: 'Express'});
});

module.exports = router;