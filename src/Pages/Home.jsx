import { useEffect } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import HomeBanner from '../Components/HomeBanner';
import { useNavigate } from 'react-router-dom';
import Services from '../Components/Services';
import Brand from '../Components/Brand';
import ThreeCard from '../Components/ThreeCard';

function Home() {

  

  return (
    <>
       
        <HomeBanner/>
        <ThreeCard/>
        <Brand/>
        <Services/>
       
        
    </>
  );
}

export default Home