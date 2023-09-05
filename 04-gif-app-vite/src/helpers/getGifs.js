//peticion api
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=7dQXNBLQISo2vk03MMRaCG8AtDzPVfCz&q=${category}&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    console.log(data);
  
    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      urlGif: img.images.downsized_medium.url,
    }));
    console.log(gifs);
  
    return gifs;
  };