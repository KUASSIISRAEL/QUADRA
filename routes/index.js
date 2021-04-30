const express = require('express');
const router  = express.Router();

const { getArticles }   = require('../controllers/article')
const { getCategories } = require('../controllers/category')


/* GET home page. */
router.get('/', (req, res, next) => {
  getCategories(req, res)
});


/* GET categories page. */
router.get('/categories', (req, res, next) => {
  getCategories(req, res)
});


/* GET articles page. */
router.get('/articles', function(req, res, next) {
  getArticles(req, res)
});


module.exports = router;