const http = require('http')
const server = http.createServer(function (req, res){
    const categoria = req.url;

    if(categoria == '/tecnologia'){
        res.end("<html><body>Noticias de Tecnologia</body></html>")
    }
    else if(categoria =='/moda'){
        res.end("<html><body>Noticias de Moda</body></html>")
    }
    else{
        res.end("<html><body>Portal de Noticias</body></html>")
    }
}).listen(3000,()=>console.log("Backend responding..."));
    
