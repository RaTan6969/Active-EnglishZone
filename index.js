
console.log("hi");
const express =  require("express");
const cors =  require("cors");
const app = express();
const data =  require("./Data.json");
const sdata =  require("./Subdata.json");
var port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send(data);
  })
  app.get('/data', (req, res) => {
    
    res.send(sdata);

  })

app.listen( port ,  () => {
    console.log('Example app listening on port');
  });