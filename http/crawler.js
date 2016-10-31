//引入http模块
var http = require('http');
//引入url地址
var url = 'http://www.imooc.com/learn/271';

http.get(url,function(res){
    var html = '';
    res.on('data', function(data){
        html += data;
    })

    res.on('end',function(){
        console.log(html);
    })
}).on('err', function(){
    console.log('获取课程数据出错！');
})
