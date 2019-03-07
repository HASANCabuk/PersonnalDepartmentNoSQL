
const User = require("../model/User");

// Handle index actions
exports.index = function (req, res) {
    User.find(function (err, Users) {
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
  

   User.findOne({firstName:req.body.firstName,lastName:req.body.lastName})
   .then(user=>{
        if(user){
            res.json({
                message:req.body.firstName+" "+req.body.lastName+" daha önce eklenmiş" 
                });  
        }else{
            var user = new User(req.body);
            user.save()
            .then(user=>{
                res.json({
                    message: 'New User created!',
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
    // save the User and check for errors
   
};


// Handle view User info
exports.view = function (req, res) {
    User.findById(req.params.us_id, function (err, User) {
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

    User.findById(req.params.us_id, function (err, User) {
        if (err){
            res.json({
                status: "error",
                message: err
           });  
        }else{
            User.firstName = req.body.firstName ? req.body.firstName : User.firstName;
            User.lastName=req.body.lastName ? req.body.lastName : User.lastName;
            User.password=req.body.password;
            User.role=req.body.role
    
            // save the User and check for errors
            User.save(function (err) {
                if (err)
                    res.json(err);
                res.json({
                    message: 'User Info updated',
                    data: User
                });
            });
        }
       
    });
};


// Handle delete User
exports.delete = function (req, res) {
    User.remove({
        _id: req.params.us_id
    }, function (err, User) {
        if (err)
            res.send(err);

        res.json({
            status: "success",
            message: 'User deleted'
        });
    });
};