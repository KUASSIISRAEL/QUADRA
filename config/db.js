const couchbase = require('couchbase')
const dotenv    = require('dotenv').config();
const cluster   = new couchbase.Cluster('couchbase://127.0.0.1');


// INITIATE THE AUTHENTIFICATION OF DDB
const USERNAME = process.env.BUCKET_USER
const PASSWORD = process.env.BUCKET_PWD
cluster.authenticate(USERNAME, PASSWORD);


// INITIATE THE COUCHBASE
const BUCKETNAME = process.env.BUCKET_NAME
const bucket     = cluster.openBucket(BUCKETNAME);
const N1qlQuery  = couchbase.N1qlQuery;


module.exports = {
  bucket,
  N1qlQuery,
  USERNAME,
  BUCKETNAME
}