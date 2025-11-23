


import express from "express";

const app=express();
app.use(express.json());


app.get("/",(req,res)=>{
    return res.json({
        message: "server is up"
    })
})

// app.post("/user",async(req,res)=>{
//     const {username, password}=req.body
//     const usr=await prismaClient.user({
//         data:{
//             username,
//             password
//         }
//     })

//     return res.json({
//         message: "user signup created"
//     })
// })



app.listen(8000);