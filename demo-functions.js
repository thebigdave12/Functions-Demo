

let obiWanHealth = 100

// let healthString = obiWanHealth + ""
// let healthString = String(`Your health is ${obiWanHealth}`)

// console.log(healthString)

// // let healthNum = Number(healthString)
// let healthNum = +healthString
// console.log(obiWanHealth)

// let healthBool = Boolean(obiWanHealth)
// console.log(healthBool)

// let theWinner = 'Anakin won the fight!'
// let theRealWinner = theWinner.replace('Anakin', 'Obiwan').toUpperCase().replace('FIGHT', 'BATTLE')

// console.log(theWinner)
// console.log(theRealWinner)

// let winnerArray = theRealWinner.split(' ')
// let newWinnerArray = winnerArray.join('-') // the glue to stick them back together

// // let kebabWinner = theRealWinner.replaceAll(' ', '-')

// console.log(winnerArray)
// console.log(newWinnerArray)

//function nameOfFunction(param1, param2){
    // code to run
// }

function isAlive(){
    if (obiWanHealth > 0) {
        console.log('The Saga Continues')
    } else {
        console.log('RIP OBI BOI')
    }
}

// isAlive()

// let stubbToe = 2
// let spacePirate = 25
// let jawa = 7


// function sneakAttack(attackValue){
//     obiWanHealth -= attackValue

//     console.log(`Obi's health is now ${obiWanHealth}`) //template literal

//     return isAlive()

// }

// sneakAttack(spacePirate)
// sneakAttack(75)

// function greeting (name1, name2) {
//     return `${name1} says Hello There to ${name2}`
// }

// const greeting = (name1, name2) => {
//     return `${name1} says Hello There to ${name2}`
// }

const greeting = (name1, name2) => `${name1} says Hello There to ${name2}`


console.log(greeting('Obiwan', 'Uncle Owen'))