import { Link, useLocation, useNavigate } from "react-router-dom";
import "../Styles/Header.css";
import { useEffect, useRef, useState } from "react";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import { getFromLocalStorage } from "../utils/helpers";
import Dropdown from "react-dropdown";

const Header = () => {
  const location = useLocation();
  const navigator = useNavigate();

  const handleLogout = () => {
    window.localStorage.clear();
    setIsLoggedIn(false);
    setLogout(true);
    // redirect to login page

    navigator("/login");
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [hidden, setHidden] = useState(false);
  const [isLogout, setLogout] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // const dropdownRef = useRef(null);

  useEffect(() => {
    // console.log(location.pathname, 'aaa')
    const token = getFromLocalStorage("access_token");

    if (!token) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [location.pathname]);

  //  function useClickOutside(ref, callback) {
  //   useEffect(() => {
  //     function handleClick(event) {
  //       // if click is outside the element
  //       if (ref.current && !ref.current.contains(event.target)) {
  //         callback();
  //       }
  //     }
  //     document.addEventListener("mousedown", handleClick);
  //     return () => {
  //       document.removeEventListener("mousedown", handleClick);
  //     };
  //   }, [ref, callback]);
  // }

  //   useClickOutside(dropdownRef, () => setIsDropdownOpen(false));

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      setHidden(true);
    } else {
      setHidden(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location.pathname]);

  return (
    <header style={{ display: hidden ? "none" : "", position: "relative" }}>
      <div className="header-content container">
        <div className="header-img">
          <img src="/images/logo.webp" alt="logo" />
        </div>
        <nav className="navbar">
          <ul className="list-items">
            <li>
              <Link to={"/"}>
                <span>HOME</span>
              </Link>
            </li>
            <li>
              <Link to={"/about"}>
                <span>ABOUT</span>
              </Link>
            </li>
            <li>
              <Link to={"/shop"}>
                <span>SHOP</span>
              </Link>
            </li>
            <li>
              <Link to={"/contact"}>
                <span>CONTACT</span>
              </Link>
            </li>
          </ul>
        </nav>
        {/* <div className="header-icon">
          <button className="search-btn" onClick={() => setIsSearchOpen(true)}>
            <i className="fa fa-search"></i>
          </button>

          {isSearchOpen && (
            <div className="search-modal-overlay">
              <div className="search-modal">
                <button
                  className="close-search"
                  onClick={() => setIsSearchOpen(false)}
                >
                  ✕
                </button>
                <input
                  type="text"
                  placeholder="Enter Keyword"
                  className="search-input"
                />
                <button className="search-submit">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          )} */}

        <div className="header-icon">
          {/* Search button only visible on Shop page */}
          {location.pathname.startsWith("/shop") && (
            <button
              className="search-btn"
              onClick={() => setIsSearchOpen(true)}
            >
              <i className="fa fa-search"></i>
            </button>
          )}

          {/* Search modal also only for Shop page */}
          {isSearchOpen && location.pathname.startsWith("/shop") && (
            <div className="search-modal-overlay">
              <div className="search-modal">
                <button
                  className="close-search"
                  onClick={() => setIsSearchOpen(false)}
                >
                  ✕
                </button>
                <input
                  type="text"
                  placeholder="Enter Keyword"
                  className="search-input"
                />
                <button className="search-submit">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          )}

          <button className="cart">
            <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link>
          </button>

          <div className="header-profile-icon">
            <button
              className="profile-icon"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <i className="fa-solid fa-circle-user"></i>
            </button>
            {isDropdownOpen && (
              <div className="profile-dropdown">
                <button className="dropdown-item">
                  <i className="fa fa-user"></i> Profile
                </button>

                <Link to="/wishlist" className="dropdown-item">
                  <i className="fa fa-heart"></i> Wishlist
                </Link>
                <Link to="/messages" className="dropdown-item">
                  <i className="fa fa-envelope"></i> Messages
                </Link>
                <Link to="/settings" className="dropdown-item">
                  <i className="fa fa-cog"></i> Settings
                </Link>
                {isLoggedIn && (
                  <>
                    <button
                      onClick={handleLogout}
                      className="dropdown-item logout-btn"
                    >
                      <i className="fa fa-sign-out"></i> Logout
                    </button>
                    {isLogout && location.pathname !== "/login" && (
                      <Link to={"/login"}></Link>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
          {!isLoggedIn && location.pathname !== "/login" && (
            <Link to={"/login"}></Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

// import { useState, useContext, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { UserContext } from "../context/UserContext";
// import "../Styles/Header.css";

// const Header = () => {
//   const { user, isLoggedIn, handleLogout } = useContext(UserContext);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isProfileBoxOpen, setIsProfileBoxOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [hidden, setHidden] = useState(false);

//   const location = useLocation();
//   const navigate = useNavigate();

//   // Hide header on login/signup pages
//   useEffect(() => {
//     if (location.pathname === "/login" || location.pathname === "/signup") {
//       setHidden(true);
//     } else {
//       setHidden(false);
//     }
//   }, [location.pathname]);

//   // Logout handler
//   const onLogout = () => {
//     handleLogout();
//     navigate("/login");
//   };

//   return (
//     <header style={{ display: hidden ? "none" : "", position: "relative" }}>
//       <div className="header-content container">
//         {/* Logo */}
//         <div className="header-img">
//           <img src="/images/logo.webp" alt="logo" />
//         </div>

//         {/* Navigation */}
//         <nav className="navbar">
//           <ul className="list-items">
//             <li><Link to="/">HOME</Link></li>
//             <li><Link to="/about">ABOUT</Link></li>
//             <li><Link to="/shop">SHOP</Link></li>
//             <li><Link to="/contact">CONTACT</Link></li>
//           </ul>
//         </nav>

//         {/* Right side icons */}
//         <div className="header-icon">
//           {/* Search button */}
//           <button className="search-btn" onClick={() => setIsSearchOpen(true)}>
//             <i className="fa fa-search"></i>
//           </button>

//           {/* Search modal */}
//           {isSearchOpen && (
//             <div className="search-modal-overlay">
//               <div className="search-modal">
//                 <button
//                   className="close-search"
//                   onClick={() => setIsSearchOpen(false)}
//                 >
//                   ✕
//                 </button>
//                 <input
//                   type="text"
//                   placeholder="Enter Keyword"
//                   className="search-input"
//                 />
//                 <button className="search-submit">
//                   <i className="fa fa-search"></i>
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Profile Dropdown */}
//           <div className="header-profile-icon">
//             <button
//               className="profile-icon"
//               onClick={() => {
//                 setIsDropdownOpen(!isDropdownOpen);
//                 setIsProfileBoxOpen(false);
//               }}
//             >
//               <i className="fa-solid fa-circle-user"></i>
//             </button>

//             {isDropdownOpen && (
//               <div className="profile-dropdown">
//                 {/* Profile toggle */}
//                 <button
//                   className="dropdown-item"
//                   onClick={() => setIsProfileBoxOpen(!isProfileBoxOpen)}
//                 >
//                   <i className="fa fa-user"></i> Profile
//                 </button>

//                 {/* Inner Profile Box */}
//                 {isProfileBoxOpen && (
//                   <div className="profile-box">
//                     <h4>Hi, {user?.name || "Guest"}</h4>
//                     <p>{user?.email || "guest@example.com"}</p>
//                   </div>
//                 )}

//                 <Link to="/wishlist" className="dropdown-item">
//                   <i className="fa fa-heart"></i> Wishlist
//                 </Link>
//                 <Link to="/messages" className="dropdown-item">
//                   <i className="fa fa-envelope"></i> Messages
//                 </Link>
//                 <Link to="/settings" className="dropdown-item">
//                   <i className="fa fa-cog"></i> Settings
//                 </Link>

//                 {isLoggedIn && (
//                   <button
//                     className="dropdown-item logout-btn"
//                     onClick={onLogout}
//                   >
//                     <i className="fa fa-sign-out"></i> Logout
//                   </button>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
