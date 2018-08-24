const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('../config/keys');
const User = require('../model/database');


passport.use(
    new GoogleStrategy({
        //option for the google strategy
        clientID: keys.google.clientId,
        clientSecret : keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
},(accessToken,refreshToken,profile,done)=>{
    //passport callback function
    // console.log("passport callback");
    // console.log(profile);
    User.findOne({googleId:profile.id}).then((currentUser)=>{
        if(currentUser){
            //already have the user
            console.log("user already exists");
            
        } else{
            new User({
                username : profile.displayName,
                googleId : profile.id
            }).save().then((newUser)=>{
                console.log("new user created" + newUser);
                
            });
        }
    });
    
    
    
})
)