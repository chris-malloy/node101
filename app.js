// http is part o fnode core, it's built in, don't have to install it, just have to include it
var http = require('http');
// for fs, same as http
// fs stands for file system
// this gives node sccess to the THIS comupter's file system
var fs = require('fs');


function renderHomePage() {
    var theHTMLToGet = fs.readFileSync('homePage.html');
    return theHTMLToGet;
}

function renderScripts() {
    var jsToGet = fs.readFileSync('scripts.js');
    return jsToGet;
}
var server = http.createServer((req, res) => {

    if (req.url === '/') {
        // user wants the home page
        var homePageHTML = renderHomePage();
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end(homePageHTML);
    } else if (req.url === '/scripts.js') {
        var jsContent = renderScripts();
        res.writeHead(200, { 'content-type': 'text/javascript' });
        res.end(jsContent);
    } else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.end('<h1>Sorry this page does not exist.</h1>')
    }
    // res.writeHead(200, { 'content-type': 'text/html' })
    // res.end("<h1>Sanity Check</h1>");
})

// Tell the server we created with http.createServer to listen to port 8001.
// Whenever someone makes a request via HTTP to this port on THIS computer,
// the function/callback will fire with the req and res objects
server.listen(8001);
console.log("server is listening for HTTP traffic on port 8001...")