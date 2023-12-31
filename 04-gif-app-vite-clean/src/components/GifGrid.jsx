import { GifItem } from "./GifItem";
import { useFetchGif } from "../hooks/useFetchGif";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGif(category);

  console.log({ images, isLoading });

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
