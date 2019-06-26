const axios = require("axios");
const db = require("../models");

// defining the methods for googleController

// findAll searches the Google Books API and return only the entries we
// haven't already saved

// It also makes sure that the books returned from the API all contain a title,
// Author, link description, and image

module.exports = {
    findAll: function (req, res) {
        // console.log("req: ", req);
        console.log("req.query", req.query);
        const { query: params } = req;
        console.log("params: ", params);
        axios
            .get("https://www.googleapis.com/books/v1/volumes", { 
                params 
            })
            .then(results => results.data.items.filter(
                result => result.volumeInfo.title &&
                result.volumeInfo.infoLink &&
                result.volumeInfo.authors &&
                result.volumeInfo.description &&
                result.volumeInfo.imageLinks &&
                result.volumeInfo.imageLinks.thumbnail
            ) 
        )
        .then(apiBooks => 
            db.Book.find().then(dbBooks =>
                apiBooks.filter(apiBook => 
                    dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id
                    )
                )
            )
        )
        .then(books => res.json(books))
        .catch(err => res.status(422)
        .json(err));
    }
    
}