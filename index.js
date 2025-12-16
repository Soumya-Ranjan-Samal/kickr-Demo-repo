import express from "express";

const port = 3000;
const app = express();

app.get('/', (req,res)=>{
    let now = new Date();
    let time = now.toLocaleTimeString().split(':')[0];
    if(time < 12 ){
        res.send('Good Morning...');
    }else if(time >= 12 && time < 16 ){
        res.send('Good Afternoon...');
    }else if(time >= 16 && time < 24){
        res.send('Good Evening...');
    }else{
        res.send('Hello dear...');
    }
});

app.get('/newbrnchrought', (req,res)=>{
    res.send('this is from the new branch');
});

app.listen(port, ()=>{
    console.log('Server Statred Listening...');
});