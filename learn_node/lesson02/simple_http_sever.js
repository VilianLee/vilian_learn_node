
//  https://baidu.com
//  https://xiedaimala.com/courses/f0135eff-a780-4f82-8bb0-eb4de591b067/tasks/9b86c788-9057-4146-8119-c009ffe2f90f
//  Uniform Resource Locator = URL
//  Schema://host:port/path?query#hash

// port: 22 ssh, 80:http 443:https 27017:mongodb
// ?a=1&b=2&c=3


console.log('holle mengqiqi!');
const http = require('http');
const qs = require('querystring');

const sever = http.createServer();

sever.listen(8880);

sever.on('request',(request,response) => {
    const url = request.url;
    console.log(url);

    const queryString = url.substr(url.indexOf('?')+1,url.length);

    const query = qs.parse(queryString);
    console.log(query);

    let responseStr ;

    if(url === '/hello'){
        responseStr = 'hi there'
    }else if(url === '/bye'){
        responseStr = 'see u next time'
    }else {
        responseStr = 'I cant understand what you said'
    }

    response.statusCode = 200;
    response.end(responseStr);
});

