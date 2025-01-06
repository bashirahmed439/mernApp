const { check } = require('express-validator');
const UserValidatoinRules = {};

UserValidatoinRules.rule = (method) => {
    switch (method) {
        case 'SaveUser': {
            return [
                check('name',"please enter valid name").notEmpty().trim(),
                check('email').isEmail().notEmpty().trim(),
                check('password').notEmpty().isInt().trim().isLength({min: 5}),
            ]
        }
       
    }
}


module.exports = UserValidatoinRules;