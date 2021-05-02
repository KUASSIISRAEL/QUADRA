const express = require('express');
const router  = express.Router();

const {
  filtering,
  getArticle,
  getCategories
} = require('../controllers/index')


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('home')
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
  getArticle(req, res)
});


/* GET search datas results. */
router.get('/search', (req, res, next) => {
  filtering(req, res)
});



module.exports = router;