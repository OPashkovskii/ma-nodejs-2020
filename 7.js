const vagetables = ['potato', 'tomato', 'cucumber'];
const fruits = ['apple', 'pineapple', 'banana'];
var a = 'cucumber';

if(vagetables.indexOf('cucumber') !=-1){
  console.log('vagetables')
}
else if(fruits.indexOf('cucumber') != -1){
  console.log('fruits')
}

switch (a){
  case vagetables[0]:
  console.log('vagetables');
  break;
  case vagetables[1]:
  console.log('vagetables');
  break;
  case vagetables[2]:
  console.log('vagetables');
  break;
  case fruits[0]:
  console.log('fruits');
  break;
  case fruits[1]:
  console.log('fruits');
  break;
  case fruits[2]:
  console.log('fruits');
  break;
}