//----Arreglo ----

// const arreglo = new Array(10)
// const arreglo2 = []

const arreglo2 = [1,2,3]
// arreglo2.push(1)
// arreglo2.push(2)
// arreglo2.push(3)

// console.log(arreglo);
console.log(arreglo2);


// let arreglo1 = arreglo
// arreglo.push(5)


let arreglo1 = [...arreglo2, 5]
console.log(arreglo1);

const arreglo3 = arreglo1.map(function (numero) {
return numero*2
})
console.log(arreglo3);

