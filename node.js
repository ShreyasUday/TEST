import express from "express"

const app = express()

app.get("/",(req,res)=>{
    res.send("<h2>hellewww</h2>")
})

app.listen(9000,()=>{
    console.log("listening on port 9000")
})