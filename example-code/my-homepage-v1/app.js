const express = require('express')
const app = express()

app.listen(3000, () => {
console.log('server running on port 3000')
})
const cors = require('cors')
app.use(cors())



app.use(express.static(__dirname));


app.set('view engine','ejs');

app.get('/home',(req,res)=>{
  res.render('./index.ejs')
})
app.get('/call',(req,res)=>{
  const request = require('request');
  var call_api = {
    uri: `http://my-api:5000/`,
    method: 'POST',
  };
  request(call_api, function (error, response, answer) {
    res.send(answer)
  });
});

app.post('/ajax',(req,res)=>{
  const request = require('request');
  var call_api = {
    uri: `http://my-api.test-api.svc.cluster.local:5000/`,
    method: 'POST',
  };
  request(call_api, function (error, response, answer) {
    res.send(answer)
  });
});

