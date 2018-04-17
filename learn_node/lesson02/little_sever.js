
//  https://baidu.com
//  https://xiedaimala.com/courses/f0135eff-a780-4f82-8bb0-eb4de591b067/tasks/9b86c788-9057-4146-8119-c009ffe2f90f
//  Uniform Resource Locator = URL
//  Schema://host:port/path?query#hash

// port: 22 ssh服务, 80:http服务, 443:https服务, 27017:mongodb
// ?a=1&b=2&c=3

// HTTP请求第一部分（第一行） GET /index/ HTTP/1.1
// HTTP方法 GET POST PATCH PUT DELETE OPTIONS HEAD 等

// path: /user , get:获取所有用户 , post:创建用户 , patch: 修改用户信息 , put: 创建 , delete: 删除

// HTTP请求头：  第二行到空行 重要的键值对：
// Content-Type:请求体的类型（编码、格式等）
// Content-length: 请求体的长度
// Accept: 能够接受的返回体类型
// Cookie : cookie

// HTTP请求体和请求头以一个空行作为分隔符

// HTTP第三部分：  请求体 http-request/response-body
// 请求体的格式、编码通常由请求头里的content-type指定，可能会很大



const http = require('http');
const server = http.createServer();
const fs = require('fs');
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

                    /*if(contentType !== 'application/json'){
                        response.statusCode = 400;
                        response.end('error');
                    }*/

                    var requestBodyStr = '';
                    request.on('data',function (data) {
                        requestBodyStr += data.toString();
                    });
                    request.on('end',function () {
                        const user = qs.parse(requestBodyStr);
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
        case '/test.html':
            response.statusCode = 200;
            fs.createReadStream('./test.html').pipe(response);
            break;
        default:
            response.statusCode = 404;
            response.end('NOT FOUND');
            break;
    }


});