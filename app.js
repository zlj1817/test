console.log("app start");
var http=require('http');
function callback(req,res){
res.writeHead(200,{'Content-Type':'text/plain'});
//res.write("start<br>");
res.end("hello world")
}
http.createServer(callback).listen(8888);
console.log('server run');