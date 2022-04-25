const { Router } = require('express');
const router = Router();
const controller = require('../controllers/pokemon-controller');

router.get('/:limit', controller.get);

module.exports = router;
