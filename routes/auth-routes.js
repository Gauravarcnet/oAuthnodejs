const router = require('express').Router();
const passport = require('passport');


//auth login
router.get('/login', (req , res) => {
    res.render('login');
});

//auth logout
router.get('/logout', (req , res) => {
    // handl with passport
    res.send("logout s");
    });

//auth with google
router.get('/google',passport.authenticate('google',{
    scope:['profile']
}));

router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{

    res.send("hello buddy");
    console.log(req);
    
});

module.exports = router;