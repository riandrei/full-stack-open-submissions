import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getPeople = () => {
  const request = axios.get(baseUrl);

  return request.then((response) => response.data);
};

const addPerson = (body) => {
  const request = axios.post(baseUrl, body);

  return request.then((response) => response.data);
};

const deletePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);

  return request;
};

const editPerson = (editedPerson) => {
  console.log(editedPerson);
  const request = axios.put(`${baseUrl}/${editedPerson.id}`, editedPerson);

  return request.then((response) => response.data);
};

export default { getPeople, addPerson, deletePerson, editPerson };
