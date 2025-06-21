import React from 'react';
import './Footer.css';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <>
      <footer className='mt-10'>
        <div className="bg-gray-800  py-4 text-gray-400">
          <div className="container px- mx-auto">
            <div className="-mx-4 flex flex-wrap justify-between">
              <div className="px-4 my-4 w-full xl:w-1/5">
                <a href="/" className="block w-56 mb-10">
                  {/* SVG LOGO */}
                  <svg viewBox="0 0 3368 512" xmlns="http://www.w3.org/2000/svg">
                    {/* Simplified for brevity */}
                    <text fill="white" fontSize="40" fontWeight="bold">
                      <tspan x="0" y="60">Bloggs</tspan>
                    </text>
                  </svg>
                </a>
                <p className="text-justify">
                  Bloggs is your hub of daily insights and stories. Discover curated content across technology, lifestyle, politics, and more.
                </p>
              </div>

              <div className="px-4 my-4 w-full sm:w-auto">
                <h2 className="text-2xl pb-4 mb-4 border-b-4 border-[#D9EAFD]">Company</h2>
                <ul className="leading-8">
                  <li><a href="#" className="hover:text-[#D9EAFD]">About Us</a></li>
                  <li><a href="#" className="hover:text-[#D9EAFD]">Terms & Conditions</a></li>
                  <li><a href="#" className="hover:text-[#D9EAFD]">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-[#D9EAFD]">Contact Us</a></li>
                </ul>
              </div>

              <div className="px-4 my-4 w-full sm:w-auto">
                <h2 className="text-2xl pb-4 mb-4 border-b-4 border-[#D9EAFD]">Blog</h2>
                <ul className="leading-8">
                  <li><a href="#" className="hover:text-[#D9EAFD]">HTML & CSS Basics</a></li>
                  <li><a href="#" className="hover:text-[#D9EAFD">Flexbox Explained</a></li>
                  <li><a href="#" className="hover:text-[#D9EAFD]">Productive Tailwind Usage</a></li>
                  <li><a href="#" className="hover:text-[#D9EAFD]">See More</a></li>
                </ul>
              </div>

              <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
                <h2 className="text-2xl pb-4 mb-4 border-b-4 border-[#D9EAFD]">Connect With Us</h2>
                <div className="flex flex-wrap gap-2">
                  <SocialIcon  url="https://www.linkedin.com/in/sameer-makwana/"/>
                  <SocialIcon  url="https://www.instagram.com/the_sem_07/#"/>
                  <SocialIcon  url="https://github.com/SAMEERMAKWANA74"/>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 py-4 text-gray-100 text-center text-sm">
      <p>
        © 2025 <a href="https://github.com/SAMEERMAKWANA74" target="_blank" rel="noopener noreferrer">SAMEERMAKWANA74</a>. All Rights Reserved.
      </p>
          <p>Made by Sameer Makwana.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
