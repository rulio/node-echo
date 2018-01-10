'use strict';
const express = require('express')
const app = require('./app')

// console.log('SERVER')
// console.log(app)
app.listen(3000, ()=>console.log('This runs in the container'))
