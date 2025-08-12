import { useEffect, useState } from 'react'
import '../Styles/Footer.css'
import { useLocation } from 'react-router-dom'


const Footer = () => {


    
  const [hidden, setHidden] = useState(false)
  const location = useLocation()
  useEffect(()=> {
      if (location.pathname === '/login'  || location.pathname === '/signup') {
        setHidden(true)
      } else {
        setHidden(false)
      }
    }, [location.pathname])
  

    return (
        <footer style={{ display: hidden ? 'none' : ''}}>
            <div className="footer container">
                <div>
                    <h4>Contacts</h4>
                    <ul>
                        <li>4060 Reppert Coal Road Jackson,<br/>MS 39201 USA</li>
                        <li>(+123) 685 78<br/>(+064) 987 245</li>
                        <li>contact@yoursite.com<br/>support@yoursite.com</li>
                    </ul>
                </div>
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
                <div>
                    <h4>Join Us Newsletter</h4>
                   <p>Lorem ipsum dolor sit amet consectetur adipisc<br/>ing elit. Aenean lobortis</p>
                   <form>
                    <input type='e-mail' name='e-mail' placeholder='Enter Your Email'/>
                    <button type="submit" class="submit-btn"><i class="fa fa-paper-plane"></i></button>
                   </form>
                </div>
            </div>
        </footer>
    )
}

export default Footer