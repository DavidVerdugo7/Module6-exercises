import React, { useState } from "react";
import AddCatForm from "./AddCatForm";

const BigCats5 = () => {
  const [cats, setCats] = useState([
    {
      id: 1,
      name: "Cheetah",
      latinName: "Acinonyx jubatus",
      img: "https://placekitten.com/g/64/64",
    },
    {
      id: 2,
      name: "Cougar",
      latinName: "Puma concolor",
      img: "https://placekitten.com/g/64/64",
    },
    {
      id: 3,
      name: "Jaguar",
      latinName: "Panthera onca",
      img: "https://placekitten.com/g/64/64",
    },
    {
      id: 4,
      name: "Leopard",
      latinName: "Panthera pardus",
      img: "https://placekitten.com/g/64/64",
    },
    {
      id: 5,
      name: "Lion",
      latinName: "Panthera leo",
      img: "https://placekitten.com/g/64/64",
    },
    {
      id: 6,
      name: "Snow leopard",
      latinName: "Panthera uncia",
      img: "https://placekitten.com/g/64/64",
    },
    {
      id: 7,
      name: "Tiger",
      latinName: "Panthera tigris",
      img: "https://placekitten.com/g/64/64",
    },
  ]);

  const [lastId, setLastId] = useState(7); //last id in the list

  const handleAddCat = (newCat) => {
    setCats([...cats, newCat]);
    setLastId(newCat.id);
  };

  const handleDeleteCat = (id) => {
    const updatedCats = cats.filter((cat) => cat.id !== id);
    setCats(updatedCats);
  };

  return (
    <div>
      <div>
        {cats.map((cat) => (
          <div key={cat.id}>
            <p>
              Name: {cat.name}, Latin Name: {cat.latinName}
              <button onClick={() => handleDeleteCat(cat.id)}>Delete</button>
            </p>
            <img src={cat.img} alt={cat.name} />
          </div>
        ))}
      </div>
      <AddCatForm onSubmit={handleAddCat} lastId={lastId} />
    </div>
  );
};

export default BigCats5;
