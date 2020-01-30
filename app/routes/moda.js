module.exports =(app)=>{
    app.get('/moda',(req,res)=>{
        res.render('section/moda')
    });
}