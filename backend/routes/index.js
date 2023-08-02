const router = requrie("express").Router();


router.get('/' , (req,res) =>{

    res.json({message : "hello world"})
}) 