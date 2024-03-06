const numbers = []
const elements = {}
for (let i = 0; i < 10000; i++) {
    numbers.push(Math.round(Math.random()*20) + 1)   
}

for (let i = 1; i<=20; i++) {
    tmp = 0
    numbers.forEach(element => {
        if(i == element){
            tmp++
        }
    })
    elements[i] = tmp
}

console.log(elements)