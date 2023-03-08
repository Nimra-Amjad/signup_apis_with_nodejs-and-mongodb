const express=require('express');
const app=express();
require('./src/db/conn');
const Users=require('./src/models/registers')

const port=process.env.port||3000;
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/registers',(req,res)=>{
    res.render('register');
});

//create new user in database
app.post('/registers',async (req,res)=>{
    try{
        console.log(req.body.username);
        res.send(req.body.username);
    }catch(error){
        res.status(400).send(error)
    }
});


app.listen(port,()=>{
    console.log("hellooooo"+port);
});