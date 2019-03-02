const router = require('express').Router();

const personnalService=require("../services/PersonnalService");

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

router.route('/')
    .get(personnalService.index)
    .post(personnalService.new);

router.route('/:per_id')
    .get(personnalService.view)
    .patch(personnalService.update)
    .put(personnalService.update)
    .delete(personnalService.delete);

// Export API routes
module.exports = router;