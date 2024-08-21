const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

let reservations = [
  {
    id: 1,
    customer: "John Doe",
    service: "Hotel Room",
    date: "2024-08-21",
    time: "14:00",
    status: "confirmed"
  }
];

app.post('/reservations', (req, res) => {
  const newReservation = {
    id: reservations.length + 1,
    ...req.body
  };
  reservations.push(newReservation);
  res.status(201).json(newReservation);
});

app.get('/reservations', (req, res) => {
  res.json(reservations);
});

app.get('/reservations/:id', (req, res) => {
  const reservation = reservations.find(r => r.id === parseInt(req.params.id));
  if (reservation) {
    res.json(reservation);
  } else {
    res.status(404).json({ message: "Reserva no encontrada" });
  }
});

app.put('/reservations/:id', (req, res) => {
  const reservation = reservations.find(r => r.id === parseInt(req.params.id));
  if (reservation) {
    Object.assign(reservation, req.body);
    res.json(reservation);
  } else {
    res.status(404).json({ message: "Reserva no encontrada" });
  }
});

app.delete('/reservations/:id', (req, res) => {
  reservations = reservations.filter(r => r.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.get('/', (req, res) => {
  res.send('Servidor Express funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
