const data = '21345A67098';
var newData = Array.from(data);
var newArr = [];
var newStr = '';

for (let i =0; i <= newData.length - 1; i++){
  if(newData[i]%2 === 0 && newData[i] != 0){
    newArr.push(newData[i])
  }
}

for(let i = 0; i<= newArr.length -1; i++){
  newStr += newArr[i]
}

console.log(newStr)