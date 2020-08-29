import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

// ES7 snippets to do `rfce`

function Home() {
  return (
    <div className='home'>
      <div className='home__section'>
        <Card />
        <Card />
        <Card />
      </div>
      <Banner />
    </div>
  );
}

export default Home;
