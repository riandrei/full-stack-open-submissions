const express = require("express");

const app = express();

const phonebookEntries = [
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

app.get("/api/persons", (req, res) => {
  res.send(phonebookEntries);
});

app.get("/api/persons/:id", (req, res) => {
  const filteredEntry = phonebookEntries.find(
    (phonebookEntry) => phonebookEntry.id === Number(req.params.id)
  );

  if (filteredEntry) {
    res.send(filteredEntry);
  } else {
    res.status(404).end();
  }
});

app.get("/info", (req, res) => {
  const date = new Date();

  const data = `<p>Phonebook has info for ${phonebookEntries.length} people</p><p>${date}</p>`;

  res.send(data);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
