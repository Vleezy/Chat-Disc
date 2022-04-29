let mongoose = require('mongoose'),
express = require('express'),
router = express.Router();

const { json } = require('body-parser');
// New User Model 
let newUserSchema = require('../models/NewUser');

// CREATE New User Account
router.route('/create-new-user').post((req, res, next) => {
    newUserSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

// READ Existing Users
router.route('/').get((req, res) => {
    newUserSchema.find((error, data) => {
        if(error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// GET Single Existing User 
router.route('/edit-existing-user/:id').get((req, res) => {
     if(error) {
         return next(error)
     } else {
         res.json(data)
     }
})

// UPDATE Existing User Info
router.route('/update-existing-user/:id').put((req, res, next) => {
    newUserSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if(error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log(`Existing Users Information Successfully Updated!`)
        }
    })
})

// DELETE USER's Account
/****
 * 
 * I want to implement functionality where user is able to restore
 * there account as long as it is before 30 days. 
 * Maybe move to a seperate database which deletes information 
 * after a specific time period (In this case 30 days)
 */
router.route('/delete-user-account/:id').delete((req, res, next) => {
    newUserSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if(error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = router;

/** Additional Ideas to Consider In Future Releases
 * - Forgot Password Functionality, maybe have a text message or email 
 *    link to reset password(Reset password page)
 * - Create different profiles for one account. Similar to Netflixs feature
 * - 
 * 
 * 
 * 
 * 
 */

