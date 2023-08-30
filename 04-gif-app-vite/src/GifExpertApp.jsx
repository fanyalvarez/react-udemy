import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["avatar", "goku"]);
  //   console.log(categories);

  const onAddCategory = () => {
    setCategories([...categories, "hola"]);
  };
  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory />

      {/* listado de gif */}
      <button onClick={onAddCategory}>Agregar</button>

      <ol>
        {categories.map((category) => {
          return <li key={category}> {category}</li>;
        })}
      </ol>

      {/* gif item       */}
    </>
  );
};
