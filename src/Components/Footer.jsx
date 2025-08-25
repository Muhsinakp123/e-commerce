import { useEffect, useState } from 'react'
import '../Styles/Footer.css'
import { useLocation } from 'react-router-dom'



const UserFooter = ({hidden}) => {


     return (
        <footer style={{ display: hidden ? 'none' : ''}}>
            <section id='top-footer'> 
                <div className="footer-top container">
                    <div>
                        <h4>Contacts</h4>
                        <ul>
                            <li><i className="fa-solid fa-location-dot"></i>4060 Reppert Coal Road Jackson,<br/>MS 39201 USA</li>
                            <li><i className="fa-solid fa-mobile-retro"></i>(+123) 685 78<br/>(+064) 987 245</li>
                            <li><i className="fa-solid fa-envelope"></i>contact@yoursite.com<br/>support@yoursite.com</li>
                        </ul>
                    </div>
                    <div className='info-serv'>
                    <div>
                        <h4>Information</h4>
                        <ul>
                            <li>About Us</li>
                            <li>Delivery Information</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Services</h4>
                        <ul>
                            <li>Returns</li>
                            <li>Site Map</li>
                            <li>Wish List</li>
                            <li>My Account</li>
                            <li>Order History</li>
                        </ul>
                    </div>
                    </div>
                    <div>
                        <h4>Join Us Newsletter</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisc<br/>ing elit. Aenean lobortis</p>
                        <form>
                            <div className='news-letter'>
                                <input type='e-mail' name='e-mail' placeholder='Enter Your Email'/>
                                <button type="submit" className="email-submit"><i className="fa fa-paper-plane"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section id='bottom-footer'>
                <div className="footer-bottom container">
                    <div className='bottom-btn'>
                        <button className='footer-btn'><i className="fa-brands fa-facebook-f"></i></button>
                        <button className='footer-btn'><i className="fa-brands fa-pinterest"></i></button>
                        <button className='footer-btn'><i className="fa-brands fa-linkedin-in"></i></button>
                        <button className='footer-btn'><i className="fa-brands fa-twitter"></i></button>
                        <button className='footer-btn'><i className="fa-brands fa-instagram"></i></button>
                    </div>
                    <p>Copyright © 2023 RapidShop, All rights Reserved.</p>
                    <img src='/images/card.webp' alt='footer-img'/>
                </div>
            </section> 
        </footer>
    )
}



const AdminFooter  = () => {

  return <div>Admin Footer</div>
}

const Footer = () => {

  const [hidden, setHidden] = useState(false)
  const location = useLocation()


  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup"  ) {
      setHidden(true);
      setIsAdmin(false)
    } else if (location.pathname === '/admin') {
      setHidden(true)
      setIsAdmin(true)
    } else {
      setHidden(false);
    }
  }, [location.pathname]);

  
  const [isAdmin, setIsAdmin] = useState(false)
  const userFooterProps = ({hidden}) 

  if (isAdmin) {

    return <AdminFooter/>
  } else {

    return <UserFooter {...userFooterProps}/>
  }
};
   
export default Footer