const msg=require("../errors/htttpMsg")
module.exports.personnal=(req,res,next)=>{
    req.checkBody({
        firstName:{
            notEmpty:true
        },
        lastName:{
            notEmpty:true
        },
        department:{
            notEmpty:true
        } ,
        birthdate: {
            notEmpty:true
        },
        isMarried: {
            notEmpty:true
        },
        gender: {
            notEmpty:true
        },
        salary:{
            notEmpty:true
        }

    });
    if (req.validationErrors()) {
        return msg.withValidationError(res, req.validationErrors(true));
    }

    return next(); 
}