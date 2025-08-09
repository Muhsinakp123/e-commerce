import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const SignUpForm = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);



  const [formData, setFormData] = useState({
    name:'',
    email: '',
    password: '',
    confirmPassword:''
  })
const handleInputChange = (e) => {
  
  console.log(e.target.value, 'target')
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }


  const handleLogin = (e) => {
    e.preventDefault();
  if (formData.email === '' || formData.password === '' || formData.name === '' || formData.confirmPassword === '') {
    toast.error('Please enter required items.');
    return;
  }
  if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
  }
    setIsLoggedIn(true);
    toast.success("You are now signed in!");
    
    setTimeout (() => {
      window.location.reload();
    },1000)
};
    return (
        <form onSubmit={handleLogin}  className="form">
      <label className="input-hero" htmlFor="name">
        <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} required="" />
        <span className="input-name"> Name </span>
      </label>
      <label className="input-hero" htmlFor="email">
        <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} required="" />
        <span className="input-name"> Email </span>
      </label>
      <label className="input-hero password-input" htmlFor="password">
        <input type={showPassword ? "text" : "password"} name="password" id="password" value={formData.password} onChange={handleInputChange} required="" />
        <span className="input-name"> Password </span>
        <div className="toggle-password-icon" onClick={() => setShowPassword(!showPassword)}>
           <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
        </div>
      </label>
      <label className="input-hero confirm-password-input" htmlFor="confirm-password">
        <input type="password" name="confirmPassword" id="confirm-password" value={formData.confirmPassword} onChange={handleInputChange} required="" />
        <span className="input-name"> Confirm Password </span>
      </label>
      <label htmlFor="remember" className="checkbox-hero">
        <input type="checkbox" name="remember" id="remember" />
        <span className="checkbox-cover" />
        <span className="checkbox-name"> Remember Me </span>
      </label>
      <button type="submit" className="submit-btn btn">
        Continue
      </button>
      <Toaster/>
    </form>
    )
}

export default SignUpForm

