var express = require('express');
var router = express.Router();

let recipes = []

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index")
});

router.get('/recipe/:food', function(req, res, next) {
  sendRecipe(res, req.params.food)
});

router.post("/recipe/", function(req, res, next) {
  Recipe.create(req.body)
  res.send(req.body)
})

router.post("/images", (req, res, next) => {
  res.send("yay")
})

module.exports = router;
