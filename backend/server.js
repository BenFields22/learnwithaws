const express = require('express')
var bodyParser = require('body-parser');
const app = express()
const port = 8080

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/api/', (req, res) => res.send('Hello World!'))

app.get('/api/sendEmail',(req,res)=>{
    console.log(JSON.stringify(req.body));
    res.status(200).send("Sent Email body is ");
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))