var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
var methodOverride = require('method-override')

/* GET home page. */
router.get('/add', function(req, res, next) {
    res.render('add_books')
});

router.get('/delete/:id', function(req, res, next) {
    res.render('delete_book')
});

router.get('/edit/:id', function(req, res, next) {
    knex('book')
        .where('id', req.params.id)
        .then(title => {
            res.render('edit_book', {
                title: title
            });
        });
});

router.put('/edit/:id', function(req, res) {
    knex('book')
        .where('id', req.params.id)
        .update(req.body)
        .then(res.render('book_view'))
})

router.get('/', function(req, res, next) {
    knex('book')
        .select()
        .then(title => {
            res.render('book_view', {
                title: title
            });
        });
});

router.post('/add', function(req, res, next) {
    const newBook = {
        title: req.body.title,
        genre: req.body.genre,
        description: req.body.description,
        cover_url: req.body.cover
    }
    if (newBook.title) {
        knex('book')
            .insert(newBook)
            .then(res.redirect('/'))
    } else {
        res.render('error', {
            message: 'no title'
        })
    }
})

router.delete('/delete/:id', (req, res) => {
    knex('book')
        .where('id', req.params.id)
        .del()
        .then(res.render('confirm_delete', {
            message: 'book deleted'
        }))
});

module.exports = router;
