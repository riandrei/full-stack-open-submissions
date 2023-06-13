import { useState, useEffect } from 'react';

import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import SearchForm from './components/SearchForm';
import Notification from './components/Notification';

import phonebookServices from './services/phonebook';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchEntry, setSearchEntry] = useState('');
  const [notificationMessage, setNotificationMessage] = useState(null);

  useEffect(() => {
    phonebookServices.getPeople().then((people) => setPersons(people));
  }, []);

  const handleNotification = (notificationMessage) => {
    setNotificationMessage(notificationMessage);

    setTimeout(() => {
      setNotificationMessage(null);
    }, 5000);
  };

  return (
    <>
      <h2>Phonebook</h2>
      <Notification notificationMessage={notificationMessage} />
      <SearchForm searchEntry={searchEntry} setSearchEntry={setSearchEntry} />
      <h2>add a new</h2>
      <PersonForm
        persons={persons}
        newName={newName}
        newNumber={newNumber}
        setPersons={setPersons}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        handleNotification={handleNotification}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} searchEntry={searchEntry} setPersons={setPersons} />
    </>
  );
};

export default App;
