const msg=require("../errors/htttpMsg")
module.exports.department=(req,res,next)=>{
    req.checkBody({
        name:{
            notEmpty:true
        }
    });
    if (req.validationErrors()) {//Yorum
        return msg.withValidationError(res, req.validationErrors(true));
    }

    return next(); 
}