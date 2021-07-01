import axios from 'axios';

const fetchPalettes = async () => {
  const res = await axios.get('/api/palettes');
  const list = await res.data.palettes;

  return list;
};

export default fetchPalettes;
