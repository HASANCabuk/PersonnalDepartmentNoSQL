let router = require('express').Router();

const departmentService=require("../services/DepartmentService");
const validator=require("../validators/DepartmentValidator")
router.route('/')
    .get(departmentService.index)
    .post([validator.department],departmentService.new);

router.route('/:dep_id')
    .get(departmentService.view)
    .patch(departmentService.update)
    .put(departmentService.update)
    .delete(departmentService.delete);

// Export API routes
module.exports = router;