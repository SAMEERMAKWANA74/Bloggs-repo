import './App.css'
import Header from './components/Header';
import Bodypart from './components/Bodypart';
import Logincomp from './components/Logincomp';
import PoliticsCat from './components/data/PoliticsCard/PoliticsCat';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogGellery from './components/Blogs/BlogGallery';
import SportsCard from './components/data/SportsCard/SportsCard';
import EntertainmentCard from './components/data/Entertainment/EntertainmentCard';
import FinanceCard from './components/data/FinanceCard/FinanceCard';
import TechnoCard from './components/data/TechnologyCard/TechnologyCard';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import CreatePage from './components/CreateCompo/CreatePage';
import Footer from './Footer';


function App() {

  return (
    <>
    <Router>
      <Header />
      <Routes>
            <Route path="/" element={<Bodypart/>}/>
            <Route path="/login" element={<Logincomp />} />
            <Route path="/Trandigblog" element={<BlogGellery/>} />
            <Route path='/category/politics' element={<PoliticsCat/>} />
            <Route path='/category/sports' element={<SportsCard/>} />
            <Route path='/category/Technology' element={<TechnoCard/>}/>
            <Route path='/category/Entertainment' element={<EntertainmentCard/>}/>
            <Route path='/category/Finance' element={<FinanceCard/>}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/about' element={<About/>}/>
            <Route path="/create" element={<CreatePage />} />

      </Routes>
      <Footer/>
    </Router>
      
    </>
  )
}

export default App
