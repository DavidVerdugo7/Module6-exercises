export default function Cats() {
  const cats = [
    { id: 1, name: "Cheetah", latinName: "Acinonyx jubatus" },
    { id: 2, name: "Cougar", latinName: "Puma concolor" },
    { id: 3, name: "Jaguar", latinName: "Panthera onca" },
    { id: 4, name: "Leopard", latinName: "Panthera pardus" },
    { id: 5, name: "Lion", latinName: "Panthera leo" },
    { id: 6, name: "Snow leopard", latinName: "Panthera uncia" },
    { id: 7, name: "Tiger", latinName: "Panthera tigris" },
  ];

  return (
    <div>
      {cats.map((cat) => (
        <p key={cat.id}>
          {" "}
          Name: {cat.name}, Latin Name: {cat.latinName}{" "}
        </p>
      ))}
    </div>
  );
}
