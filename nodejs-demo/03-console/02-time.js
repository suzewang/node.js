#!/usr/bin/node

console.time('TEST');
task();
console.timeEnd('TEST');

function task() {
  var n;

  for(var i=0;i<5000;i++) {
    for(var j=0;j<5000;j++) {
      n = i * j;
    }
  }

  return n;
}