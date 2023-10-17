// importar la función sum del archivo app.js
const { sum, euroToUsd,  fromYenToPound} = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("sum, and euroToUsd", ()=> {
    const { euroToUsd } = require('./app.js')
    expect(euroToUsd(5)).toBe(6);
});

test("sum, and euroToUsd", () => {
    const { euroToUsd } = require('./app.js')
    expect(euroToUsd(-5)).toBe();
});

test("sum, and fromYenToPound", ()=> {
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(1000)).toBe(5.5);
});

test("sum, and fromYenToPound", ()=> {
    const { fromYenToPound } = require('./app.js')
});