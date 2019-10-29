#!/usr/bin/node

const http=require('http');

var sessions={}, //存放Session的字典
    key='SessionID',
    EXPIRES=5*1000;

function genSession(){
    var session={
        id:(new Date()).getTime()+Math.random(),
        expire:(new Date()).getTime()+EXPIRES
    };

    sessions[session.id]=session;

    return session;
}

function getCookie(req){
    if(typeof req.headers['cookie']==='undefined'){
        return null;
    }

    var cookieArray=req.headers['cookie'].split(';'),
    cookie={};

    cookieArray.forEach((cookie)=>{
        var pair=cookie.trim().split('=');
        cookie[pair[0]]=pair[1];
    });

    return cookies;
}

http.createServer((req,res)=>{
    var cookie=getCookie(req);
    var sessionID=(cookies===null)?null:cookies[key];

    if(!sessionID){ //Cookie中没有SessionID
        req.session=genSession();
    }else{ //Cookie中有SessionID
        var session=sessions[sessionID];

        if(session){ //Cookie中的SessionID在Session列表中
            if(session.expire>(new Date()).getTime()){
                session.expire=(new Date()).getTime()+EXPIRES;
                req.session=session;
            }else{ //Session过期了
                delete sessions[sessionID];
                req.session=genSession();
            }
        }else{ //Cookie中的SessionID没有在Session字典中
            req.session=genSession();
        }
    }

    res.setHeader('Set-cookie',`${key}=${req.session.id}`);
    res.end('hello world!');
}).listen(8080);