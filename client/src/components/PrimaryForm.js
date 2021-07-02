import React from 'react';

const PrimaryForm = ({
  primaryHue,
  primarySat,
  primaryLum,
  handleInputChange,
  handleRandomClick,
}) => {
  return (
    <form className='primary-form'>
      <div className='input-container'>
        <div className='input-wrapper'>
          <p className='input-wrapper__prop'>Hue:</p>
          <input
            type='range'
            min='0'
            max='360'
            value={primaryHue}
            onChange={e => handleInputChange(e, 'hue')}
          />
          <p className='input-wrapper__val'>{primaryHue}°</p>
        </div>
        <div className='input-wrapper'>
          <p className='input-wrapper__prop'>Sat:</p>
          <input
            type='range'
            min='0'
            max='100'
            value={primarySat}
            onChange={e => handleInputChange(e, 'sat')}
          />
          <p className='input-wrapper__val'>{primarySat}%</p>
        </div>
        <div className='input-wrapper'>
          <p className='input-wrapper__prop'>Lum:</p>
          <input
            type='range'
            min='0'
            max='100'
            value={primaryLum}
            onChange={e => handleInputChange(e, 'lum')}
          />
          <p className='input-wrapper__val'>{primaryLum}%</p>
        </div>
      </div>
      <button className='btn random-btn' onClick={e => handleRandomClick(e)}>
        Random
      </button>
    </form>
  );
};

export default PrimaryForm;
