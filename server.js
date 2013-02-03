var http = require('http');

http.createServer(function (req, res) {
    console.log('Ladies and Gentlemen, We got the request for ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello, TR16 Attendes!</h1><br>[helloworld sample; iisnode version is ' + process.env.IISNODE_VERSION + ', node version is ' + process.version + ']');
}).listen(process.env.PORT);  
