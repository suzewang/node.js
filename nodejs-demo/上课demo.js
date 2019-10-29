import { inherits } from "util";

console.log(protocol);

const http=(protocol);

04-crawler目录

mkdir 04-crawler

npm init

vi package.json

npm i cheerio -S //安装第三方

index.js //主程序

vi index.js

const http=require('https'),
    cheerio=require('cheerio'),
    log=console.log,
    print=require('util').debuglog('crawler'),
    addr='https://segmentfault.com/lives/free';

http.get(addr,function(res){
    var result='';

    res.on('data',function(data){
        result+=data;
    })

    res.on('end',function(){
        print(result);

        //page parse
        var $=cheerio.load(result);
        $('body').find('.card-body').each(function(){
            print($(this).html());
            var cName=$(this).find('.card-title>a').text(),
            cURL=$(this).find('.card-title>a').attr('href');

            cURL='https'


        });
    })
})

./index.js

NODE_DEBUG=crawler

print->log

curl -L http://www.sian.com/

curl -iL http://

./01

vi 05-redirection.js

const addr='http://www.sian.com/',
http=require('http');

var isOK=false;
do{
    http.get(addr,function(res){
        //print start line
        console.log()
    })
    isOK=true;
}while(!isOK);

process.exit();

http.get(addr,function(res){
    //print start line
    console.log('HTTP')

    if(res.statusCode<400 && res.statusCode>=300)
        get(res.headers.location);
})

do{
    http.get(addr,function(res){

    })
}while(!isOK);

function get(){
    http.get(addr,function(res){

    });
}

get(addr);