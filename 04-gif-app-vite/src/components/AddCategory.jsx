import { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("avatar");
  const onChangeInt = () => {
    setInputValue("hello");
  };

  return (
    <input
      type="text"
      placeholder="Buscar gifs"
      value={inputValue}
      onChange={(event) => onChangeInt(event)}
    />
  );
};
