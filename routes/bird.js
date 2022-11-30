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

/* GET create update page */ 
router.get('/update', bird_controllers.bird_update_Page);

/* GET delete costume page */
router.get('/delete', bird_controllers.bird_delete_Page);
router.get('/bird/:id', bird_controllers.bird_detail);


module.exports = router;
