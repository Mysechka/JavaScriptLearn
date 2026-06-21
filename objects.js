const myCity = {
    city: 'New York'
}
myCity.popular = true

console.log(myCity)

myCity.country = 'USA'

console.log(myCity)

myCity.country = 'Russia'

myCity.popular = false

myCity.city = 'Новый йорк'

console.log(myCity)

const musyaBio = {
    name: 'Musya',
    age: 15,
    city: 'Seversk',
    favLaung: 'JavaScript'
}

console.log(musyaBio)

const copyOfmusyaBio = musyaBio

copyOfmusyaBio.age = 16
copyOfmusyaBio.city = 'Tomsk'

const kolyaLOH = true

if (kolyaLOH === false) {
    copyOfmusyaBio.favLaung = 'CSS'
}

console.log(copyOfmusyaBio)
console.log(musyaBio)
