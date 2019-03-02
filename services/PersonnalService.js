
Personnal = require("../model/Personnal");

// Handle index actions
exports.index = function (req, res) {
    Personnal.get(function (err, Personnals) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Personnals retrieved successfully",
            data: Personnals
        });
    });
};

// Handle create Personnal actions
exports.new = function (req, res) {
    var Personnal = new Personnal();
    Personnal.name = req.body.name ? req.body.name : Personnal.name;
    Personnal.gender = req.body.gender;
    Personnal.email = req.body.email;
    Personnal.phone = req.body.phone;

    // save the Personnal and check for errors
    Personnal.save(function (err) {
        // if (err)
        //     res.json(err);

        res.json({
            message: 'New Personnal created!',
            data: Personnal
        });
    });
};


// Handle view Personnal info
exports.view = function (req, res) {
    Personnal.findById(req.params.Personnal_id, function (err, Personnal) {
        if (err)
            res.send(err);
        res.json({
            message: 'Personnal details loading..',
            data: Personnal
        });
    });
};

// Handle update Personnal info
exports.update = function (req, res) {

    Personnal.findById(req.params.Personnal_id, function (err, Personnal) {
        if (err)
            res.send(err);

        Personnal.name = req.body.name ? req.body.name : Personnal.name;
        Personnal.gender = req.body.gender;
        Personnal.email = req.body.email;
        Personnal.phone = req.body.phone;

        // save the Personnal and check for errors
        Personnal.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Personnal Info updated',
                data: Personnal
            });
        });
    });
};


// Handle delete Personnal
exports.delete = function (req, res) {
    Personnal.remove({
        _id: req.params.Personnal_id
    }, function (err, Personnal) {
        if (err)
            res.send(err);

        res.json({
            status: "success",
            message: 'Personnal deleted'
        });
    });
};