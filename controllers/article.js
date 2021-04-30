const express = require('express');
const router = express.Router();
const {
  bucket,
  N1qlQuery
} = require('../config/db');

const {
  query1A,
  query2A,
  query3A,
  query4A,
  query5A
} = require('../config/query');


// PROCED TO CREATE FUNCTION TO GET DATAS
async function getArticles(req, res) {
  await bucket.query(N1qlQuery.fromString(query1A), (err, rows) => {
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
  getArticles
}