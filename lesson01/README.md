#学习使用node文件模块
##判断文件是否存在

	var fs = require('fs');

	fs.stat('/xxx', function(err, stat){
	    if(stat&&stat.isFile()) {
	    	console.log('文件存在');
		} else {
		    console.log('文件不存在或不是标准文件');
	    }
	})

