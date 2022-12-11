// import React, { useState, useEffect } from "react";

// export default function App() {

//   //each time we update state variabl ethe app component re render
//   // you can have as many state var as you need.
//   //you must always initialize with a default value 
//   //use state is a react hook
//   const [movieData, setMovieData] = useState({});
//   const [movieTitle, setMovieTitle] = useState("star wars");
// // use effect is a react hook 
//   useEffect(() => {
//     const movieUrl = `https://www.omdbapi.com/?t=${movieTitle}&apikey=98e3fb1f`;
//     const makeApiCall = async () => {
//       const res = await fetch(movieUrl);
//       const json = await res.json();
//       setMovieData(json);
//     };
//     makeApiCall();
//   }, []);
//   return(
//     //anything above the return that chamnges the state triggers a re render of the jsx Here
//   )
// }