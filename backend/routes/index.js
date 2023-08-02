const router = requrie("express").Router();


router.get('/' , (req,res) =>{

    res
        .status(200)
        .json({message : "testing"})
}) 

module.exports = router


// In these app we have to build a  two  api endpoints
// 1 end point 
//         for gettin all trains data and sort them based on results

// 2 end point 
//         for single train

// we have get data from john server

//  implementation detail

// get access token for every request
//  when 1 end point got hit . call the john server for all trains
//  when 2 end point got hit  . call john server for  one train