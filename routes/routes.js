const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const multer = require('multer');
const upload = multer({ dest: './public' })

router.get('/', controller.abreindex)

router.get('/addcliente', controller.abreaddcliente)
router.post('/addcliente',controller.addcliente)

router.get('/addformiga', controller.addformiga)
router.post('/addformiga', controller.addformiga)

router.get('/sala1', controller.sala1)
router.get('/sala2', controller.sala2)
router.get('/sala3', controller.sala3)

router.get('/lstformiga',controller.lstformiga)
router.post('/lstformiga',controller.lstformiga)

router.get('/edtformiga/:id', controller.edtformiga)
router.post('/edtformiga/:id', controller.edtformiga)

router.get('/delformiga/:id', controller.delformiga)

router.get('/lstaposta', controller.lstaposta)
router.post('/lstaposta',controller.lstaposta)

router.get('/lstcliente', controller.lstcliente)
router.post('/lstcliente', controller.lstcliente)

router.get("/delcliente/:id", controller.delcliente)

router.get('/edtaposta/:id',controller.edtaposta)
router.post('/edtaposta/:id',controller.edtaposta)
router.get('/delaposta/:id',controller.delaposta)

module.exports = router