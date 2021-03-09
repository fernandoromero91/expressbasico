
const {Router} = require('express');
const { servicesGet, serviceidGet } = require('../controllers/service.controller');

const router = Router();

router.get('/',  servicesGet);

  router.get('/:id', serviceidGet);

module.exports = router;