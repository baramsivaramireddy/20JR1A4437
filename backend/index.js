
const express =  require("express");

const app = express();
const PORT = 8000
const cors = require("cors");

app.use(cors())


app.use((req,res,next) =>{

    console.log(`request at ${req.url} at methdo ${req.method} and body ${req.body}`)
    next();
})

const router = require("./routes/index")
app.use('/' ,router)


app.listen(PORT , ()=> {
    console.log(`server started at port ${PORT}`)
})