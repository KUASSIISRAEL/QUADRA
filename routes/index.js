const express = require('express');
const router  = express.Router();

const {
  filter,
  getArticle,
  getCategories
} = require('../controllers/index')


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index')
});


/* GET categories datas. */
router.get('/categories', (req, res, next) => {
  getCategories(req, res)
});


/* GET categories datas. */
router.get('/category/:guid', (req, res, next) => {
  getCategories(req, res)
});


/* GET articles datas. */
router.get('/article/:guid', (req, res, next) => {
  getArticles(req, res)
});


module.exports = router;