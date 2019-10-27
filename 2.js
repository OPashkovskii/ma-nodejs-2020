const users = {
  firstName: 'John',
  secondName: 'Doe',
  rate: 0.86,
  adress: {
    line1: '15 Macon St',
    line2: '',
    city: 'Gotham'
  },
  phoneNumbers: [
    {
      type: 'MOBILE',
      number: '(555) 555-1234'
    },
    {
      type: 'LINE',
      number: '(555) 555-5678'
    }
  ]
};

function isString (element) {
  if (typeof element === 'string')
  {
    return 'is a string'
  }
  else {
    return 'not a string'
  }
}

function isEmpty(obj) 
{
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return 'object not empty';
    }

    return 'object is em';
}

console.log('users.firstName ' + isString(users.firstName));
console.log('users.secondName ' + isString(users.secondName));
if(users.rate>0 && users.rate<1)
  {
    console.log('users.rate ' + 'in range 0 ... 1');
  }

console.log(isEmpty(users.adress));

if(
  users.phoneNumbers.length != 0)
  {
    console.log('users.phoneNumbers ' + 'is not empty')
  }
else {
  console.log('users.phoneNumbers ' + 'null')
}