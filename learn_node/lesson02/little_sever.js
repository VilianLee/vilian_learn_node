const http = require('http');
const server = http.createServer();
server.listen(8808);

server.on('request',(request,response) => {

    const url = request.url;

    console.log(url);
    var responseStr;
    if (url === '/hello'){
        responseStr = 'hi there';
    }else if(url === '/bye'){
        responseStr = 'see you next time';
    }else {
        responseStr = 'I dont know what is your mean'
    }
    response.statusCode = 200;
    response.end(responseStr);
});