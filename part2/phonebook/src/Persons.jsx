const Persons = ({ persons, searchEntry }) => {
  const filteredPersons = !searchEntry
    ? persons
    : persons.filter((person) => person.name.toLowerCase().includes(searchEntry.toLowerCase()));

  return (
    <div>
      {filteredPersons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default Persons;
