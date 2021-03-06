
const Personnal = require("../model/Personnal");
const Department=require("../model/Department");

// Handle index actions
exports.index = function (req, res) {
    Personnal.find((err, Personnals) =>{
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

    Personnal.findOne({firstName:req.body.firstName,lastName:req.body.lastName}).then(per=>{
        if(per)
        {
            res.json({
                message:req.body.firstName+" "+req.body.lastName+" daha önce eklenmiş" 
                });     
        }else{
            Department.findOne({name:req.body.department}).then(dep=>{
                if(!dep){
                    res.json({
                        message:req.body.department+" departmanı mevcut değil." 
                        });     
                }else{
                    const personnal = new Personnal(req.body);
                    // save the Personnal and check for errors
                        personnal.save()
                        .then(personnal=>{
                            res.json({
                                message: 'New Personnal created!',
                                data: Personnal
                            });
                        }).catch(err=>{
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
            });
        }
    }).catch(err=>{
        res.json({
            status: "error",
            message: err      
    });
    });
};


// Handle view Personnal info
exports.view = function (req, res) {
    Personnal.findById(req.params.per_id, (err, Personnal)=> {
        if (err){
            res.json({
                status: "error",
                message: err
           });
        }
        res.json({
            message: 'Personnal details loading..',
            data: Personnal
        });
    });
};

// Handle update Personnal info
exports.update = function (req, res) {

    Personnal.findById({_id:req.params.per_id}, (err,Personnal) =>{
        if (err){
            res.json({
                status: "error",
                message: err
           });  
        }else{
            Personnal.department = req.body.department;
            // save the Department and check for error
            Personnal.save()
                .then(personnal=> {
                    res.json({
                        message: 'Personnal Info updated',
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


// Handle delete Personnal
exports.delete = function (req, res) {
    Personnal.remove({
        _id: req.params.per_id
    }, function (err, Personnal) {
        if (err)
            res.send(err);

        res.json({
            status: "success",
            message: 'Personnal deleted'
        });
    });
};