import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["avatar"]);
  // console.log(categories);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      return;
    }

    setCategories([newCategory, ...categories]);
    // categories.push(newCategory);
    console.log(newCategory);
  };
  return (
    <>
      {/*--------------- titulo-------------- */}
      <h1>GifExpertApp</h1>
      {/*--------------- input --------------*/}
      <AddCategory
        setCategories={setCategories}
        onNewCategory={onAddCategory} // del value
      />

      {/*--------------- listado de gif ---------------*/}
      {/* <button onClick={onAddCategory}>Agregar</button> */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      {/* <ol>
        {categories.map((category) => {
          return <li key={category}> {category}</li>;
        })}
      </ol> */}

      {/*--------------- gif item   ---------------    */}
    </>
  );
};
