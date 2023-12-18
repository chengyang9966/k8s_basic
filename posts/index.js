const express = require('express');
const {randomBytes} =require('crypto');
const { cors } = require('../helper/middleware/cors');
const axios = require('axios');

const post = {};

const app =express();

app.use(express.urlencoded({extended: true})); 
app.use(express.json());   

app.use(cors);

app.get('/health',async(req,res)=>{
    res.send({message:'All Good'});
})

app.get('/posts',async(req,res)=>{
    res.send(post);
})

app.post('/posts/create',async(req,res)=>{
    const id = randomBytes(4).toString('hex');
    const {title} = req.body
    post[id]={
        id,title,createdAt:new Date()
    }
    await axios.post('http://event-bus-srv:4005/events', {
        type:'PostCreated',
        data:post[id]
    })
    res.status(201).send(post[id])
})

app.post('/events',async(req,res)=>{
    console.log('Received Event',req.body.type)
    res.send({'status':'OK'})
})

app.listen(4000,()=>{
    console.log('65');
    console.log('Listening on 4000...')
})