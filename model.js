var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  artist: {
    type: String
  },
  title: {
    type: String
  }
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;