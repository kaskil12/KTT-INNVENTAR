const express = require('express')
const app = express()
const port = 3000
const sequelizeDB = require("./database.js");
const Utstyr = require("./models/Utstyr.js");
Utstyr.init(sequelizeDB);
Utstyr.sync({force: true});


app.use(express.static('public'))
 
app.get('/test', async (req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})