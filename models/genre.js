const mongoose = require('mongoose');
// Genre Schema

var genreSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  create_date: {
    type: Date,
    default: Date.now,
  },
});
const Genre = (module.exports = mongoose.model('Genre', genreSchema));
// Get Genres
module.exports.getGenres = function(callback, limit) {
  Genre.find(callback).limit(limit);
};

// add Genre
module.exports.addGenre = function(genre, callback) {
  Genre.create(genre, callback);
};

// Update Genre
module.exports.updateGenre = function(id, genre, options, callback) {
  var query = { _id: id };
  var update = {
    name: genre.name,
  };
  Genre.findByIdAndUpdate(query, update, options, callback);
};
// Remove Genre
module.exports.removeGenre = function(id, callback) {
  var query = { _id: id };
  Genre.remove(query, callback);
};
