const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/events', async (req, res) => {
    const {type,data} = req.body;
    console.log('Received Event',req.body.type)

  if(type === 'CommentCreated'){
    const status=data.comment.includes('orange')?'rejected': 'approved';
    await axios.post('http://event-bus-srv:4005/events', {
      type:'CommentModerated',
      data:{
        id:data.id,
        postId:data.postId,
        status,
        comment:data.comment
      }
    }).catch((err) => {
        console.log(err.message);
      });
  }
   
    res.send({
        status: 'OK'
    })
})



app.listen(4003,()=>{
    console.log('Listening on 4003...')

})