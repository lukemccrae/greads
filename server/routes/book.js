var express = require('express');
var router = express.Router();
var knex = require('../../db/knex')

/* GET home page. */
router.get('/', function(req, res, next) {
    knex('book')
        .select()
        .then(title => {
            console.log(title);
            res.render('book_view', {
                title: title
            });
        });
})

router.get('/add', function(req, res, next) {
    knex('book')
        .select()
        .then(title => {
            console.log(title);
            res.render('add_books', {
                title: title
            });
        });
})


module.exports = router;
