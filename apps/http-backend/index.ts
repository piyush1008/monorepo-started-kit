

import express from "express";

const app=express();


app.get("/",(req,res)=>{
    return res.json({
        message: "server is up"
    })
})




app.listen(8000);