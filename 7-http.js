const http = require('http')

const server = http.createServer((req,res)=>{
    //res.write("Welcome to our Homepage")
    //res.end()
    //Home Address
    if(req.url==='/'){
        //console.log(req)
        res.end("Welcome to my Homepage")
    }
    //About Section
    else if(req.url==='/about'){
        res.end('Here goes about section')
    }
    //Not Found
    else {
        res.end(`
    <h1 style="text-align: center">Oops!</h1>
    <p>
        The page that you are trying to reach does not exist
    </p>
    <a href="/">Homepage</a>
    `)
    }
})

server.listen(5000)
