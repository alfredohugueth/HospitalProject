const router = require('express').Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.medico);
router.get('/login', customerController.login);
router.post('/add', customerController.save);
router.post('/addcaso', customerController.savecaso);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);
router.get('/delete/:id', customerController.delete);
//router.get('/', customerController.list);
router.post('/', customerController.sendinfo);
router.get('/AYUDANTE',customerController.ayudante);
router.get('/ADMINISTRADOR',customerController.list);
router.post('/buscar',customerController.buscar);
router.get('/GESTIONAR',customerController.gestionarcas);
router.post('/busqueda',customerController.busqueda);
router.get('/prueba',customerController.prueba);
router.get('/infocliente',customerController.pacient);
router.post('/actualizarEstado',customerController.actualiz);
router.get('/HistorialUsua',customerController.getdatusuario);
router.get('/pacientee',customerController.pacientee);
router.get('/Hpacientee',customerController.Histmed);
router.get('/medico2',customerController.medico2);
router.get('/MAPGEO',customerController.mapgeo);
router.post('/mgbusqueda',customerController.mgbusqueda);

/*router.post('/ayudante',customerController.ayudante);
router.post('/medico',customerController.medico);
router.get('/medico',customerController.medico);
router.get('/ayudante',customerController.ayudante); */
module.exports = router;

