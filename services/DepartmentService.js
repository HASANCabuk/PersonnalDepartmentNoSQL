
const mongoose=require('mongoose')
Department = require("../model/Department");

// Handle index actions
exports.index = function (req, res) {
    Department.get(function (err, Departments) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Departments retrieved successfully",
            data: Departments
        });
    });
};

// Handle create Department actions
exports.new = function (req, res) {
    var Department=new Department();
    Department.Id=mongoose.Types.ObjectId();
    Department.Name=req.body.Name
    /*Department.name = req.body.name ? req.body.name : Department.name;
    Department.gender = req.body.gender;
    Department.email = req.body.email;
    Department.phone = req.body.phone;
*/
    // save the Department and check for errors
    Department.save(function (err) {
        // if (err)
        //     res.json(err);

        res.json({
            message: 'New Department created!',
            data: Department
        });
    });
};


// Handle view Department info
exports.view = function (req, res) {
    Department.findById(req.params.Department_id, function (err, Department) {
        if (err)
            res.send(err);
        res.json({
            message: 'Department details loading..',
            data: Department
        });
    });
};

// Handle update Department info
exports.update = function (req, res) {

    Department.findById(req.params.Department_id, function (err, Department) {
        if (err)
            res.send(err);

        Department.name = req.body.name ? req.body.name : Department.name;
        Department.gender = req.body.gender;
        Department.email = req.body.email;
        Department.phone = req.body.phone;

        // save the Department and check for errors
        Department.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Department Info updated',
                data: Department
            });
        });
    });
};


// Handle delete Department
exports.delete = function (req, res) {
    Department.remove({
        _id: req.params.Department_id
    }, function (err, Department) {
        if (err)
            res.send(err);

        res.json({
            status: "success",
            message: 'Department deleted'
        });
    });
};