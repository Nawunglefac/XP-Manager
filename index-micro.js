const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let characterXP = 0;

const calculateLevel = (xp) => {
    return Math.floor(xp / 100);
};

app.post('/accumulate-xp', (req, res) => {
    const { xp } = req.body;

    if (typeof xp !== 'number' || xp < 0) {
        return res.status(400).send({ message: 'Invalid XP value.' });
    }

    characterXP += xp;
    res.send({ message: 'XP accumulated successfully.', currentXP: characterXP });
});

app.get('/current-level', (req, res) => {
    const level = calculateLevel(characterXP);
    res.send({ currentLevel: level, currentXP: characterXP });
});

app.listen(port, () => {
    console.log(`XP Microservice listening at http://localhost:${port}`);
});
