#!/usr/bin/env node


var file = process.argv[2];
var fs = require("fs");
/*

console.log("查看 当前 目录");
fs.readdir(file,function(error, files){
   if (error) {
   	return console.error(error);
   }
   files.forEach(
   	function (file){
   		console.log( file );
   	});
});
*/
fs.stat(file,function (error,stat) {
	if (stat&&stat.isFile()){
		console.log("文件存在");
        var data = fs.readFileSync(file,"utf-8");
        console.log(data);
        console.log("READ FILE ASYNC END");
	}else {
		console.log("文件不存在或不是标准文件")
	}
});