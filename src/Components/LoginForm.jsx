import { useState } from "react";
import MessageIcon from "./Icons/MessageIcon";
import PasswordIcon from "./Icons/PasswordIcon";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false)
  const navigator = useNavigate()

  const [formData, setFormData] = useState({
    email: 'muhsinamusthafakp26@gmail.com',
    password: 'Muhsina@123'
  })
const handleInputChange = (e) => {
  
  // console.log(e.target.value, 'target')
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }


  // const handleLoginApi = ()

  const handleLogin = async (e) => {
    e.preventDefault();

  if (formData.email === '' || formData.password === '') {
    toast.error('Please enter email and password.');
    return;
  }
    // setIsLoggedIn(true);
    setLoading(true)
    // toast.success("You are now logged in!");



    // login function
    await axios.post('https://ecommerce-project-backend-nodejs.onrender.com/api/auth/login', formData, {}).then(res=> {
 
      // console.log(res.data.data, 'from then')

      window.localStorage.setItem('access_token', res.data.token)
      window.localStorage.setItem('user_data', JSON.stringify(res.data.data))
      navigator('/')

    }).catch(err=> {
       toast.error('Login failed! Please try again')
    }).finally(()=> {
      setLoading(false)
    })
};
  



    return (
        <form onSubmit={handleLogin} className="form">
      <label className="input-hero" htmlFor="email">
        <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} required="" />
        <span className="input-name"> Email </span>
        <MessageIcon/>
      </label>
      <label className="input-hero password-input" htmlFor="password">
        <input type={showPassword ? "text" : "password"} name="password" id="password" value={formData.password} onChange={handleInputChange} required="" />
        <span className="input-name"> Password </span>
        <div className="toggle-password-icon" onClick={() => setShowPassword(!showPassword)}>
           <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
        </div>
        <a href="#" className="recovery-password">
          {" "}
          Forgot password{" "}
        </a>
      </label>
      <label htmlFor="remember" className="checkbox-hero">
        <input type="checkbox" name="remember" id="remember" />
        <span className="checkbox-cover" />
        <span className="checkbox-name"> Remember Me </span>
      </label>
      <button type="submit" className="submit-btn btn" disabled={loading}>
       { loading ? 'Logging in...' : ' Login'}
      </button>
      <div className="form-bottom">
        Don't have account yet?
        <Link to={'/signup'}><span>Sign Up</span></Link>
      </div>
       <Toaster/>
    </form>
    )
}

export default LoginForm








