//----desestructuracion de objetos ----

const persona = {
    nombre: 'tony',
    nombree: 'tony',
    edad: 45,
    clave: 'ironman'
};

//const {extraer } = de este objeto 
const { nombre } = persona;
// renombrar la variable {extraer: nombre de la variable}
const { nombre: nombre2 } = persona

//solo se extrer el nombre  
// console.log(nombre2);


//extraer mas propiedades
const { nombree, edad, clave } = persona
// console.log(nombree);
// console.log(edad);
// console.log(clave);

//retorna el objeto persona
//si se desea agragar una propiedad se anexa en los parametros
//const retunrPrsona = ({nombre, edad, clave})=>{

const retunrPrsona = ({ nombre, edad, clave, rango = 'capitan' }) => {
    // console.log(nombre, edad, clave, rango);
}
retunrPrsona(persona)


const useContext = ({ nombre, edad, clave }) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: { lat: 14.1232, lng: -12.3232 }

    }
}
const { nombreClave, anios, latlng:{lat, lng} } = useContext(persona)
console.log(nombreClave, anios);
console.log(lat,lng);
