import { useState } from "react";

export default function Cats() {
  const initialCats = [
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
  ];
  //state and handle :
  const [cats, setCats] = useState(initialCats);
  const [filteredCats, setFilteredCats] = useState([]);

  const handleSort = () => {
    const sortedCats = [...cats].sort((a, b) => a.name.localeCompare(b.name));
    setCats(sortedCats);
  };

  const handleReverse = () => {
    const reversedCats = [...cats].reverse();
    setCats(reversedCats);
  };

  const handleFilterPanthera = () => {
    const pantheraCats = cats.filter((cat) =>
      cat.latinName.includes("Panthera")
    );
    setFilteredCats(pantheraCats);
  };

  const handleReset = () => {
    setFilteredCats([]);
  };

  return (
    <div>
      <button onClick={handleSort}>Sort Alphabetically</button>
      <button onClick={handleReverse}>Reverse List</button>
      <button onClick={handleFilterPanthera}>Show Panthera Family</button>
      <button onClick={handleReset}>Reset</button>
      {filteredCats.length > 0
        ? filteredCats.map((cat) => (
            <div key={cat.id}>
              <p>
                Name: {cat.name}, Latin Name: {cat.latinName}
              </p>
              <img src={cat.img} alt={cat.name} />
            </div>
          ))
        : cats.map((cat) => (
            <div key={cat.id}>
              <p>
                Name: {cat.name}, Latin Name: {cat.latinName}
              </p>
              <img src={cat.img} alt={cat.name} />
            </div>
          ))}
    </div>
  );
}
