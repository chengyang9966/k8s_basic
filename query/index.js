const express = require('express');
// const {randomBytes} =require('crypto');
const { cors } = require('../helper/middleware/cors');
const { handlerEvent } = require('./helper/event');
const axios = require('axios');

const posts = {};

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors);
app.get('/posts', async (req, res) => {
    res.send(posts);
})

app.post('/events', async (req, res) => {
    const { type, data } = req.body;
    console.log('Received Event', req.body.type)
    handlerEvent(type,data,posts)
    res.send({ 'status': 'OK' })
})




app.listen(4002, async() => {
    console.log('Listening on 4002...')
    try {
    const res=await axios.get('http://event-bus-srv:4005/events');
        for (const event of res.data) {
            console.log('proccessing event',event.type);
            handlerEvent(event.type,event.data,posts)
        }
    } catch (error) {
        console.log('error',error.message)
    }
})