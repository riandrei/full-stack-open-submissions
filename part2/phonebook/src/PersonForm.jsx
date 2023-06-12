import phonebookServices from './services/phonebook';

const PersonForm = ({ persons, newName, newNumber, setNewName, setNewNumber, setPersons }) => {
  const handleNameChange = (e) => {
    const newValue = e.target.value;

    setNewName(newValue);
  };

  const handleNumberChange = (e) => {
    const newValue = e.target.value;

    setNewNumber(newValue);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const isExistingPerson = persons.map((person) => person.name).indexOf(newName);

    if (isExistingPerson >= 0) {
      alert(`${persons[isExistingPerson].name} is already added to the phonebook`);
      return;
    }

    phonebookServices.addPerson({ name: newName, number: newNumber }).then((person) => {
      setPersons(persons.concat(person));
      setNewName('');
      setNewNumber('');
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        name: <input onChange={handleNameChange} value={newName} />
      </div>
      <div>
        number: <input onChange={handleNumberChange} value={newNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
export default PersonForm;
