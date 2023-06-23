const express = require("express");

const app = express();

app.use(express.json());

let phonebookEntries = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (request, response) => {
  response.send(phonebookEntries);
});

app.get("/api/persons/:id", (request, response) => {
  const filteredEntry = phonebookEntries.find(
    (phonebookEntry) => phonebookEntry.id === Number(request.params.id)
  );

  if (filteredEntry) {
    response.send(filteredEntry);
  } else {
    response.status(404).end();
  }
});

app.post("/api/persons", (request, response) => {
  const { name, number } = request.body;

  const newEntry = {
    id: Math.floor(Math.random() * 1000 + 1),
    name,
    number,
  };

  phonebookEntries = phonebookEntries.concat(newEntry);
  response.send(newEntry);
});

app.delete("/api/persons/:id", (request, response) => {
  phonebookEntries = phonebookEntries.filter(
    (phonebookEntry) => phonebookEntry.id !== Number(request.params.id)
  );

  response.status(204).end();
});

app.get("/info", (request, response) => {
  const date = new Date();

  const data = `<p>Phonebook has info for ${phonebookEntries.length} people</p><p>${date}</p>`;

  response.send(data);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
