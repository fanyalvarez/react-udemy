// Desestructuracion de arreglos

const personajes = ['goku','vegeta', 'gohan'];
const [ , ,p3]= personajes;
console.log(p3);// retorna a gohan

const  retornaArreglo = ()=>{
    return ['abc',123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const  useState = (valor)=>{
    return[valor, ()=>{console.log('holamundo')}  ]
};
const [nombre, setNombre] = useState('goku')

console.log(nombre); //retorna los dos valores del array
setNombre()