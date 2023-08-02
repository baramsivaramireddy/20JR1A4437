const router = require("express").Router();


router.get('/' , (req,res) =>{

    res
        .status(200)
        .json({message : "testing"})
}) 



router.get("/trains")
router.get("/trains/:id")
module.exports = router


