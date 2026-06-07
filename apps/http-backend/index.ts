import express from 'express';
import prisma from '@repo/db/prisma'
const app = express();


app.get("/",(req,res)=>{
    
})




app.listen(3000,(err)=>{
    if(err){
        console.log(err);
        return;
    }

    console.log("Server is running on ",3000);
})