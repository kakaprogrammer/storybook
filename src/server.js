const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db");
const morgan = require("morgan"); 
const exphbs = require("express-handlebars");
const path = require("path");

//load config
dotenv.config({path: "./config/config.env"})
connectDB();

const app = express();
if (process.env.NODE_ENV === 'development' )
  app.use(morgan("dev"))

//Handlebars: engine dùng để render code giao diện giống như html  
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');
//create public folder using contain file static 
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res, next) => {
  res.send("Hello")
})

/**
 * @desc Route
 */
app.use("/", require("./routes"))

const PORT = process.env.PORT | 3000;

app.listen( PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
})
