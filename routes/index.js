var express = require('express');
var router = express.Router();
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index');
});

module.exports = router;
//COPY AND PASTE TO MAKE NEW ROUTE 
//CHANGE INDEX TO NAME OF PAGE 
//COPY & PASTE EJS TO MAKE NEW PAGE 
//RENAME name.ejs 
//RESTART NODE SERVE "npm start"