import { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("avatar");

  // const onChangeInt = (event) => {
  const onChangeInt = ({ target }) => {//desestructuracion del event
    // setInputValue("hello");
    // console.log(event.target.value);      //console.log
    // setInputValue(event.target.value)
    setInputValue(target.value); //desestructuracion del event
  };

  const onSubmit=(event)=>{
    event.preventDefault()
    console.log(inputValue);
  }

  return (
    <form onSubmit={(event)=>onSubmit(event)}>
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
