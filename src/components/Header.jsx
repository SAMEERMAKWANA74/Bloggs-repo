import { Link } from 'react-router-dom';
import Categories from './Categories';
import './Header.css';

function Header() {
  return (
    <header>
      <nav className="mainpointhead">
        <div className="maincontainer">
          <div className='namecompny'><Link to="https://github.com/SAMEERMAKWANA74">Bloggs</Link></div>
          <ul className="head-items">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Categories /></li>
            <li><Link to="/Trandigblog">Trending-Blogs</Link></li>
            <li><Link to="/">Home</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
