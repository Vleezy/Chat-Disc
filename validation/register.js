const Validator = require('validator');
const isEmpty = require('is-empty');


function validateRegisterInput(data) {
    let errors = {};

    // Convert empty fields to an empy string so we can validate.
    data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
    data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
    data.emailAdd = !isEmpty(data.emailAdd) ? data.emailAdd : '';
    
   // The following fields might be used for a seperate page
    data.userName = !isEmpty(data.userName) ? data.userName : '';
    data.dateOfBirth = !isEmpty(data.dateOfBirth) ? data.dateOfBirth : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    // Name Check Validator
    if (Validator.isEmpty(data.firstName)) {
        errors.firstName = "First Name is required.";
    } else if (Validator.isEmpty(data.lastName)) {
        errors.lastName = "Last Name is required.";
    }

    // Email Check - In future releases, I need functionality 
    // that checks whether email is already being used by another user.
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
      } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    // Username Check - In future releases, I need to make sure username is not already
    // being used. Furthermore, I need to check it follows a specific format(havent decided yet)
    if (Validator.isEmpty(data.userName)) {
        errors.userName = "User name is required";
    } 

    // In future releases, we want to test out a password generator feature where your 
    // password is randomly generated for you and then it can be store on a seperate 
    // webapp (which we will create) to store all these randomly generated passwords. I 
    // believe a benefit of this is not needing to remember all the passwords. 

    // We might consider adding phone number to the registration. Maybe other info as well.
    // In future releases, we can consider allowing users above a certain age to sign up only.
    return {
        errors,
        isValid: isEmpty(errors)
    }
}