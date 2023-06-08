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

    setPersons(
      persons.concat({
        name: newName,
        number: newNumber
      })
    );
    setNewName('');
    setNewNumber('');
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
