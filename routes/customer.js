const router = require('express').Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.login);
router.post('/add', customerController.save);
router.post('/addcaso', customerController.savecaso);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);
router.get('/delete/:id', customerController.delete);
//router.get('/', customerController.list);
router.post('/', customerController.sendinfo);
router.get('/AYUDANTE',customerController.ayudante);
router.get('/MEDICO',customerController.medico);
router.get('/ADMINISTRADOR',customerController.list);
router.get('/GESTIONAR',customerController.gestionarcas);
router.post('/busqueda',customerController.busqueda);



/*router.post('/ayudante',customerController.ayudante);
router.post('/medico',customerController.medico);
router.get('/medico',customerController.medico);
router.get('/ayudante',customerController.ayudante); */
module.exports = router;

