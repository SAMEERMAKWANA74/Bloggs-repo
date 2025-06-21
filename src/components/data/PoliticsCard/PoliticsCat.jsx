import React from 'react';
import '../Stylingforcards.css';
import PoliticsCard1 from './PoliticsCard1';
import PoliticsCard2 from './PoliticsCard2';
import PoliticsCard3 from './PoliticsCard3';

function PoliticsCat() {
  return (
    <>
      <div className="mainpart">
        <h1 className="text-3xl font-bold mb-6 text-center">Top Politics Blogs of the Week</h1>
        <div className="cards-container">
          <PoliticsCard1 />
          <PoliticsCard2 />
          <PoliticsCard3 />
        </div>
      </div>
    </>
  );
}

export default PoliticsCat;
