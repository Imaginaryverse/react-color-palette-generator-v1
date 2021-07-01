const express = require('express');
const fs = require('fs/promises');

const PORT = process.env.PORT || 5000;
const app = express();

/* const palettes = [
  {
    id: uuid,
    title: 'Super Mario',
    colors: [
      {
        name: 'Maroon Red',
        hsl: { hue: num, sat: num, lum: num },
        hex: 'XXXXXX',
        rgb: { red: num, green: num, blue:  num }
      }
    ],
    date: new Date.now().toLocaleString(),
  },
]; */

const getPalettes = async () => {
  try {
    const data = await fs.readFile('./db/palettes.json');
    return JSON.parse(data); // maybe await
  } catch (error) {
    console.log(error);
    await fs.writeFile('./db/palettes.json', JSON.stringify([]));
    return [];
  }
};

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ msg: 'Hello from server!' });
});

app.get('/api/palettes', async (req, res) => {
  const palettes = await getPalettes();

  console.log(palettes);

  res.json({ palettes });
});

app.post('/api/palettes', async (req, res) => {
  if (!req.body.id) {
    res.json({ msg: 'Oops! Something went wrong...' });
    return;
  }

  const palette = req.body;
  const palettes = await getPalettes();
  palettes.push(palette);

  console.log(palettes);

  await fs.writeFile('./db/palettes.json', JSON.stringify(palettes));

  res.json({ msg: 'OK! Palette added' });
  return;
});

app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));
