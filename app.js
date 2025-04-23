const express=require("express")
const app=express()
const mongoose=require("mongoose")
const User=require("./model/Employee")
const dotenv=require("dotenv")
dotenv.config()

app.use(express.json())

app.get("/fetch",async(req,res)=>{
   
    try{
        const user=await User.find({})
        res.send(user)
     }
     catch(error){
         res.send(error.message)
     }
})

app.post("/create",async(req,res)=>{

try{
   const user=await User.create(req.body)
   res.send(user)
}
catch(error){
    res.send(error.message)
}
})

app.put("/update/:id",async(req,res)=>{

    try{
        const _id=req.params.id
        const user=await User.findByIdAndUpdate(_id,req.body, {new:true});
        res.send(user)
     }
     catch(error){
         res.send(error.message)
     }

})

app.delete("/delete/:id",async(req,res)=>{

    try{
        const _id=req.params.id
        const user=await User.findByIdAndDelete(_id)
        res.send(user)
     }
     catch(error){
         res.send(error.message)
     }

})

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.mongo_uri);
  console.log("connected to atlas")

}



app.listen(3000,(req,res)=>{
    console.log("db connected")
})

//Uelv6vUV02dlKQ3G