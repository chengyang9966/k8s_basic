const express = require('express');
const {randomBytes} =require('crypto');
const { cors } = require('../helper/middleware/cors');
const axios = require('axios');

const commentByPostsId = {};

const app =express();

app.use(express.urlencoded({extended: true})); 
app.use(express.json());   
app.use(cors);

app.get('/posts/:id/comments',async(req,res)=>{
    res.send(commentByPostsId[req.params.id] || []);
})

app.post('/posts/:id/comments',async(req,res)=>{
    const id = randomBytes(4).toString('hex');
    const postId=req.params.id;
    console.log('postId',postId)
    const {comment} = req.body
    let commentsArray=commentByPostsId[postId]?commentByPostsId[postId]
    :[];

    commentsArray.push({
        id,comment,status:'pending'
    });
    commentByPostsId[postId]=commentsArray;
    await axios.post('http://event-bus-srv:4005/events', {
        type:'CommentCreated',
        data:{
            id,
            comment,
            postId,
            status:'pending'
        }
    })
    res.status(201).send(commentByPostsId[postId])
})

app.post('/events',async(req,res)=>{
    console.log('Received Event',req.body.type)
    const {type,data}=req.body;

    if(type === 'CommentModerated'){
        const {postId,status,id}=data;

        const comments=commentByPostsId[postId];
        const comment=comments.find(x=>x.id===id);
        comment.status=status;
        await axios.post('http://event-bus-srv:4005/events', {
            type:'CommentUpdated',
            data
          }).catch((err) => {
              console.log(err.message);
            });
    }
    res.send({'status':'OK'})
})


app.listen(4001,()=>{
    console.log('Listening on 4001...')
})