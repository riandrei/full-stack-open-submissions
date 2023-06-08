import { useState } from 'react';

import Person from './Person';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const handleNameChange = (e) => {
    const newValue = e.target.value;

    setNewName(newValue);
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
        name: newName
      })
    );
    setNewName('');
  };

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Person persons={persons} />
    </>
  );
};

export default App;