const path = require("path");


module.exports = {
  entry: '/resources/javascripts/core.js',
  output: {
    path: path.join(__dirname, 'public/javascripts'),
    filename: 'main.js'
  },
  mode: 'production'
}