//Microdesafios 30.06
// 1

let pares = [2, 4, 6, 8]
let impares = pares.map(function(num){
    return num+1;
});
console.log(impares)

console.log('-------------')

// 2
let nomes = ['Cris', 'Leo', 'Maria', 'Silvia', 'Maria']
let maria = nomes.filter(function(nome){
    return nome == 'Maria'
});

console.log(maria)

console.log('-------------')

// 3
let numeros = [1, 2, 3, 4, 5, 6]
let formatacao = numeros.reduce (
    function (acumulador, numero) {
        return acumulador + '-' + numero
    }
);
console.log(formatacao)

console.log('-------------')

// 4
let animais = ['jacaré', 'vaca', 'cachorro', 'gato']
animais.forEach (function (animal){
    console.log('Esse animal é um(a) ' + animal + '.')
});
