'use strict';
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res)=>{
    res.json(req.query);
})
app.post('/', (req,res)=>{
    res.json(req.body)
})
app.get('/echo', (req,res)=>{
    res.json(req.query);
})

app.post('/echo', (req,res)=>{
    res.json(req.body)
})

app.post('/echo', (req,res)=>{
    res.json(req.body)
})

app.get('/ping', (req,res)=>{
    res.send("pong ")
})

app.get('/show-env', (req,res)=>{
    console.log(process.env)
    res.send(process.env.TEST_ENV)
})

// healthcheck
app.get('/diagnostic', (req,res)=>{
    res.send("OK")
})

// console.log(app)
module.exports = app



