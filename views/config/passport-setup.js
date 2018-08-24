const passport = require('passport');
const Google = require('passport-google-oauth20');
const keys = require('../keys');

passport.use(
    new GoogleStrategy({
        //option for the google strategy
        callbackUrl:'auth/google/redirect',
        clientId : keys.google.clientId,
        clientSecret : keys.google.clientSecret
},()=>{
    //passport callback function
})
)