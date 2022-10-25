var express = require("express");
var router = express.Router();

const credential = [{
 
    email:"abc@gmail.com",
    password: "abc"
},

{ 
    email:"123@gmail.com",
    password: "123"
},
{
    email:"efg@gmail.com",
    password: "efg"
},

]

//login user
router.post('/login',(req,res)=>{

    const check = credential.filter(x=> req.body.email == x.email && req.body.password == x.password)
    if(check.length>0){
        req.session.user = check.email;
        res.redirect('http://localhost:3000/');
       //res.end("Login Successful");
    }else{
        res.end("Invalid Username");
    }
});

module.exports = router;