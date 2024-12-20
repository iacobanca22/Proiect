const express = require('express');
const app = express();
const { LocuriDeParcare, Utilizator, Rezervari } = require('./models');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// API pentru a rezerva un loc de parcare
app.post('/rezervari', async (req, res) => {
    const { user_id, parking_id } = req.body;

    try {
        // Verifică dacă locul de parcare este disponibil
        const parkingSpot = await LocuriDeParcare.findByPk(parking_id);
        if (parkingSpot.status === 'ocupat') {
            return res.status(400).send('Locul de parcare nu este disponibil');
        }

        // Crează o nouă rezervare
        const newReservation = await Rezervari.create({
            user_id: user_id,
            parking_id: parking_id,
            reserved_at: new Date(),
        });

        // Actualizează statusul locului de parcare la "ocupat"
        parkingSpot.status = 'ocupat';
        await parkingSpot.save();

        res.status(201).send(newReservation);
    } catch (error) {
        res.status(500).send('Eroare la crearea rezervării');
    }
});

// API pentru a obține locurile de parcare disponibile
app.get('/locuri-de-parcare', async (req, res) => {
    try {
        const availableSpots = await LocuriDeParcare.findAll({
            where: { status: 'disponibil' },
        });
        res.status(200).json(availableSpots);
    } catch (error) {
        res.status(500).send('Eroare la obținerea locurilor de parcare');
    }
});

// Pornește serverul
app.listen(3000, () => {
    console.log('Serverul rulează pe portul 3000');
});cd