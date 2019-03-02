
User = require("../model/User");

// Handle index actions
exports.index = function (req, res) {
    User.get(function (err, Users) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Users retrieved successfully",
            data: Users
        });
    });
};

// Handle create User actions
exports.new = function (req, res) {
    var User = new User();
    User.name = req.body.name ? req.body.name : User.name;
    User.gender = req.body.gender;
    User.email = req.body.email;
    User.phone = req.body.phone;

    // save the User and check for errors
    User.save(function (err) {
        // if (err)
        //     res.json(err);

        res.json({
            message: 'New User created!',
            data: User
        });
    });
};


// Handle view User info
exports.view = function (req, res) {
    User.findById(req.params.User_id, function (err, User) {
        if (err)
            res.send(err);
        res.json({
            message: 'User details loading..',
            data: User
        });
    });
};

// Handle update User info
exports.update = function (req, res) {

    User.findById(req.params.User_id, function (err, User) {
        if (err)
            res.send(err);

        User.name = req.body.name ? req.body.name : User.name;
        User.gender = req.body.gender;
        User.email = req.body.email;
        User.phone = req.body.phone;

        // save the User and check for errors
        User.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'User Info updated',
                data: User
            });
        });
    });
};


// Handle delete User
exports.delete = function (req, res) {
    User.remove({
        _id: req.params.User_id
    }, function (err, User) {
        if (err)
            res.send(err);

        res.json({
            status: "success",
            message: 'User deleted'
        });
    });
};