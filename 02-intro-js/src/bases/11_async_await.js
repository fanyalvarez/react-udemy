// async await   try y catch


//----normal
// const getImagenPromesa = ()=>{
//     const promesa =new Promise((resolve, reject) => {
//         resolve('ejemplo')
//     })
//     return promesa
// }
// getImagenPromesa().then(console.log)

//---simplificado
// const getImagenPromesa = ()=> new Promise(resolve => resolve('ejemplo'))
// getImagenPromesa().then(console.log)

//---usando async

const getImagen = async () => {

try {

    const APIKey = 'H7NictjzIswlktr6wB09770FldB7LqCI';
    const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIKey} `)
    const { data } = await respuesta.json()
    const { url } = data.images.original;
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)

    console.log(data);
} catch (error) {
    console.error(error);
}


}
getImagen()