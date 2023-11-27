import { useState } from "react";

import "./App.css";
import SingleCat from "./Components/SingleCat";
import Cats from "./Components/BigCats";
import BigCats5 from "./Components/BigCats5";

function App() {
  return (
    <>
      //EXCERCISE 5
      <BigCats5 />
      //EXCERCISE 4
      <Cats />
      <SingleCat />
    </>
  );
}

export default App;
