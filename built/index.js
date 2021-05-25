"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var host = 'localhost';
var port = 9990;
var requestListener = function (req, res) {
    var contentEncoding = req.headers['content-encoding'];
    if (contentEncoding) {
        var ce = contentEncoding.split(',');
        var encoding = ce[ce.length - 1].trim;
        res.writeHead(200);
        res.end("server says " + encoding);
    }
    res.writeHead(200);
    res.end('Heeeellllllllllloooooooooo');
};
var server = http.createServer(requestListener);
server.listen(port, host, function () {
    console.log("Server is running on http://" + host + ":" + port);
});
