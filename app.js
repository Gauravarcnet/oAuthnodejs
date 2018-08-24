const express = require('express');
const app = express();
const mongoose=require('mongoose');
const routes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');


const url='mongodb://localhost:27017/oAuth';
const connect=mongoose.connect(url,{
  useNewUrlParser:true
});
if(connect){
    console.log("connected");
    
}


//set up view engine
app.set("view engine" ,'ejs');
app.use('/auth',routes);

app.get('/' , (req , res) => {
    res.render('home');
})
app.listen(2555 , ()=> {
    console.log("listening");
    
})