// Node is not JS, but reads JS.
// You can run $ python NAMEOFFILE but for node you run $ node NAMEOFFILE
// We still have access to all of the native elements

// var altTeams = [
//     'Braves',
//     'Falcons',
//     'United',
//     'Hawks'
// ]
// console.log(altTeams)

// var alt = {
//     bball: "Hawks",
//     football: "Falcons",
//     soccer: "United",
//     baseball: "Braves"
// }
// console.log(alt);
// console.log(window); // this line will error when running node because node does not know what window is.  Same with document

// So we are going to do something.
// Even though this is different from it's original intent, node.js is probably best suited for server stuff
// Just like Python, there are some modules BUILT IN to node.
// In order to access them, you use require.
var http = require('http');
// console.log(http);
// createServer is a method of the http object.
// It takes 1 argument., the function to run when someone connects via HTTP
var server = http.createServer((req, res) => {
    // console.log(req);
    // res = response = say SOMETHING back
    // writeHead sets the HTTP headers, 2 args
    // 1. status code - 200 means okay
    // 2. mime type - what you are sending
    res.writeHead(200, { 'content-type': 'text/text' });
    res.write("<h1>Hello, World</h1>");
    res.end()
});

// HTTP = 80 then add 2 0's...
// The number you put in is arbitrary BUT...
// you Must use a port higher than 1024
// because everything below belons to root
console.log(`server is listening for connections on port 8000`)
server.listen(8000)

// 127.0.0.1 = the local IP address
// Research your host file

// So, if you type localHost: YOURPORTNUMBER into browser, while server.listen() method is running, it will print to console stuff about the webpage