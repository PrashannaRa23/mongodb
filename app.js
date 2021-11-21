const express = require("express")
const app = express()
const mongoose = require('mongoose');
const url = "mongodb+srv://temp:12345@my-first-cluster.7akde.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const mySchema = require('./studentsSchema');
mongoose.connect(url).then(()=>console.log("Connected to database"));
app.use(express.json())
app.post("/add-new-post",async(req, res)=>{
    const mysname = req.body.sname;
    const myregno = req.body.regno;
    const mymarks = req.body.marks;

    try{
        const newstd = new mySchema(
            {
                sname:mysname,
                regno:myregno,
                marks:mymarks
            }
        )
        const savedstd = await newstd.save()
        res.json(
            {"message":"Student info saved", "data":savedstd}
        )
    }
    catch(err){
            res.json(err);
    }

})
app.use("/", (req,res)=>{
    //res.send("Hello");
    res.json(
        {"message" : "Express server started"}
    )
})

app.listen(3001, ()=>console.log("Express server started"))