//API

const APIKey = 'H7NictjzIswlktr6wB09770FldB7LqCI';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIKey} `)


// retunr implicito de la respuesta
//respuestas encadena
peticion
    .then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original;
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    })
    .catch(console.warn)