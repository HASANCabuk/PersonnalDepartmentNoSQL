const router = require('express').Router();

const personnalService=require("../services/PersonnalService");
const validator=require("../validators/PersonnelValidator")
router.route('/')
    .get(personnalService.index)
    .post([validator.personnal],personnalService.new);

router.route('/:per_id')
    .get(personnalService.view)
    .patch(personnalService.update)
    .put(personnalService.update)
    .delete(personnalService.delete);

// Export API routes
module.exports = router;