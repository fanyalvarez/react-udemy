import { getGifs } from "../helpers/getGifs";


console.log('hello')

export const GifGrid = ({ category }) => {
  getGifs(category);

  return (
    <>
      <h3>{category}</h3>
    </>
  );
};
