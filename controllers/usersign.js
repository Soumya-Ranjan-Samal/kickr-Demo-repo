import { Router } from "express";

const userrouter = Router({mergeParams: true});

let userdata = []


// just a not so serius sign up function not a real working type okay!!!
userrouter.post('/signup', async (req,res)=>{
    console.log(req.body);
    userdata.push(req.body);
    res.send('Got it ');
});


export {userrouter};