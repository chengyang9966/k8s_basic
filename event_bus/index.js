const express = require('express');
const axios = require('axios');

const events= [];
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/events', async (req, res) => {
    const body = req.body;
    events.push(body);
    await axios.post('http://posts-clusterip-srv:4000/events', body).catch((err) => {
        console.log(err.message);
      });
    await axios.post('http://comment-srv:4001/events', body).catch((err) => {
        console.log(err.message);
      });
    await axios.post('http://query-srv:4002/events', body).catch((err) => {
        console.log(err.message);
      });
    await axios.post('http://moderation-srv:4003/events', body).catch((err) => {
        console.log(err.message);
      });

    res.send({
        status: 'OK'
    })
})

app.get('/events',(req,res)=>{
  res.send(events)
})
app.listen(4005,()=>{
    console.log('Listening on 4005...')

})