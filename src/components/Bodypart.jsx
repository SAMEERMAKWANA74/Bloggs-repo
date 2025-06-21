
import './Bodypart.css';
import myImage from '../assets/home.avif'; 
import { Button } from '@headlessui/react';
import { Navigate, useNavigate } from 'react-router-dom';

const Bodypart = () => {
   const navigate = useNavigate();
  return (
    <>
    <div className='mainbodypart'>
      <div className="leftside">
         <div className='allinfo'>
              <h2>Welcome to Bolggs – Your Daily Dose of Insight</h2>
              <p  className='paragraphinfo'>Welcome to Bloggs – your daily dose of stories, ideas, and inspiration.Explore trending topics from technology, sports, politics, lifestyle, and more.
              We bring you curated content written by passionate writers and industry voices.Stay informed with the latest news, insights, and in-depth articles.Whether you're here to learn or just browse, we have something for everyone.Discover featured stories, editor picks, and community-driven discussions.Our mission is to empower minds through meaningful content.Get involved—read, comment, and share your thoughts with others.Follow your favorite categories and never miss an update.Bloggs isn’t just a blog site — it’s a growing community of curious readers like you.</p>
              
         </div> 
         <div className='thisbutton'>
                    <h3>Just Sign up to create your First Blog</h3>               
                    <Button onClick={() => navigate('/create')}>Create</Button>         
                    <p>Have a story to tell? Your voice matters. Share your insights with the world.</p>
                    <p>Whether it’s your passion, opinion, or knowledge — your words can inspire someone.</p>
                    <p>Don’t wait. Start your blogging journey today and build your own audience.</p>
             </div>
        </div>
      
        <img src={myImage} alt="Blog Visual" className="myimageclass" />
    </div>
    </>
  )
}

export default Bodypart
