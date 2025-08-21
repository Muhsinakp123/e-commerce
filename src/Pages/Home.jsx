import { useEffect } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
// import HomeBanner from '../Components/HomeBanner';
import { useNavigate } from 'react-router-dom';
import Services from '../Components/Services';
import Brand from '../Components/Brand';
import ThreeCard from '../Components/ThreeCard';
import Products from '../Components/Products';
import Carousel from '../Components/ui/Carousel';

import { Suspense, lazy } from "react";



const HomeBanner = lazy(() => import("../Components/HomeBanner"));

function Home() {

  

  return (
    <>
       <Suspense fallback={<div>Loading ...</div>}>
        < HomeBanner/>
      </Suspense>

        {/* <HomeBanner/> */}
        <ThreeCard/>
        <Products/>
        <Brand/>
        <Services/>
       
        
    </>
  );
}

export default Home



// import { useContext } from "react";
// import Footer from "../Components/Footer";
// import Header from "../Components/Header";
// import HomeBanner from "../Components/HomeBanner";
// import Services from "../Components/Services";
// import Brand from "../Components/Brand";
// import ThreeCard from "../Components/ThreeCard";
// import Products from "../Components/Products";
// import Carousel from "../Components/ui/Carousel";
// import { UserContext } from "../context/UserContext"; // ✅ use this, not UserProvider

// function Home() {
//   const { user } = useContext(UserContext); // 👈 get user from context

//   return (
//     <>
//       {/* 👇 Greeting message */}
//       <div style={{ padding: "20px", fontSize: "20px", fontWeight: "bold" }}>
//         Hi {user?.name || "Guest"}, welcome to my home page 👋
//       </div>

//       <HomeBanner />
//       <ThreeCard />
//       <Products />
//       <Brand />
//       <Services />
//     </>
//   );
// }

// export default Home;
