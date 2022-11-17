var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('bird', { title: 'Search Results bird' });
});
var express = require('express');
const bird_controllers= require('../controllers/bird');
var router = express.Router();
/* GET costumes */
router.get('/', bird_controllers.bird_view_all_Page );
// GET request for one costume. 
router.get('/bird/:id', bird_controllers.bird_detail); 
 

/* GET detail costume page */ 
router.get('/detail', bird_controllers.bird_view_one_Page); 

/* GET create costume page */ 
router.get('/create', bird_controllers.bird_create_Page); 


module.exports = router;
