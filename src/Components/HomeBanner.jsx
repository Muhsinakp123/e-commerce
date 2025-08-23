import { Link, useNavigate } from "react-router-dom";

const HomeBanner = () => {

    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/shop'); 
      };
    return (
        <section id="home">
            <div className="banner">
                <img src="/images/HomeBanner.webp" alt="Banner" />
                <div className="banner-overlay"></div>
                <div className="home-banner-contents container">
                    <div className='content-h3'>
                        <h3>New Year 2019</h3>
                    </div>
                    <h1>BEST SHOPPING</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae posuere est. Sed placerat ligula.</p>
                    <div className="home-buttons">
                        <button className="active-button" onClick={handleButtonClick}>Shop Now</button>
                        <button className="non-active" onClick={handleButtonClick}>Collection</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;
