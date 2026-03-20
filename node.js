import express from "express"

const app = express()

app.get("/",(req,res)=>{
    res.send("<h2>hellewww</h2>")
})

app.listen(3000,'0.0.0.0', ()=>{
    console.log("listening on port 9000")
})
