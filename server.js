const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db");
const morgan = require("morgan"); 
const exphbs = require("express-handlebars");

//load config
dotenv.config({path: "./config/config.env"})
connectDB();

const app = express();
if (process.env.NODE_ENV === 'development' )
  app.use(morgan("dev"))

//Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'handlebars');


const PORT = process.env.PORT | 3000;

app.listen( PORT, () => {
  console.log('')
})
