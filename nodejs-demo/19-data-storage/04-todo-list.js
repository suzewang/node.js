#!/usr/bin/node

const http=require('http'),
mysql=require('mysql'),
qs=require('querystring');

var items=[];

http.createServer((req,res)=>{
    if(req.url!='/'){
        err(res);
        return;
    }

    console.log(req.headers);
    console.log('');

    switch(req.method){
        case 'GET':
            show(res);
            break;
        case 'POST':
            add(req,res);
            break;
        default:
            err(res);
            break;
    }
}).listen(8080);

function show(res){
    var html='<!DOCTYPE html>\n'
    +'<html>\n'
    +'<head>\n'
    +'<meta charset="UTF-8">\n'
    +'<title>Todo list</title>\n'
    +'</head>\n'
    +'<body>\n'
    +'<h1>Todo List</h1>\n'
    +'<ul>\n'
    +items.map(function(item){return '<li>'+item+'</li>';}).join('\n')
    +'</ul>\n'
    +'<form method="post" action="/">\n'
    +'<p><input type="text" name="item" />'
    +'<input type="submit" value="Add Item" /></p>\n'
    +'</form>\n'
    +'</body>\n'
    +'</html>';

    res.setHeader('Content-Type','text/html');
    res.setHeader('Content-Length',Buffer.byteLength(html));

    res.statusCode=200;
    res.end(html);
}

function add(req,res){
    var body='';

    req.on('data',function(chunk){
        body+=chunk;
    });
    req.on('end',function(){
        console.log(body);

        if(body!=''){
            items.push(qs.parse(body).item);
        }

        show(res);
    });
}

function err(res){
    var msg='Not found';

    res.statusCode=404;
    res.setHeader('Content-Length',msg.length);
    res.setHeader('Content-Type','text/plain');

    res.end(msg);
}

function select(){

}

function insert(){

}

const ,
    con=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'ddd',
        database:'test'
    });

con.connect();

//增
con.query('insert into books(book_id,title,status) values(?,?,?)',['103','wangding',0],(err,result)=>{
    if(err){
        console.error(err.message);
        process.exit(1);
    }

    console.log(result);
});
//删
con.query('delete from books where book_id=?',[103],(err,result)=>{
    if(err){
        console.error(err.message);
        process.exit(1);
    }

    console.log(result);
})
//改
con.query('update books set title=?where book_id=?',['hello world',103],(err,result)=>{
    if(err){
        console.error(err.message);
        process.exit(1);
    }

    console.log(result);
})
//查
con.query('select * from books',(err,result)=>{
    if(err){
        console.error(err.message);
        process.exit(1);
    }

    console.log(result);
})

con.end();