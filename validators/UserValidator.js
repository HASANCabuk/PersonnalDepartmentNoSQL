const msg=require("../errors/htttpMsg")
module.exports.user=(req,res,next)=>{
    req.checkBody({
        firstName:{
            notEmpty:true
        },
        lastName:{
            notEmpty:true
        },
        password: {
            notEmpty:true
        },
        role:{
            notEmpty:true
        }

    });
    if (req.validationErrors()) {
        return msg.withValidationError(res, req.validationErrors(true));
    }

    return next(); 
}