const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const multer = require('multer');
const upload = multer({ dest: './public' })

router.get('/', controller.abreindex)

router.get('/addcliente', controller.abreaddcliente)
router.post('/addcliente',controller.addcliente)

router.get('/sala1', controller.sala1)
router.post('/sala1', controller.sala1)

router.get('/sala2', controller.sala2)
router.post('/sala2', controller.sala2)

router.get('/sala3', controller.sala3)
router.post('/sala3', controller.sala3)

router.get('/lstformiga/:id',controller.lstformiga)
router.post('/lstformiga/:id',controller.lstformiga)

router.get('/edtformiga/:id', controller.edtformiga)
router.post('/edtformiga/:id', controller.edtformiga)

router.get('/delformiga/:id', controller.delformiga)

router.get('/lstaposta/:id', controller.lstaposta)
router.post('/lstaposta/:id',controller.lstaposta)

router.get('/edtaposta/:id',controller.edtaposta)
router.post('/edtaposta/:id',controller.edtaposta)
index1
router.get('delaposta/:id',controller.delaposta)

module.exports = router