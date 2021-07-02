import React, { useState } from 'react';
import HarmonyGenerator from '../components/HarmonyGenerator';

const Home = () => {
  const [hasClosedNews, setHasClosedNews] = useState(false);

  const handleCloseNews = () => {
    setHasClosedNews(true);
  };

  return (
    <section className='page home-page'>
      {!hasClosedNews ? (
        <div className='news-container'>
          <h3>Great news!</h3>
          <p>The harmonies generator BETA is live!</p>
          <p>Check it out below!</p>
          <button
            className='btn close-news-btn'
            onClick={() => handleCloseNews()}
          >
            X
          </button>
        </div>
      ) : (
        ''
      )}
      <HarmonyGenerator />
    </section>
  );
};

export default Home;
