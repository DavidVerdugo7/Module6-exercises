function Greeting(props) {
  return (
    <div className=" componentBox">
      <h1> Hello world</h1>
      <h2>Hello {props.name} !!</h2>
      {props.children}
    </div>
  );
}

export default Greeting;
