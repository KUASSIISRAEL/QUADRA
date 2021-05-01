const express = require('express');
const router  = express.Router();
const {
  bucket,
  N1qlQuery
} = require('../config/db');
const {
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
  await bucket.query(N1qlQuery.fromString(queryOne(req.params.guid)), (err, rows) => {
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
async function filter(req, res) {
  await bucket.query(N1qlQuery.fromString(queryA), (err, rows) => {
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
  filter,
  getCategories
}