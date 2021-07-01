const express = require('express');
const fs = require('fs/promises');

const PORT = process.env.PORT || 5000;
const app = express();

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

  await fs.writeFile('./db/palettes.json', JSON.stringify(palettes));

  res.json({ palettes });
  return;
});

app.delete('/api/palettes', async (req, res) => {
  console.log('DELETE', req.body.id);

  const id = req.body.id;

  const palettes = await getPalettes();
  const updatedPalettes = palettes.filter(palette => palette.id !== id);

  await fs.writeFile('./db/palettes.json', JSON.stringify(updatedPalettes));

  res.json({ updatedPalettes });
});

app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));
