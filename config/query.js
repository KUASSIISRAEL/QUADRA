// ALL QUERIES OF CATEGORIES
const queryC = "SELECT * FROM `categories`"
const queryA = "SELECT * FROM `articles`"


const queryAC = (value) => {
  return `SELECT * FROM categories AS article_list WHERE guid='${value}'`
}

const queryOneA = (value) => {
  return `SELECT * FROM articles WHERE guid='${value}'`
}


module.exports = {
  queryC,
  queryA,
  queryAC,
  queryOneA
}