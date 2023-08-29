import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle, name }) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      {/* <p>{ subTitle + 10000}</p> */}
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
  title: "no hay titulo", //DESDE EL MAIN
  subTitle: "no hay subtitulo", //DESDE EL MAIN
  name: "Fany", //DESDE EL MAIN
};

// //--------------con un valor que no cambiara---------------
// const newMessage = "fany!!!";

// export const FirstApp = () => {
//   return (
//     <>
//       <h1>{newMessage}</h1>

//       <h1>{1 + 1}</h1>
//     </>
//   );
// };

// //--------------usando arrays---------------
// const newMessage = [1,2,3,4,5,6];

// export const FirstApp = () => {
//   return (
//     <>
//       <h1>{newMessage}</h1>

//       <h1>{1 + 1}</h1>
//     </>
//   );
// };

// //--------------usando objetos---------------
// const newMessage = {
//   message: "hi hi",
//   title: "fany",
// };

// export const FirstApp = () => {
//   return (
//     <>
//       {/* acceder al objeto */}
//       <h1>{newMessage.message}</h1>

//       {/* imprimir literal el objeto */}
//       <h1>{/* {JSON.stringify(newMessage)} */}</h1>
//     </>
//   );
// };
