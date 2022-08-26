const http = require('http');

http.createServer((request,response)=>
{
    response.write("<h1>Hello this is me kiran aryal</h1>");
    response.end();
}).listen(3333);