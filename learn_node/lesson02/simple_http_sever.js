
//  https://baidu.com
//  https://xiedaimala.com/courses/f0135eff-a780-4f82-8bb0-eb4de591b067/tasks/9b86c788-9057-4146-8119-c009ffe2f90f
//  Uniform Resource Locator = URL
//  Schema://host:port/path?query#hash

// port: 22 ssh服务, 80:http服务, 443:https服务, 27017:mongodb
// ?a=1&b=2&c=3

// HTTP请求第一部分（第一行） GET /index/ HTTP/1.1
// HTTP方法 GET POST PATCH PUT DELETE OPTIONS HEAD 等

//path: /user , get:获取所有用户 , post:创建用户 , patch: 修改用户信息 , put: 创建 , delete: 删除


console.log('holle node!');
const http = require('http');  //调用http模块
const qs = require('querystring'); //查询字符串模块

const sever = http.createServer();  //http模块的创建服务器方法

const users = [];

sever.listen(8880);  //服务器开始监听8880端口

sever.on('request',(request,response) => { //用户发起url请求
    const url = request.url; //获取用户请求的url
    console.log(url);

    const queryString = url.substr(url.indexOf('?')+1,url.length); //定义用户请求url的'?'之后的字符串
    const path = url.substr(0,url.indexOf('?'));
    console.log(path);

    const query = qs.parse(queryString);  //将url字符串转化为对象数组
    console.log(query);

    let responseStr ;

    switch (path){
        case '/user':

            switch (request.method){
                case 'GET':
                    response.statusCode = 200;
                    response.end(JSON.stringify(users));
                    break;
                case 'POST':

                    break;
            }

            break;
        default:
            response.statusCode =404;
            response.end('NOT FOUND');
    }

    response.statusCode = 200;
    response.end(responseStr);
});

