import express from 'express';


const app = express();





app.listen(3000,(err)=>{
    if(err){
        console.log(err);
        return;
    }

    console.log("Server is running on ",3000);
})