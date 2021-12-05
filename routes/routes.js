const express = require('express');
const RexController = require('../controllers/RexController');

const router = express.Router();

router.get('/create_table', RexController.create_table);

router.get('/', RexController.index);
router.get('/show/:id', RexController.show);

router.get('/add', RexController.add);
router.post('/create', RexController.create);

module.exports = router;



