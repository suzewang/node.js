#!/usr/bin/node

const http=require('http'),
         log=console.log,
          fs=require('fs');

var buf={};

http.createServer((req,res)=>{
  var file=__dirname+req.url;
  fs.readFile(file,(err,data)=>{
    if(err){
      log(err.message);
      res.statusCode=404;
      res.end(err.message);
    }else{
      res.end(data);
    }
  });
}).listen(8080);

if(!buf[fileName]){
  console.log('read file');
  buf[fileName]=fs.readFileSync(fileName);
}

res.end(buf[fileName]);