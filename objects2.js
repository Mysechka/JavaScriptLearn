const spisok = {
    matematics: 1+2,
    russish: 'Гойда'
}
spisok.matematics = (1+2)*2
spisok.TOF = true
spisok.name = 'Musya'

console.log(spisok)

delete spisok.russish
delete spisok.matematics

console.log(spisok)

spisok['nickname'] = 'MusyaChan'
const myFavoriteGame = 'MFG'
spisok[myFavoriteGame] = {
    first: 'Ready or Not',
    second: 'PayDay3'
}
console.log(spisok)
console.log(spisok.MFG.first)
delete spisok.MFG['first']
console.log(spisok.MFG)

const userprofile = {
    spisok,
    myFavoriteGame,
    register: false
}
console.log(userprofile)

console.log(global)