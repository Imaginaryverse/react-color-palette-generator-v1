import React from 'react';

const PalettePreview = ({ palette }) => {
  return (
    <article className='palette-preview'>
      <p>{palette.name}</p>
      <div className='preview-grid'>
        {palette.colors.map(color => (
          <div
            className='preview-grid__cell'
            key={color.hex}
            style={{ backgroundColor: `${color.hex}` }}
          ></div>
        ))}
      </div>
    </article>
  );
};

export default PalettePreview;
