// Controller for adding students
// This needs to be tweaked for our app.
// 


const db = require("../models");

module.exports = {
    // This might be for the team view
    findAll: function(req, res) {
        db.Student
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res) {
        db.Student
            .findOne({id: req.params.id})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    save: function(req, res) {
        db.Student
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};