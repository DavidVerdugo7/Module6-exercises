function JdName(props) {
  return (
    <>
      <div className="welcome">
        <h1>this is a component to try {props.name}</h1>
      </div>

      {props.children}
    </>
  );
}

export default JdName;
