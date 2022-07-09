const express = require('express');
const router = express.Router();
const controler = require('../../controllers/age_calculator_controller');

router.post('/', controler.calculate_age_date);
//router.get('/', controler.returns_today_date);

module.exports = router;