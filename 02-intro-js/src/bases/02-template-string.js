//----Template String-----


const nombre = "Fernando"
let  apellido = "Herrera"
// console.log(nombre, apellido);

const nombreCompleto = `${nombre} ${apellido}`
console.log(nombreCompleto);



//unidefined
function getSaludo(nombre) {
    return ' Hola Mundo  ' + nombre
}
console.log(`Este es un texto: ${getSaludo()}`);



//definir parametro
function getSaludo2(nombre) {
    return ' Hola Mundo  ' + nombre
}
console.log(`Este es un texto: ${getSaludo(nombre)}`);