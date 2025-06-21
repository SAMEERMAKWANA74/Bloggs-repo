import React from 'react';
import '../Stylingforcards.css';
import TechnoCard1 from './TechnoCard1';
import TechnoCard2 from './TechnoCard2';
import TechnoCard3 from './TechnoCard3';

function TechnoCard() {
  return (
    <>
      <div className="mainpart">
        <h1 className="text-3xl font-bold mb-6 text-center">Top Technology Blogs of the Week</h1>
        <div className="cards-container">
         <TechnoCard1/>
         <TechnoCard2/>
         <TechnoCard3/>
        </div>
      </div>
    </>
  );
}

export default TechnoCard;
