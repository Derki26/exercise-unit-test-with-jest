// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum };


// // declaramos una funcion con el mismo nombre "fromYenToPound"
// const fromYenToPound = function(valueInYen){
//     // convertimos el valor a dolares
//     let valueInEngland = valueInYen * 127.9;
//     // retornamos el valor
//     return valueInEngland;
// }

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
//module.exports = { sum, euroToUsd, fromEuroToDollar, fromYenToPound };

function euroToUsd(euro){
    if (euro <0) {
        console.log("you can't have negative value")
        return
    }
    return euro*1.2
}


function fromYenToPound(yen){
    if (yen <0) {
        console.log("you can't have negative value")
        return
    }
    return yen*0.0055
}

console.log(Math.floor(Math.random()*13))
module.exports = { sum, euroToUsd, fromEuroToDollar, fromYenToPound };