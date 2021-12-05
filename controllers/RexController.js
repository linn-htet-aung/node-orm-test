const db = require('../config/db');
const Rex = require('../models/Rex');
const Digital = require('../models/Digital');

Rex.hasMany(Digital);


// create table
const create_table = (req, res) => {
    db.sync({ force: true })
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });
    res.send('OK');
};

// inxex
const index = (req, res) => {
    Rex.findAll()
        .then((result) => {
            res.render('index', { devices: result });
        })
        .catch((err) => {
            console.log(err);
        });
};

// show
const show = (req, res) => {
    Rex.findOne({
        where: {
            id: req.params.id,
        }   
    })
        .then((result) => {
            res.render('show', { device: result });
        })
        .catch((err) => {
            console.log(err);
        });
};

// add
const add = (req, res) => {
    res.render('add');
};

// create
const create = (req, res) => {
    Rex.create({
        name: req.body.name,
        sn: req.body.sn,
    });
    res.redirect('/');
};

// edit
// update

// delete

module.exports = {
    create_table,
    index,
    show,
    add,
    create,
};