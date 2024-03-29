const myInfo = {
  name: 'jack',
  phoneNumber: '123456',
  'samsung product': {
    buds: 'Galaxy Buds pro',
    galaxy: 'Galaxy s99',
  },
}

console.log(myInfo.name)
console.log(myInfo['name'])

console.log(myInfo['samsung product'])
console.log(myInfo['samsung product'].galaxy)


const obj = {
  name: 'jack',
  greeting() {
    console.log('hi!')
  }
}

console.log(obj.name)
console.log(obj.greeting())


const key = 'ssafy'
const value = ['한국', '미국', '일본', '중국']

const myObj = {
  [key]: value,
}

console.log(myObj)
console.log(myObj.country)



const jsonData = {
  coffee: 'Americano',
  iceCream: 'Mint Choco',
}

// Object -> json
const objToJson = JSON.stringify(jsonData)

console.log(objToJson)          // {"coffee":"Americano","iceCream":"Mint Choco"}
console.log(typeof objToJson)   // string

// json -> Object
const jsonToObj = JSON.parse(objToJson)

console.log(jsonToObj)          // { coffee: 'Americano', iceCream: 'Mint Choco' }
console.log(typeof jsonToObj)   // object
console.log(jsonToObj.coffee)   // Americano
console.log(jsonToObj.iceCream) // Mint Choco
