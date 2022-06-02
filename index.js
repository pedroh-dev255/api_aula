const express=require('express');
const app = express();
const porta = process.env.PORT;


app.get('/', (req,res)=>{
  res.send('Tamo junto')
});


app.listen(porta,()=>{
  console.log("API ON <express_version>")
});