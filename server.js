const express = require('express')
const app = express()
const port = 3000
const sequelizeDB = require("./database.js");
const Utstyr = require("./models/Utstyr.js");
Utstyr.init(sequelizeDB);
Utstyr.sync({force: true});

app.use(express.json());
app.use(express.static('public'))
 
app.get('/test', async (req, res) => {
  Utstyr.create({
    name: "Nigger",
  });
  res.send(await Utstyr.findOne({where: {name : "Nigger"}, order: [ [ 'id', 'DESC' ]]}))
})

app.get('/getAll', async (req, res) => {
  
  res.send(await Utstyr.findAll())
})

app.post('/add', async (req, res) => {
  Utstyr.create({
    name: req.body.name,
    code: req.body.code,
    item: req.body.item
  });
  res.send(await Utstyr.findOne({where: {name : req.body.name,}, order: [ [ 'id', 'DESC' ]]}))
})

app.get('/:code', async (req, res) =>{
  await Utstyr.destroy({where: {code : req.params.code,}})
  res.send("pikk")
})  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})