import React from 'react';
import '../Stylingforcards.css';
import SportsCard1 from './SportsCard1';
import SportsCard2 from './SportsCard2';
import SportsCard3 from './SportsCard3';


function SportsCard() {
  return (
    <>
      <div className="mainpart">
        <h1 className="text-3xl font-bold mb-6 text-center">Top Sports Blogs of the Week</h1>
        <div className="cards-container">
          <SportsCard1 />
          <SportsCard2 />
          <SportsCard3 />

        </div>
      </div>
    </>
  );
}

export default SportsCard;
