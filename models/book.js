let mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: {type: String, required: true },
    subtitle: {type: String },
    authors: {type: [String], required: true },
    link: {type: String, required: true },
    description: {type: String, required : true },
    image: {type: String, required: true},
    googleId: { type: String, required: true, unique: true }
});
// title - Title of the book from the Google Books API
// authors - The books's author(s) as returned from the Google Books API

// description - The book's description as returned from the Google Books API

// image - The Book's thumbnail image as returned from the Google Books API

// link - The Book's information link as returned from the Google Books API

const Book = mongoose.model("book", BookSchema);

module.exports = Book;