const express = require('express');
const router  = express.Router();
const {
  bucket,
  N1qlQuery
} = require('../config/db');
const {
  filter,
  queryA,
  queryC,
  queryAC,
  queryOneA
} = require('../config/query');


// PROCCED TO CREATE FUNCTION TO GET DATAS
async function getCategories(req, res) {
  let query = (req.params.guid)
    ? queryAC(req.params.guid)
    : queryC;

  await bucket.query(N1qlQuery.fromString(query), (err, rows) => {
    if (err)
      res
      .json(err)
      .status(500)
    if (rows.length <= 0)
      res
      .json({ data: null })
      .status(404)
    res
      .json(rows)
      .status(200)
  });
}


// PROCCED TO CREATE FUNCTION TO GET DATAS
async function getArticle(req, res) {
  await bucket.query(N1qlQuery.fromString(queryOneA(req.params.guid)), (err, rows) => {
    if (err)
      res
      .json(err)
      .status(500)
    if (rows.length <= 0)
      res
      .json({ data: null })
      .status(404)
    res
      .json(rows)
      .status(200)
  });
}


// PROCCED TO CREATE FUNCTION TO GET DATAS
async function filtering(req, res) {
  await bucket.query(N1qlQuery.fromString(filter(req.query.search)), (err, rows) => {
    if (err)
      res
      .json(err)
      .status(500)
    if (rows.length <= 0)
      res
      .json({ data: null })
      .status(404)
    res
      .json(rows)
      .status(200)
  });
}


module.exports = {
  filtering,
  getArticle,
  getCategories,
}