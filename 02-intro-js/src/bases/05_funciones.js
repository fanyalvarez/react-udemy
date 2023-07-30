//----FUNCIONES JS ----


//funcion trabajarla como const 
const saludar = function (nombre) {
    return `hola ${nombre}`
}
console.log(saludar('goku'));


//funcion flecha
const saludar2 = (nombre) => {
    return `hola ${nombre}`
}

//simplificarlo si solo maneja un return 
const saludar21 = nombre => `hola ${nombre}`;

// dimplificado sin parametros especificos
const saludar211 = () => `hola goku21`;


console.log(saludar2('goku'));
console.log(saludar21('goku2'));
console.log(saludar211());


//react
const getUser = () => {
    return {
        uid: `asdasd`,
        username: `hola dev getuser`
    }
}
console.log(getUser());

//simplificado con el retunr implicito
const getuser2 = () => ({
    uid: `asdasd`,
    username: `hola dev simplificado`
});

console.log(getuser2());


////tarea
//1 trasnsformar a una funcion de flecha
//2tiene que retornar un objeto implicito
//3prueba

function getUsario(nombre) {
    return {
        uid: `12123`,
        username: nombre,
    }
};
console.log(getUsario(`fany`));

const getUsario2 = (nombre) => ({
    uid: `12123`,
    username: nombre
});
console.log(getUsario(`coraline`));
