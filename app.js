// http is part of node core, it's built in, don't have to install it, just have to include it
var http = require('http'); // bring in http
// for fs, same as http
// fs stands for file system
// this gives node success to the THIS computer's file system
var fs = require('fs'); // bring in fs


function renderHomePage() {
    var theHTMLToGet = fs.readFileSync('homePage.html');
    return theHTMLToGet;
} // find HTML file, set to var, return var

function renderScripts() {
    var jsToGet = fs.readFileSync('scripts.js');
    return jsToGet;
} // find js file, set to var, return var

var server = http.createServer((req, res) => { // make server
    if (req.url === '/') { // ask for top of directory, display this...usually index.html
        // user wants the home page
        var homePageHTML = renderHomePage();
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end(homePageHTML);
    } else if (req.url === '/scripts.js') { // ask for scripts, display scripts
        var jsContent = renderScripts();
        res.writeHead(200, { 'content-type': 'text/javascript' });
        res.end(jsContent);
    } else if (req.url === '/samus.jpeg') { // ask for image, display image
        var img = fs.readFileSync('samus.jpeg');
        res.writeHead(200, { 'content-type': 'image/jpeg' })
        res.end(img)
    } else { // ask for non-existant file, tell user what happened.
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