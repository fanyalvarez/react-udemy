// import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
// import { getGifs } from "../helpers/getGifs";
import { useFetchGif } from "../hooks/useFetchGif";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGif(category);

  console.log({ images, isLoading });

  //--------todo esto se traslada a usefecthgrid.js
  // const [images, setImages] = useState([]);

  // const getImages = async () => {
  //   const newImages = await getGifs(category);
  //   setImages(newImages);
  // };

  // useEffect(() => {
  //   getImages();
  // }, []); //[]....que va a regresar

  return (
    <>
      <h3>{category}</h3>

      {/* //ternario simplificado */}
      {isLoading && <h1>Cargando...</h1>}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

// {/* {images.map(({ id, title }) => (
//   <GifItem key={id} />
// ))} */}

// {/* {images.map((img) => (
//   <li key={img.id}>{img.title}</li>
// ))} */}

// const [counter, setcounter] = useState(10);
// {/* <h5>{counter}</h5> */}
// {/* <button onClick={() => setcounter(counter + 1)}> +1 </button> */}
