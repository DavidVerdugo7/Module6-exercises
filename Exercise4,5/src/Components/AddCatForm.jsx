import React, { useState } from "react";

const AddCatForm = ({ onSubmit, lastId }) => {
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCat = {
      id: lastId + 1,
      name,
      latinName,
      image,
    };
    onSubmit(newCat);

    setName("");
    setLatinName("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Latin Name:
          <input
            type="text"
            value={latinName}
            onChange={(e) => setLatinName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label type="image">
          Image URL:
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Add Cat</button>
    </form>
  );
};

export default AddCatForm;
