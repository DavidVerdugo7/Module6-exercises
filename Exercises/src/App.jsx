import { useState } from "react";
import "./App.css";

import Greeting from "./components/Greeting";
import City from "./components/City";

import FullName from "./components/FullName";
import NamePart from "./components/Name";
import Comment from "./components/Comment";
import ComplexComment from "./components/ComplexComponent";
import Cats from "./components/BigCats";
import SingleCat from "./components/SingleCat";

// This creates a new component as a function that returns some JSX.
// Add this in App.jsx ABOVE the App component

function Welcome(props) {
  // custom Welcome component
  return (
    <div className="Welcome componentBox ">
      {/* if the 'name' prop exists, render it on the screen */}
      <h3>Welcome {props.name}!</h3>
      {/* if this component has children, render them here */}
      {props.children}
    </div>
  );
}

function App() {
  // part of complexcomponent exercise:
  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      // author is also an object
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64",
    },
  };

  return (
    <>
      <SingleCat />
      //EXERCISE 2
      <Cats />
      //EXERCISE 1
      <Greeting name="JD">
        {" "}
        <h2>This is the children from Greeting</h2>
      </Greeting>
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
      <ComplexComment
        author={comment.author}
        date={comment.date}
        text={comment.text}
      />
      <FullName first="Kendrick" last="Lamar" />
      <City name="Sidney" />
      <Welcome name="students">
        <p>Children of Welcome numero 1 </p>
      </Welcome>
      <Welcome name="family">
        <p>Children of Welcome numero 2</p>
      </Welcome>
      <Welcome name="friends">
        <h1>thi is the last component</h1>
        <p style={{ color: "green" }}>Children of last component</p>
      </Welcome>
    </>
  );
}

export default App;
