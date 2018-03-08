var fs = require("fs");

console.log("查看 当前 目录");
fs.readdir(process.cwd(),function(error, files){
   if (error) {
   	return console.error(error);
   }
   files.forEach(
   	function (file){
   		console.log( file );
   	});
});
