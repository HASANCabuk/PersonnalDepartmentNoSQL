const Department = require("../model/Department");
const DepartmentError=require("../errors/department")
// Handle index actions
exports.index = function (req, res) {

    Department.find( (err, Departments) =>{
        if (err) {
            res.json({
                status: "error",
                message: err
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
  
        Department.findOne({name:req.body.name}).then(dep=>{
            if(dep){
                res.json({
                    message:req.body.name+" "+"daha önce eklenmiş" 
                    });     
            }else{
                const department=new Department(req.body);
                department.save().then(department=>{
                    res.json({
                        message: 'New Department created!',
                        data: department
                    });
                })
                .catch(err=>{
                    res.json({
                        status: "error",
                        message: err
                    });
                });
            }                  
        }).catch(err=>{
            res.json({
                status: "error",
                message: err
            });
        })  
};


// Handle view Department info
exports.view = function (req, res) {
    Department.findById({_id:req.params.dep_id}, (err, Department) =>{
        if (err){
            res.json({
                status: "error",
                message: err
           });
        }
        res.json({
            message: 'Department details loading..',
            data: Department
        });
    });
};

// Handle update Department info
exports.update = function (req, res) {

    Department.findById({_id:req.params.dep_id}, (err, Department) =>{
        if (err){
            res.json({
                status: "error",
                message: err
           });  
        }else{
            Department.name = req.body.name;
            // save the Department and check for error
            Department.save()
                .then(department=> {
                    res.json({
                        message: 'Department Info updated',
                        data: Department
                    });
                }).catch(err=>{
                    res.json({
                        status: "error",
                        message: err
                    });
                });
           }
    });
};

// Handle delete Department
exports.delete = function (req, res) {
    Department.remove({
        _id: req.params.dep_id
    }, function (err, Department) {
        if (err)
            res.send(err);

        res.json({
            status: "success",
            message: 'Department deleted'
        });
    });
};

