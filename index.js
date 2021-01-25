var express = require('express');
const https = require('https');
var app = express()
app.use(express.json())

app.post('/', (req, res) => {
  console.log(JSON.stringify(req.body));
  console.log(JSON.stringify(req.headers));
  const schemaReq = https.get(req.body.schemaURL, resp => {
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });
    resp.on('end', () => {
      console.log("Schema:\n");
      console.log(data);
    });
  })
  res.send('Hello World!')
})

app.listen(8080, () => {
  console.log(`Example app listening at http://localhost:${8080}`)
})
