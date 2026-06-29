console.log('-----------------mutation-----------------')

const person = {
    name: 'Musya',
    age: 15,
    adult: false
}
const person1 = person
person1.age = 16
person1.adult = true
console.log(person)
console.log(person1)

console.log('------------------------------------------')

const person2 = {
    name: 'Musya',
    age: 15,
    adult: false,
    schoolFolder: {
        class: 9,
        schoolName: 'МБОУ СОШ',
        certificate: false
    }
}
const person3 = Object.assign({}, person2)
person3.age = 16
person3.adult = true
person3.schoolFolder.class = 10

console.log(person2)
console.log(person3)

console.log('------------------------------------------')

const person4 = {
    name: 'Musya',
    age: 15,
    adult: false,
    schoolFolder: {
        class: 9,
        schoolName: 'МБОУ СОШ',
        certificate: false
    }
}

const person5 = { ...person4}
person5.age = 16
person5.adult = true
person5.schoolFolder.class = 10

console.log(person4)
console.log(person5)

console.log('------------------------------------------')

const person6 = {
    name: 'Musya',
    age: 15,
    adult: false,
    schoolFolder: {
        class: 9,
        schoolName: 'МБОУ СОШ',
        certificate: false
    }
}
const person7 = JSON.parse(JSON.stringify(person6))
person7.age = 16
person7.adult = true
person7.schoolFolder.class = 10
person7.certificate = true

console.log(person6)
console.log(person7)