const express = require('express')
const router = express.Router()

const messages = [
    {
        text: 'Hi there!',
        user: 'Amando',
        added: new Date()
    },
    {
        text: 'Hello world!!',
        user: 'Charles',
        added: new Date()    
    }
];

router.get('/',(req,res)=>{
    res.render('index',{title:'miniMessageBoard',messages:messages})
});

router.get('/new',(req,res)=>{
    res.render('form')
})
router.post('/new',(req,res)=>{
    messages.push({text:req.body.text,user:req.body.name,added:new Date()})
    res.redirect('/');
})
module.exports = router;