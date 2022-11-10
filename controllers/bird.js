var bird = require('../models/bird');
// List of all Costumes
exports.bird_list = function(req, res) {
 res.send('NOT IMPLEMENTED: bird list');
};
// for a specific Costume.
exports.bird_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: bird detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.bird_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: bird create POST');
};
// Handle Costume delete form on DELETE.
exports.bird_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: bird delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.bird_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: bird update PUT' + req.params.id);
};
// VIEWS

   // List of all Costumes
exports.bird_list = async function(req, res) {
    try{
    thebird = await bird.find();
    res.send(thebird);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // VIEWS
// Handle a show all view
exports.bird_view_all_Page = async function(req, res) {
    try{
    thebird = await bird.find();
    res.render('bird', { title: 'bird Search Results', results: thebird });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle Costume create on POST.
exports.bird_create_post = async function(req, res) {
    console.log(req.body)
    let document = new bird();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.birdName = req.body.birdName;
    document.birdWeight = req.body.birdWeight;
    document.birdColor = req.body.birdColor;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
}