module.exports.adicionar = function(apllication, req,res){
    res.render('admin/adicionarNoticia',{validacao : {}, noticia : {}})
}


module.exports.noticias_salvar = function(application,req,res){
    const noticia = req.body;

        console.log(noticia);
        req.assert('titulo','Titulo é obrigatório').notEmpty();
        req.assert('resumo','resumo é obrigatório').notEmpty();
        req.assert('resumo','resumo é deve ter entre 10 e 100 caracteres').len(10,100);
        req.assert('autor','Autor é obrigatório').notEmpty();
        req.assert('data_noticia','data da noticia é obrigatória').notEmpty();
        req.assert('noticia','Noticia é obrigatório').notEmpty();

        const errors = req.validationErrors();

        if(errors){
            res.render('admin/adicionarNoticia',{validacao: errors, noticia: noticia});
            return;
        }


        const connection = application.config.db();
        const noticiasModel =  new application.app.models.NoticiasModel(connection);
        
        noticiasModel.salvarNoticia(noticia, (erro, result) => {
           res.redirect('/noticias')
        });

}