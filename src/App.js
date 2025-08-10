import './App.css';
import Home from './Pages/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Shop from './Pages/Shop';

function App() {
  return (
    <main>
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
         </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;