const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateLoginDetails(data) {
    let errors = {};

    // Convert the empty fields to an empty string so we can use validator functions,
    data.email = !isEmpty(data.email) ? data.email : "";
    data.username = !isEmpty(data.username) ? data.username : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    // Email Checks
    if(Validator.isEmpty(data.email)) {
        errors.email = "Email field is required.";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid.";
    }

     // Username Check
     if (Validator.isEmpty(data.username)) {
        errors.username = "Password field is required.";
    }

    // Password Check
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required.";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};