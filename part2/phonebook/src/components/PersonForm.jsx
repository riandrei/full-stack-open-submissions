import phonebookServices from '../services/phonebook';

const PersonForm = ({ persons, newName, newNumber, setNewName, setNewNumber, setPersons, handleNotification }) => {
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

    const filteredPersons = persons.filter((person) => person.name === newName);

    if (filteredPersons.length > 0) {
      const confirmMessage = `${filteredPersons[0].name} is already added to the phonebook, replace the old number with a new one?`;

      if (!window.confirm(confirmMessage)) {
        return;
      }

      phonebookServices.editPerson({ ...filteredPersons[0], number: newNumber }).then((editedPerson) => {
        setPersons(persons.map((person) => (person.id === editedPerson.id ? editedPerson : person)));
        setNewName('');
        setNewNumber('');
        handleNotification(`Replaced ${editedPerson.name}'s number`);
      });
    } else {
      phonebookServices.addPerson({ name: newName, number: newNumber }).then((person) => {
        setPersons(persons.concat(person));
        setNewName('');
        setNewNumber('');
        handleNotification(`Added ${person.name}`);
      });
    }
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
