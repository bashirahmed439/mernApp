const { check } = require('express-validator');
const NotesValidatoinRules = {};
NotesValidatoinRules.rule = (method) => {
    switch (method) {
        case 'addnotes': {
            return [
                check('title',"Enter valid title").isLength({min:3}),
                check('description',"Description must be atleast 5 characters").isLength({min : 5}),
            ]
        }
       
    }
}


module.exports = NotesValidatoinRules;