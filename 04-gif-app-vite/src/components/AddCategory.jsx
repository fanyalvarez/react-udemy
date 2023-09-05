import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState("");

  // const onChangeInt = (event) => {
  const onChangeInt = ({ target }) => {
    //desestructuracion del event
    // setInputValue("hello");
    // console.log(event.target.value);      //console.log
    // setInputValue(event.target.value)
    setInputValue(target.value); //desestructuracion del event
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(inputValue);
    if (inputValue.trim().length <= 1) {
      return;
    }
    // onNewCategory((categories) => [inputValue, ...categories]);
    onNewCategory (inputValue.trim())
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        // onChange={(event) => onChangeInt(event)}
        onChange={onChangeInt} //simplificado
      />
    </form>
  );
};
