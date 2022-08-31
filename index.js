
// import express from "express";
console.log("hi");
const express =  require("express");
const cors =  require("cors");
const app = express();
const data =  require("./Data.json");
var port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send(' world')
  })
  app.get('/data', (req, res) => {
    res.send('hello world');
    res.send(data);
  })

app.listen( port ,  () => {
    console.log('Example app listening on port');
  });