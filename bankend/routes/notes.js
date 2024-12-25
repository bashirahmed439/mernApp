const express = require('express');
const router = express.Router();


router.get('/api/notes' ,  (req, res)=>{
    obj = {
        name: "bashnotesir"
    }

    res.json(obj);
})  

module.exports = router;