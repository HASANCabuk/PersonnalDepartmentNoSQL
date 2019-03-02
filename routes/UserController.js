const router = require('express').Router();

const userService=require("../services/UserService");

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

router.route('/')
    .get(userService.index)
    .post(userService.new);

router.route('/:us_id')
    .get(userService.view)
    .patch(userService.update)
    .put(userService.update)
    .delete(userService.delete);

// Export API routes
module.exports = router;