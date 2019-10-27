let text = 'Hello world';
var arr = Array.from(text);
var newArr = [];
var word = '';

for (let i = 0; i <= arr.length-1; i++){
  if(arr[i] == 'o')
  {
    console.log(i+1);
  }
}

for (let i = 0; i<= arr.length -1; i++){
  if(arr[i] != 'l')
  {
    newArr.push(arr[i]);
  }
}

for (let i = 0; i<=newArr.length -1;i ++){
  word += newArr[i]
}

console.log(word);