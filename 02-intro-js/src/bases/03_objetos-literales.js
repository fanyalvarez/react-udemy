//----Objetivos literales-----

const persona = {
    nombre:'Tony',
    apellido:'stark',
    edad:45,
    direccion:{
        ciudad: 'NY',
        zip:51353414,
        lat:12.34124,
        lng:14.24214
    }
};

console.log(persona);
console.table(persona);

const persona2 = persona;
const persona3 = {...persona};
persona2.nombre = 'peter';
persona3.nombre = 'Manuel';

console.log(persona2);
console.log(persona3);
