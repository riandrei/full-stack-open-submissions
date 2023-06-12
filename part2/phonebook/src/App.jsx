import { useState, useEffect } from 'react';

import Persons from './Persons';
import PersonForm from './PersonForm';
import SearchForm from './SearchForm';

import phonebookServices from './services/phonebook';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchEntry, setSearchEntry] = useState('');

  useEffect(() => {
    phonebookServices.getPeople().then((people) => setPersons(people));
  }, []);

  return (
    <>
      <h2>Phonebook</h2>
      <SearchForm searchEntry={searchEntry} setSearchEntry={setSearchEntry} />
      <h2>add a new</h2>
      <PersonForm
        persons={persons}
        newName={newName}
        newNumber={newNumber}
        setPersons={setPersons}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} searchEntry={searchEntry} />
    </>
  );
};

export default App;
