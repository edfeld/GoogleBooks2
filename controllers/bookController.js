const axios = require("axios");
const db = require("../models");

// define all the methods for the google controller

module.exports = {
    findAll: function (req, res) {
        console.log("req: ", req);
        console.log("req.query", req.query);
        db.Book.find(req.query)
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422)
            .json(err));
    },
    findById: function(req, res) {
        db.Book.findById(req.params.id)
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422)
            .json(err));
    },
    create: function (req, res) {
       db.Book.create(req.body)
        .then(dbBook => res.json(dbBook))
        .catch(err => res.status(422)
        .json(err)); 
    },
    update: function(req, res) {
        console.log("updte fn: ", req.params);
        db.BookFindOneAndUpdate({ id: req.params.id }, req.body)
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422)
            .json(err))
    },
    remove: function(req, res) {
        console.log("Running the remove: ", req.params.id);
        db.Book.findById(req.params.id)
            .then(dbBook => dbBook.remove())
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422).json(err));
    }

}