// import { createContext, useState, useEffect } from "react";
// import { getFromLocalStorage } from "../utils/helpers";

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Load user from localStorage on refresh
//   useEffect(() => {
//     const savedUser = JSON.parse(getFromLocalStorage("user_data"));
//     if (savedUser) {
//       setUser(savedUser);
//       setIsLoggedIn(true);
//     }
//   }, []);

//   // Logout
//   const handleLogout = () => {
//     localStorage.clear();
//     setUser(null);
//     setIsLoggedIn(false);
//   };

//   return (
//     <UserContext.Provider value={{ user, setUser, isLoggedIn, handleLogout }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
