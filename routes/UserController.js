const router = require('express').Router();
const validator=require("../validators/UserValidator")
const userService=require("../services/UserService");

router.route('/')
    .get(userService.index)
    .post([validator.user],userService.new);

router.route('/:us_id')
    .get(userService.view)
    .patch(userService.update)
    .put(userService.update)
    .delete(userService.delete);

// Export API routes
module.exports = router;