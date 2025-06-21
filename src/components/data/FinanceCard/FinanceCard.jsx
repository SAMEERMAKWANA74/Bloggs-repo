import React from 'react';
import '../Stylingforcards.css';
import FinCard1 from './FinCard1';
import FinCard2 from './FinCard2';
import FinCard3 from './FinCard3';


function FinanceCard() {
  return (
    <>
      <div className="mainpart">
        <h1 className="text-3xl font-bold mb-6 text-center">Top Entertainment Blogs of the Week</h1>
        <div className="cards-container">
          <FinCard1 />
          <FinCard2 />
          <FinCard3 />

        </div>
      </div>
    </>
  );
}

export default FinanceCard;
