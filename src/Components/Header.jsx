import { Link } from 'react-router-dom'
import '../Styles/Home.css'

const Header = () => {
    return (
      <header>
        <div className='header-content container'>
          <div className='header-img'>
            <img src='/images/logo.png' alt='logo'/>
          </div>
          <nav className='navbar'>
            <ul className='list-items'>
              <li><Link to={'/'}><span>HOME</span></Link></li>
              <li><Link to={'/about'}><span>ABOUT</span></Link></li>
              <li><Link to={'/shop'}><span>SHOP</span></Link></li>
              <li><Link to={'/contact'}><span>CONTACT</span></Link></li>
            </ul>
          </nav>
          <div className='header-icon'>
            <button className='search-btn'>
              <i className="fa fa-search"></i>
            </button>
            <button className='login-btn'>Login</button>
          </div>
        </div>
      </header>
    )
}

export default Header


