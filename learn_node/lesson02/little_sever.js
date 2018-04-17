const http = require('http');
const server = http.createServer();
const qs = require('querystring'); //查询字符串模块
server.listen(8808);

var users = [];

server.on('request',(request,response) => {

    const url = request.url;

    console.log(url);

    const path = url.substr(0,url.indexOf('?'));
    console.log(path);
    const queryString = url.substr(url.indexOf('?')+1,url.length); //定义用户请求url的'?'之后的字符串
    const query = qs.parse(queryString);  //将url字符串转化为对象数组
    console.log(query);

    switch (path){
        case '/user':
            switch (request.method){
                case 'GET':
                    response.statusCode = 200;
                    response.end(JSON.stringify(users));
                    break;
                case 'POST':
                    const contentType = request.headers['content-type'];

                    if(contentType !== 'application/json'){
                        response.statusCode = 400;
                        response.end('error');
                    }

                    var requestBodyStr = '';
                    request.on('data',function (data) {
                        requestBodyStr += data.toString();
                    });
                    request.on('end',function () {
                        const user = JSON.parse(requestBodyStr);
                        users.push(user);
                        response.statusCode = 200;
                        response.end(JSON.stringify(users));
                    });


                    /*const user = {name:Math.floor(Math.random() * 100)};
                    users.push(query);
                    response.statusCode = 200;
                    response.end(JSON.stringify(users));*/
                    break;
            }

            break;
        default:
            response.statusCode = 404;
            response.end('NOT FOUND');
            break;
    }


});