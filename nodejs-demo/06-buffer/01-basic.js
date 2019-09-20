#!/usr/bin/node

const log=console.log;

var buf1=new Buffer(256);
buf1[0]=0;

log('buf1 length:',buf1.length);
log('\nbuf1:',buf1);

//通过循环初始化buf1的每个字节
for(var i=0;i<buf1.length;i++){
  buf1[i]=i;
}

log('\nbuf1:',buf1);

//对buf1做切片操作
var buf2=buf1.slice(247,256);
log('\nbuf2:',buf2);

//对buf2做填充操作
buf2.fill(0);
log('\nbuf2:',buf2);

//用数组初始化buf3
var array=[1,2,3,4,5];
var buf3=new Buffer(array);

log('\nbuf3:',buf3.length,buf3);

//用字符串初始化buf4
var buf4=new Buffer('hello world','utf8');
log('\nbuf4:',buf4.length,buf4);

//将buf4的内容复制到buf3中
buf4.copy(buf3,0,0,buf3.length);
log('\nbuf3:',buf3.length,buf3);

