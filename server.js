const express = require("express")
const db = require("./db/index")

var cors = require('cors')
let app = express();
app.use(express.urlencoded({ extended: true })) // to parse the data
app.use(express.json())
app.use(cors())



app.use('/goods', require('./router'));
app.use('/Typs', require('./router'));

let port = 4000;

app.listen(port, ()=> {
  console.log(`listening on port ${port}`)
})
