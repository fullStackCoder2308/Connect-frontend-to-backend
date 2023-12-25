const express = require('express');
const cors = require('cors')
const app = express()


app.use(cors());
app.get('/',(req,res) => {
    res.status(200).send('Welcome to our Calculator')
})

app.get('/find',(req,res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    let sum = a+b;

    return res.status(200).send(sum.toString());
})


app.listen(3000,() => {
    console.log('Server established');
})