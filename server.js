const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()



app.use('/data',express.static(path.join(__dirname, 'data')))
//app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// // in latest body-parser use like below.
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())
//---------routs_imports------------
const services = require('./routs/services')
//r---------outs_add----------------
app.use("/services", services)
//-------updatetoken----------------
//refreshToken()

const port = 5000;
const server = async ()=>{
  try{
    app.listen(port, ()=> { console.log(`Server started on port: ${port}`) })
  }
  catch(e){
    console.log('Server invalid', e.message)
    process.exit()
  }
}
server()