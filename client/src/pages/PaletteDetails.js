import React from 'react';
import { useParams } from 'react-router';

const PaletteDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <p>{id}</p>
    </div>
  );
};

export default PaletteDetails;
