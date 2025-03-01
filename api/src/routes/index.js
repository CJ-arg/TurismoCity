const {Router} = require('express');

const flightsRoutes = require('./flights.js');

const router = Router();

router.use('/flights', flightsRoutes)

module.exports = router;