export default function SingleCat() {
  const cats = [
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

  return (
    <div>
      {cats.map((cat) => (
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
