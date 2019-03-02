let router = require('express').Router();

const departmentService=require("../services/DepartmentService");
/*
router.get('/',(req, res)=>{
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
*/
router.route('/')
    .get(departmentService.index)
    .post(departmentService.new);

router.route('/:dep_id')
    .get(departmentService.view)
    .patch(departmentService.update)
    .put(departmentService.update)
    .delete(departmentService.delete);

// Export API routes
module.exports = router;