import NewServices_Card from "./NewServices_Card";

const NewServices = () => {
  return (
    <section>
      <h2 className="text-3xl">Mes services</h2>
      {[...Array(3)].map((_, index) => (
        <NewServices_Card key={index} index={index} />
      ))}
    </section>
  );
};

export default NewServices;
