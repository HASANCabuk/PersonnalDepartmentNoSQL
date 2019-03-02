module.exports={
 mongodb:'mongodb://127.0.0.1:27017/PersonnalDepartment',
 webPort:process.env.PORT || 8000,
 httpMsgFormat:"JSON"
};
exports.addingFailures = ({location, msg, param, value, nestedErrors}) => {
    return {
        type: "Error",
        name: "Adding Failure",
        location: location,
        message: msg,
        param: param,
        value: value,
        nestedErrors: nestedErrors
    }
};