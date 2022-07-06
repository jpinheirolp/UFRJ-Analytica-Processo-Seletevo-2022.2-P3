const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`olá de ${req.baseUrl}`);
});

module.exports = router;