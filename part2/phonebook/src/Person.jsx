const Person = ({ persons, searchEntry }) => {
  const filteredPeople = !searchEntry
    ? persons
    : persons.filter((person) => person.name.toLowerCase().includes(searchEntry.toLowerCase()));

  console.log(filteredPeople);

  return (
    <>
      {filteredPeople.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </>
  );
};
export default Person;
