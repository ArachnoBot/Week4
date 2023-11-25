var express = require('express');
var router = express.Router();

let recipes = []

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index")
});

router.get('/recipe/:food', function(req, res, next) {
  const food = req.params.food
  res.send({
    name: food,
    instructions: ["instructions1", "instructions2", "instructions3"],
    ingredients: ["ingredients1", "ingredients2", "ingredients3"]
  })
});

router.post("/recipe/", function(req, res, next) {
  recipes.push(req.body)
  res.send(req.body)
})

router.post("/images", (req, res, next) => {
  res.send("yay")
})

module.exports = router;