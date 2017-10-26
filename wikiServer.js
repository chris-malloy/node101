var http = require('http');
var fs = require('fs');

function renderHomePage() {
    var HTMLToGet = fs.readFileSync('index.html');
    return HTMLToGet;
}

function renderImg() {
    var imgToGet = fs.readFileSync('wat.jpg');
    return imgToGet;
}

function renderErrorPage() {
    var errorToGet = fs.readFileSync('error.html');
    return errorToGet;
}

var server = http.createServer((req, res) => {
    if (req.url === '/') { // home page
        var indexPage = renderHomePage();
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end(indexPage)
    } else if (req.url === '/wat.jpg') {
        var img = renderImg();
        res.writeHead(404, { 'content-type': 'image/jpg' });
        res.end(img);
    } else {
        var errorPage = renderErrorPage();
        res.writeHead(404, { 'content-type': 'text/html' });
        res.end(errorPage);
    }
})

server.listen(8000);