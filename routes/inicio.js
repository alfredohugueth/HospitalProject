const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('login');
});

module.exports = router;

const customerController = require('../controllers/customerController');

router.get('/', customerController.list);
router.post('/add', customerController.save);
router.post('/addcaso', customerController.savecaso);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);
router.get('/delete/:id', customerController.delete);
router.get('/', customerController.list);

module.exports = router;
