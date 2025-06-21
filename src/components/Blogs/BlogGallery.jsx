import React from 'react';
import '../Stylingforcards.css';
import SportsCard1 from '../data/SportsCard/SportsCard1';
import TechnoCard3 from '../data/TechnologyCard//TechnoCard3';
import FineCard3 from '../data/FinanceCard/FinCard3';


function PoliticsCat() {
  return (
    <>
      <div className="mainpart">
        <h1 className="text-3xl font-bold mb-6 text-center">Top Blogs of the Week</h1>
        <div className="cards-container">
         <FineCard3 />
         <TechnoCard3 />
         <SportsCard1 />
        </div>
      </div>
    </>
  );
} 

export default PoliticsCat;
