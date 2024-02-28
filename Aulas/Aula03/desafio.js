//funçao de soma

function soma(a, b) {
    return new Promise((resolve, reject) => {
        if (a === 0 || b === 0) {
            reject((new Error('Essa operaçãp é desnecessária')))
        } else {
            const resultado = a + b;
            if (resultado < 0) {
                reject(new Error('A calculadora só aceita números positivos'))
            } else {
                resolve(resultado)
            }
        }
    })
}

function subtracao(a, b) {
        return new Promise((resolve, reject) => {
            if (a === 0 || b === 0) {
                reject((new Error('Essa operação é desnecessária')))
            } else {
                const resultado = a - b;
                if (resultado > 0) {
                    reject(new Error('A calculadora só aceita números positivos'))
                } else {
                    resolve(resultado)
                }
            }
        })
    }

    function multiplicacao(a, b) {
    return new Promise((resolve, reject) => {
        if (a === 0 || b === 0) {
            reject((new Error('Essa operação é desnecessária')))
        } else {
            const resultado = a * b;
            if (resultado < 0) {
                reject(new Error('A calculadora só aceita números positivos'))
            } else {
                resolve(resultado)
            }
        }
    })
}

function divisao(a, b) {    
    return new Promise((resolve, reject) => {
        if (a <0 || b < 0) {
            reject((new Error('A calculadora só aceita números positivos')))
        } else {
           resolve(a / b)
        }
    })
}

async function calculadora() {
    try{
        const resultadoSoma = await soma(2, 2) 
        console.log('Resultado da soma:', resultadoSoma) 
        
        const resultadoSubtracao = await subtracao(4, 5)
        console.log('Resultado da subtração:', resultadoSubtracao)

        const resultadoMultiplicacao = await multiplicacao(4, 2)
        console.log('Resultado da multiplicação:', resultadoMultiplicacao) 

        const resultadoDivisao = await divisao(4, 2) 
        console.log('Resultado da divisão:', resultadoDivisao)
    }catch(error){
        console.log('Erro ao realizar os calculos:', error.message)
    }
}

calculadora()