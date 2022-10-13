const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()
const mongoURI = process.env.MONGO_URI
const db = mongoose.connection
const morgan = require('morgan')
const PORT = 3000
const methodOverride = require('method-override')

const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(morgan('dev'))
app.use(express.json())
app.use(methodOverride('_method'))

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use('/blog', require('./controllers/BlogRouter'))
app.use('/user', require('./controllers/UserRouter'))


app.get('/',(req,res) =>{
    res.render('pages/HomePage')
})
 
app.listen(PORT,() =>{
    console.log('Server is running on 3000');
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      db.once("open", () => {
        console.log("connected to mongo");
      });
})