import React from 'react';
import './About.css';
import { SocialIcon } from 'react-social-icons';

const About = () => {
  return (
    <div className='mainpart-body'>
      <div className="second-frame">
        <div className='third-frame'>
          <h1>About Us</h1>
          <p>
            Welcome to Bloggs — your space to express, explore, and engage.
            We’re a community-driven platform where ideas come to life through words.
            Whether you're passionate about sports, politics, tech, or lifestyle — we’ve got a space for you.
            Start writing your thoughts, share your stories, and connect with readers worldwide.
            At Bloggs, your voice matters.
          </p>
          <h3 className='myself'>My Social Media Handles are below 🠻</h3>
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px', marginLeft: '50px' }}>
            
          <SocialIcon className='icons' url="https://www.linkedin.com/in/sameer-makwana/" />
          <SocialIcon className='icons' url="https://www.instagram.com/the_sem_07/#" />
          <SocialIcon className='icons' url="https://github.com/SAMEERMAKWANA74" /></div>
        </div>

        <img
          className="image-frame"
          src="https://png.pngtree.com/png-vector/20220813/ourmid/pngtree-new-office-employee-illustration-png-image_5852224.png"
          alt="Profile Analysis"
        />
      </div>
    </div>
  );
};

export default About;
