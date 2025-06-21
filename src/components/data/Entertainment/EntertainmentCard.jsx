import React from 'react';
import '../Stylingforcards.css';
import EntertainCard1 from './EntertainCard1';
import EntertainCard2 from './EntertainCard2';
import EntertainCard3 from './EntertainCard3';


function EntertainmentCard() {
  return (
    <>
      <div className="mainpart">
        <h1 className="text-3xl font-bold mb-6 text-center">Top Entertainment Blogs of the Week</h1>
        <div className="cards-container">
          <EntertainCard1 />
          <EntertainCard2 />
          <EntertainCard3 />

        </div>
      </div>
    </>
  );
}

export default EntertainmentCard;
