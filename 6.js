const first = [1,2,3,4,5];
const second = [6,7,8,9,0];
var last = [];

for (let i = 1; i<=5; i++){
  last.push(first[first.length-i], second[second.length-i])
}

console.log(last)