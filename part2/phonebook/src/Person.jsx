const Person = ({ persons }) => {
  return (
    <>
      {persons.map((person) => (
        <p key={person.name}>{person.name}</p>
      ))}
    </>
  );
};
export default Person;
