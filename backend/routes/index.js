const router = require("express").Router();


router.get('/' , (req,res) =>{

    res
        .status(200)
        .json({message : "testing"})
}) 

const AllTrains = require("../controllers/AllTrains")
const SpecificTrain = require("../controllers/SpecificTrain")
router.get("/trains" ,AllTrains )
router.get("/trains/:id", SpecificTrain)
module.exports = router


