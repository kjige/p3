var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  count: {
    type: Number
  },
  name: {
    type: String
  }
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;