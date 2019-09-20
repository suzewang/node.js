#!/usr/bin/node

const user = {
  name: '苏泽旺',
  age: 20,
  qq: '2072521628'
};

const log = console.log;

//三种占位符
log('name: %s',user.name);
log('age: %d',user.age);
log('JSON: %j',user);

//输出方式一
log('qq: %s',user.qq);

//输出方式二
log('qq:',user.qq);

//向标准错误流中输出信息
console.error('Error: something wrong!');