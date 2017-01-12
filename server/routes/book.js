var express = require('express');
var router = express.Router();
var knex = require('../../db/knex')
var methodOverride = require('method-override')

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
});

router.get('/add', function(req, res, next) {
    res.render('add_books')
});

router.get('/delete', function(req, res, next) {
    res.render('delete_book')
});

router.get('/delete/:id', function(req, res, next) {
    res.render('delete_book')
});

router.post('/add', function(req, res, next) {
    console.log('hi');
    console.log(req.body);
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
