const express = require('express')
const app = express()

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('home/index')
});
app.get('/tecnologia',(req,res)=>{
    res.render('section/tecnologia')
});
app.get('/moda',(req,res)=>{
    res.render('section/moda')
});

app.listen(3000,()=>{
    console.log('Backend Running(Express)...')
})