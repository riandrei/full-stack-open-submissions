import phonebookServices from './services/phonebook';

const Persons = ({ persons, searchEntry, setPersons }) => {
  const filteredPersons = !searchEntry
    ? persons
    : persons.filter((person) => person.name.toLowerCase().includes(searchEntry.toLowerCase()));

  const handleDeleteClick = ({ id, name }) => {
    const confirmationMessage = `Delete ${name}`;

    if (!window.confirm(confirmationMessage)) {
      return;
    }

    phonebookServices.deletePerson(id).then(() => {
      setPersons(persons.filter((person) => person.id !== id));
    });
  };

  return (
    <div>
      {filteredPersons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
          <button onClick={() => handleDeleteClick(person)}>delete</button>
        </p>
      ))}
    </div>
  );
};

export default Persons;
